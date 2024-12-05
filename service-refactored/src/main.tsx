//import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
//*
import {
	BrowserRouter,
	Link,
	//Outlet,
	Routes,
	Route
  } from 'react-router-dom';
  // */
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Container,
	Button,
} from 'react-bootstrap';

import {
	JoinHost,
	JoinHost_Host,
	JoinHost_Join
} from './joinhost.tsx'

import {
	Account,
	Account_Login,
	Account_Register
} from './login.tsx'

import {Play} from './play.tsx';

const Home: React.FC = () => {
	return (
		<Container>
			<p>
				Welcome to <b>not-too-high.xyz</b>, the website for playing classic luck-pushing card games
				that emphasize the running total.
			</p>
			<p>
				We don't have much of anything right now...Check back soon!
			</p>
			<p>
				<b>
					<Link to={localStorage.getItem("token") ? "/join-host" : "/account"}>Click here to start playing!</Link>
				</b>
			</p>
		</Container>
	);
};

const MainPage: React.FC = () => {
	const [ userName, setUserName ] = React.useState(localStorage.getItem("userName"));
	
	window.addEventListener('storage', () => {
		var userNameInStorage = localStorage.getItem("userName");
		if(userNameInStorage) setUserName(userNameInStorage);
		else setUserName('');
	})

	function logout() {
		localStorage.clear();
		window.dispatchEvent(new Event("storage"));
	}

	return (
	<BrowserRouter>
		<header className="navbar bg-dark text-white site-header sticky-top py-2 justify-content-between">
			<div className="container">
				<h1>Not Too High</h1>
				<p>{userName ? `Hello, ${userName}` : ""}</p>
				<Link to="#" onClick={() => logout()} hidden={userName ? false : true}><Button variant="outline-secondary">Log out</Button></Link>
				<Link to="/"><Button className="btn-secondary">Home</Button></Link>
			</div>
		</header>
		<p></p>
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/join-host" element={<JoinHost IsPrimary={true} />} />
				<Route path="/join-host/join/*" element={<JoinHost_Join />} />
				<Route path="/join-host/host" element={<JoinHost_Host />} />
				<Route path="/account" element={<Account IsPrimary={true} />} />
				<Route path="/account/login" element={<Account_Login />} />
				<Route path="/account/register" element={<Account_Register />} />
				<Route path="/play/*" element={<Play />} />
			</Routes>
		</main>

		<footer className="footer fixed-bottom bg-dark text-white text-center">
			<div>Not Too High designed by Thomas Ertle</div>
			<div>(other copyright information will go here)</div>
			<div>This is an open-source project. <a href="https://github.com/Tertle950/startup-for-class-2">Here's the Github!</a></div>
		</footer>
	</BrowserRouter>
	);
}

ReactDOM.createRoot(document.getElementById('root')!).render(<MainPage />)
