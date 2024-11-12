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
	DropdownButton
} from 'react-bootstrap';

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

const JoinHost: React.FC = () => {
	const IsPrimary = true;

	return (
		<Container>
			<p>
				Let's play a game! Want to join a game, or host one?
			</p>
			<Row>
				<Col><Link to="/join-host/join"><Button variant={IsPrimary ? "primary" : "secondary"} className="w-100">Join</Button></Link></Col>
				<Col><Link to="/join-host/host"><Button variant={IsPrimary ? "outline-primary" : "outline-secondary"} className="w-100">Host</Button></Link></Col>
			</Row>
		</Container>
	);
}

const JoinHost_Join: React.FC = () => {
	return (
		
		<>
			<JoinHost IsPrimary={false} />
			<p></p>
			<Container>
				<Row>
					<Col sm="4">
						<InputGroup className="mb-3">
							<DropdownButton
								variant="outline-secondary"
								title="Game"
								id="game-select"
							>
								<Dropdown.Item href="#">Straw</Dropdown.Item>
							</DropdownButton>
							<Form.Control aria-label="ID" placeholder="XXX-XXX-XX" />
						</InputGroup>	
					</Col>
					<Col>
						<Link to="/play"><Button className="w-100">Start</Button></Link>
					</Col>
				</Row>
				
			</Container>
		</>
	)
}

const JoinHost_Host: React.FC = () => {
	return (
		<>
			<JoinHost />
			<p></p>
			<Container>
				<p>nothing here yet</p>
			</Container>
		</>
	)
}

const MainPage: React.FC = () => {
	return (
	<BrowserRouter>
		<header className="navbar bg-dark text-white site-header sticky-top py-2 justify-content-between">
			<div className="container">
				<h1>Not Too High</h1>
				<Link to="/"><Button className="btn-secondary">Home</Button></Link>
			</div>
		</header>
		<p>

		</p>
		
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/join-host" element={<JoinHost />} />
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
