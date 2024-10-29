//import { StrictMode } from 'react'
import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	NavLink,
	Routes,
	Navigate,
	Route
  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

const Home: React.FC = () => {
	return (
		<Container className="p-3">
			<p>
				Welcome to <b>not-too-high.xyz</b>, the website for playing classic luck-pushing card games
				that emphasize the running total.
			</p>
			<p>
				We don't have much of anything right now...Check back soon!
			</p>
		</Container>
	);
};

createRoot(document.getElementById('root')!).render(
	<div>
		<header className="navbar bg-dark text-white site-header sticky-top py-2 justify-content-between">
			<NavLink to="/"><h1 className="container">Not Too High</h1></NavLink>
		</header>
		<Route path="/" element={<Home />} exact />
		<footer className="footer fixed-bottom bg-dark text-white text-center">
			<div>Not Too High designed by Thomas Ertle</div>
			<div>(other copyright information will go here)</div>
			<div>This is an open-source project. <a href="https://github.com/Tertle950/startup-for-class-2">Here's the Github!</a></div>
		</footer>
	</div>
);
