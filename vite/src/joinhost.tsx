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
	DropdownButton,
	DropdownItem,
	DropdownMenu
} from 'react-bootstrap';

// Is this really necessary!?
interface IsPrimaryProps {
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

    // Handler for selecting an option from the dropdown
    const handleSelect = (eventKey: string | null) => {
        if (eventKey) setSelectedGame(eventKey);
    };

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
                                    <Dropdown.Item eventKey="Straw 100">Straw 100 (test variant)</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
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

export const JoinHost_Host: React.FC = () => {
	return (
		<>
			<JoinHost IsPrimary={false} />
			<p></p>
			<Container>
				<p>nothing here yet</p>
			</Container>
		</>
	)
}