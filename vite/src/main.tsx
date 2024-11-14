//import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
//*
import {
	BrowserRouter,
	Link,
	Outlet,
	Routes,
	Route
  } from 'react-router-dom';
  // */
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	Container,
	Button,
	Dropdown,
	Row,
	Col,
	InputGroup,
	Form,
	DropdownButton,
	DropdownItem,
	DropdownMenu
} from 'react-bootstrap';

import {
	JoinHost,
	JoinHost_Host,
	JoinHost_Join
} from './joinhost.tsx'

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
				<b><Link to="/join-host">Click here to start playing!</Link></b>
			</p>
			<p>
				<b><Link to="/login">Click here to go to the non-working login screen!</Link></b>
			</p>
		</Container>
	);
};



const MainPage: React.FC = () => {
	return (
	<BrowserRouter>
		<header className="navbar bg-dark text-white site-header sticky-top py-2 justify-content-between">
			<div className="container">
				<h1>Not Too High</h1>
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
