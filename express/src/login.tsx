import React from 'react';

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
			<p>This page doesn't work yet!</p>
			<Row>
				<Col><Link to="/account/login"><Button variant={IsPrimary ? "primary" : "secondary"} className="w-100">Login</Button></Link></Col>
				<Col><Link to="/account/register"><Button variant={IsPrimary ? "outline-primary" : "outline-secondary"} className="w-100">Register</Button></Link></Col>
			</Row>
		</Container>
	)
}

export const Account_Login: React.FC = () => {
	const [userName, setUserName] = React.useState('');
	const [_password, setPassword] = React.useState('');

	return (
		<>
		<Account IsPrimary={false} />
		<p></p>
		<Container>
			<p>Login to an existing account. Hello again!</p>
		<div className='input-group mb-3'>
          	<span className='input-group-text'>@</span>
          	<input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          	<span className='input-group-text'>🔒</span>
          	<input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
		<Button className="w-100">Login</Button>
		</Container>
		</>
	)
}

export const Account_Register: React.FC = () => {
	const [_userName, setUserName] = React.useState('');
	const [_password, setPassword] = React.useState('');
	const [_confirmPassword, setConfirmPassword] = React.useState('');

	return (
		<>
		<Account IsPrimary={false} />
		<p></p>
		<Container>
			<p>Register a brand-new account. Welcome to the club!</p>
		<div className='input-group mb-3'>
          <span className='input-group-text'>@</span>
          <input className='form-control' type='text' onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
		<div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />
        </div>
		<Button className="w-100">Create Account</Button>
		</Container>
		</>
	)
}