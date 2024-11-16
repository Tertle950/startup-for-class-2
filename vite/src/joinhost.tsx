import React, { useState } from 'react';

import {
	Link
  } from 'react-router-dom';

import {
	Container,
	Button,
	Dropdown,
	Row,
	Col,
	InputGroup,
	Form,
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';

// Is this really necessary!?
export interface IsPrimaryProps {
	IsPrimary: boolean;
}

export const JoinHost: React.FC<IsPrimaryProps> = ({ IsPrimary = true }) => {
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

export const JoinHost_Join: React.FC = () => {
    // State to store the selected game text
    const [selectedGame, setSelectedGame] = useState("Straw");
	const [code, setCode] = useState("");

    // Handler for selecting an option from the dropdown
    const handleSelect = (eventKey: string | null) => {
        if (eventKey) setSelectedGame(eventKey);
    };

	const codeOnChange = (e: any) => { // i dunno e's type lol
		setCode(e.target.value);
	}

	return (
		<>
			<JoinHost IsPrimary={false} />
			<p></p>
			<Container>
				<Row>
					<Col sm="4">
						<InputGroup className="mb-3">
							<Dropdown onSelect={handleSelect}>
								<Dropdown.Toggle variant="outline-primary" id="game-select">
									{selectedGame}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item eventKey="Straw">Straw</Dropdown.Item>
                                    <Dropdown.Item eventKey="Straw25">Straw 25 (test variant)</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Form.Control aria-label="ID" placeholder="XXXXX" value={code} onChange={(e) => codeOnChange(e)} type="text" />
						</InputGroup>	
					</Col>
					<Col>
						<Link to={"/play/"+selectedGame+"/"+code}><Button className="w-100">Start</Button></Link>
					</Col>
				</Row>
				<p>
					Test for proper reception: {selectedGame}-{code}
				</p>
			</Container>
		</>
	)
}

export const JoinHost_Host: React.FC = () => {
	const [selectedGame, setSelectedGame] = useState("(select)");
	const [code, setCode] = useState("#####");
	const [canPlay, setCanPlay] = useState(false);

	// Handler for selecting an option from the dropdown
    const handleSelect = (eventKey: string | null) => {
        if (eventKey) {
			setSelectedGame(eventKey);
			setCode("RANDO");
			// TODO: The Join button shouldn't work with less than 2 players.
			setCanPlay(true);
		}
    };

	return (
		<>
			<JoinHost IsPrimary={false} />
			<p></p>
			<Container>
				<InputGroup className="mb-3 justify-content-center" size="lg">
					<Dropdown onSelect={handleSelect}>
						<Dropdown.Toggle variant="outline-primary" id="game-select">
							{selectedGame}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item eventKey="Straw">Straw</Dropdown.Item>
							<Dropdown.Item eventKey="Straw25">Straw 25 (test variant)</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<InputGroupText>{code}</InputGroupText>
				</InputGroup>
				<Link to={canPlay ? "/play/"+selectedGame+"/"+code : "#"}>
					<Button className="w-100" disabled={!canPlay}>{canPlay ? "Start" : "Please wait..."}</Button>
				</Link>
				<p></p>
				<p>Players joining so far:</p>
				<ListGroup>
					<ListGroupItem>John Doe</ListGroupItem>
					<ListGroupItem>Jane Doe</ListGroupItem>
					<ListGroupItem>Doe A. Deer</ListGroupItem>
				</ListGroup>
			</Container>
		</>
	)
}