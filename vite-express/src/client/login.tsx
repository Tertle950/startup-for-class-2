import React from 'react';

import {
	Link
	//useNavigate
} from 'react-router-dom';

import {
	Container,
	Button,
	Row,
	Col,
} from 'react-bootstrap';

import {
	MessageDialog,
	MessageDialogLink
} from './messageDialog.jsx';

import {
	IsPrimaryProps
} from './joinhost.tsx'

//const navigate = useNavigate();

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
	const [password, setPassword] = React.useState('');

	const [displayError, setDisplayError] = React.useState(null);
	const [displaySuccess, setDisplaySuccess] = React.useState(null);

	async function login() {
		const endpoint: string = "/api/auth/login";
		const response = await fetch(endpoint, {
			method: 'post',
			body: JSON.stringify({ email: userName, password: password }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		if (response?.status === 200) {
			localStorage.setItem('userName', userName);
			setDisplaySuccess(`✅ You are now logged in!`);
		} else {
			const body = await response.json();
			setDisplayError(`⚠ Error: ${body.msg}`);
		}
	};

	return (
		<>
		<Account IsPrimary={false} />
		<p></p>
		<Container>
			<p>Login to an existing account. Hello again!</p>
		<div className='input-group mb-3'>
          	<span className='input-group-text'>✉️</span>
          	<input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          	<span className='input-group-text'>🔒</span>
          	<input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
		<Button className="w-100" onClick={() => login()}>Login</Button>
		<MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
		<MessageDialogLink message={displaySuccess} to={"/join-host"} />
		</Container>
		</>
	)
}

export const Account_Register: React.FC = () => {
	const [email, setEmail] = React.useState('');
	const [name, setName] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	const [displayError, setDisplayError] = React.useState(null);
	const [displaySuccess, setDisplaySuccess] = React.useState(null);

	async function register() {
		if(password != confirmPassword) return;

		const endpoint: string = "/api/auth/create";
		const response = await fetch(endpoint, {
			method: 'post',
			body: JSON.stringify({ email: email, name: name, password: password }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		if (response?.status === 200) {
			localStorage.setItem('userName', name);
			setDisplaySuccess(`✅ You are now registered!`)
		} else {
			const body = await response.json();
			setDisplayError(`⚠ Error: ${body.msg}`);
		}
	};

	return (
		<>
		<Account IsPrimary={false} />
		<p></p>
		<Container>
			<p>Register a brand-new account. Welcome to the club!</p>
		<div className='input-group mb-3'>
          <span className='input-group-text'>✉️</span>
          <input className='form-control' type='text' onChange={(e) => setEmail(e.target.value)} placeholder='your@email.com' />
        </div>
		<div className='input-group mb-3'>
          <span className='input-group-text'>🧑‍💼</span>
          <input className='form-control' type='text' onChange={(e) => setName(e.target.value)} placeholder='nickname' />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
		<div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='password' onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />
        </div>
		<Button className="w-100" onClick={() => register()}>Create Account</Button>
		<MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
		<MessageDialogLink message={displaySuccess} to={"/join-host"} />
		</Container>
		</>
	)
}