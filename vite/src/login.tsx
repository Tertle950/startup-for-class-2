import React, { useState } from 'react';

import {
	Link
} from 'react-router-dom';

import {
	Container,
	Button,
	Row,
	Col,
} from 'react-bootstrap';

import {
	IsPrimaryProps
} from './joinhost.tsx'

export const Account: React.FC<IsPrimaryProps> = ({ IsPrimary = true }) => {
	return (
		<Container>
			<Row>
				<Col><Link to="/account/login"><Button variant={IsPrimary ? "primary" : "secondary"} className="w-100">Login</Button></Link></Col>
				<Col><Link to="/account/register"><Button variant={IsPrimary ? "outline-primary" : "outline-secondary"} className="w-100">Register</Button></Link></Col>
			</Row>
		</Container>
	)
}

export const Account_Login: React.FC = () => {
	return (
		<>
		<Account IsPrimary={false} />
		<p></p>
		</>
	)
}

export const Account_Register: React.FC = () => {
	return (
		<>
		<Account IsPrimary={false} />
		<p></p>
		</>
	)
}