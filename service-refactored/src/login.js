import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Link
//useNavigate
 } from 'react-router-dom';
import { Container, Button, Row, Col, } from 'react-bootstrap';
import { MessageDialog, MessageDialogLink } from './messageDialog.jsx';
//const navigate = useNavigate();
export const Account = ({ IsPrimary = true }) => {
    return (_jsxs(Container, { children: [_jsx("p", { children: "This page doesn't work yet!" }), _jsxs(Row, { children: [_jsx(Col, { children: _jsx(Link, { to: "/account/login", children: _jsx(Button, { variant: IsPrimary ? "primary" : "secondary", className: "w-100", children: "Login" }) }) }), _jsx(Col, { children: _jsx(Link, { to: "/account/register", children: _jsx(Button, { variant: IsPrimary ? "outline-primary" : "outline-secondary", className: "w-100", children: "Register" }) }) })] })] }));
};
export const Account_Login = () => {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    const [displaySuccess, setDisplaySuccess] = React.useState(null);
    async function login() {
        const endpoint = "/api/auth/login";
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            const responseJson = await response.json();
            localStorage.setItem('userName', responseJson.userName);
            localStorage.setItem('token', responseJson.token);
            window.dispatchEvent(new Event("storage"));
            setDisplaySuccess(`✅ You are now logged in!`);
        }
        else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }
    ;
    return (_jsxs(_Fragment, { children: [_jsx(Account, { IsPrimary: false }), _jsx("p", {}), _jsxs(Container, { children: [_jsx("p", { children: "Login to an existing account. Hello again!" }), _jsxs("div", { className: 'input-group mb-3', children: [_jsx("span", { className: 'input-group-text', children: "\u2709\uFE0F" }), _jsx("input", { className: 'form-control', type: 'text', value: userName, onChange: (e) => setUserName(e.target.value), placeholder: 'your@email.com' })] }), _jsxs("div", { className: 'input-group mb-3', children: [_jsx("span", { className: 'input-group-text', children: "\uD83D\uDD12" }), _jsx("input", { className: 'form-control', type: 'password', onChange: (e) => setPassword(e.target.value), placeholder: 'password' })] }), _jsx(Button, { className: "w-100", onClick: () => login(), children: "Login" }), _jsx(MessageDialog, { message: displayError, onHide: () => setDisplayError(null) }), _jsx(MessageDialogLink, { message: displaySuccess, to: "/join-host" })] })] }));
};
export const Account_Register = () => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    const [displaySuccess, setDisplaySuccess] = React.useState(null);
    async function register() {
        if (password != confirmPassword) {
            setDisplayError(`⚠ Passwords do not match!`);
            return;
        }
        ;
        const endpoint = "/api/auth/create";
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: email, name: name, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', name);
            const responseJson = await response.json();
            localStorage.setItem('token', responseJson.token);
            window.dispatchEvent(new Event("storage"));
            setDisplaySuccess(`✅ You are now registered!`);
        }
        else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }
    ;
    return (_jsxs(_Fragment, { children: [_jsx(Account, { IsPrimary: false }), _jsx("p", {}), _jsxs(Container, { children: [_jsx("p", { children: "Register a brand-new account. Welcome to the club!" }), _jsxs("div", { className: 'input-group mb-3', children: [_jsx("span", { className: 'input-group-text', children: "\u2709\uFE0F" }), _jsx("input", { className: 'form-control', type: 'text', onChange: (e) => setEmail(e.target.value), placeholder: 'your@email.com' })] }), _jsxs("div", { className: 'input-group mb-3', children: [_jsx("span", { className: 'input-group-text', children: "\uD83E\uDDD1\u200D\uD83D\uDCBC" }), _jsx("input", { className: 'form-control', type: 'text', onChange: (e) => setName(e.target.value), placeholder: 'nickname' })] }), _jsxs("div", { className: 'input-group mb-3', children: [_jsx("span", { className: 'input-group-text', children: "\uD83D\uDD12" }), _jsx("input", { className: 'form-control', type: 'password', onChange: (e) => setPassword(e.target.value), placeholder: 'password' })] }), _jsxs("div", { className: 'input-group mb-3', children: [_jsx("span", { className: 'input-group-text', children: "\uD83D\uDD12" }), _jsx("input", { className: 'form-control', type: 'password', onChange: (e) => setConfirmPassword(e.target.value), placeholder: 'confirm password' })] }), _jsx(Button, { className: "w-100", onClick: () => register(), children: "Create Account" }), _jsx(MessageDialog, { message: displayError, onHide: () => setDisplayError(null) }), _jsx(MessageDialogLink, { message: displaySuccess, to: "/join-host" })] })] }));
};
