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

import { Container, Button } from 'react-bootstrap';

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
		</Container>
	);
};

//*
const JoinHost: React.FC = () => {
	return (
		<Container>
			<p>
				Let's play a game! Want to join a game, or host one?
			</p>
			<Button>Join</Button> <Button>Host</Button>
		</Container>
	);
}
// */

const MainPage: React.FC = () => {
	return (
	<BrowserRouter>
		<header className="navbar bg-dark text-white site-header sticky-top py-2 justify-content-between">
			<Link to="/"><h1 className="container">Not Too High</h1></Link>
		</header>
		<p>

		</p>
		{//*
		}
		
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/join-host" element={<JoinHost />} />
			</Routes>
		{// */
		}
		<footer className="footer fixed-bottom bg-dark text-white text-center">
			<div>Not Too High designed by Thomas Ertle</div>
			<div>(other copyright information will go here)</div>
			<div>This is an open-source project. <a href="https://github.com/Tertle950/startup-for-class-2">Here's the Github!</a></div>
		</footer>
	</BrowserRouter>
	);
}

ReactDOM.createRoot(document.getElementById('root')!).render(<MainPage />)
