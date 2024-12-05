import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
//*
import { BrowserRouter, Link, 
//Outlet,
Routes, Route } from 'react-router-dom';
// */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, } from 'react-bootstrap';
import { JoinHost, JoinHost_Host, JoinHost_Join } from './joinhost.tsx';
import { Account, Account_Login, Account_Register } from './login.tsx';
import { Play } from './play.tsx';
const Home = () => {
    return (_jsxs(Container, { children: [_jsxs("p", { children: ["Welcome to ", _jsx("b", { children: "not-too-high.xyz" }), ", the website for playing classic luck-pushing card games that emphasize the running total."] }), _jsx("p", { children: "We don't have much of anything right now...Check back soon!" }), _jsx("p", { children: _jsx("b", { children: _jsx(Link, { to: localStorage.getItem("token") ? "/join-host" : "/account", children: "Click here to start playing!" }) }) })] }));
};
const MainPage = () => {
    const [userName, setUserName] = React.useState(localStorage.getItem("userName"));
    window.addEventListener('storage', () => {
        var userNameInStorage = localStorage.getItem("userName");
        if (userNameInStorage)
            setUserName(userNameInStorage);
        else
            setUserName('');
    });
    function logout() {
        localStorage.clear();
        window.dispatchEvent(new Event("storage"));
    }
    return (_jsxs(BrowserRouter, { children: [_jsx("header", { className: "navbar bg-dark text-white site-header sticky-top py-2 justify-content-between", children: _jsxs("div", { className: "container", children: [_jsx("h1", { children: "Not Too High" }), _jsx("p", { children: userName ? `Hello, ${userName}` : "" }), _jsx(Link, { to: "#", onClick: () => logout(), hidden: userName ? false : true, children: _jsx(Button, { variant: "outline-secondary", children: "Log out" }) }), _jsx(Link, { to: "/", children: _jsx(Button, { className: "btn-secondary", children: "Home" }) })] }) }), _jsx("p", {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/join-host", element: _jsx(JoinHost, { IsPrimary: true }) }), _jsx(Route, { path: "/join-host/join/*", element: _jsx(JoinHost_Join, {}) }), _jsx(Route, { path: "/join-host/host", element: _jsx(JoinHost_Host, {}) }), _jsx(Route, { path: "/account", element: _jsx(Account, { IsPrimary: true }) }), _jsx(Route, { path: "/account/login", element: _jsx(Account_Login, {}) }), _jsx(Route, { path: "/account/register", element: _jsx(Account_Register, {}) }), _jsx(Route, { path: "/play/*", element: _jsx(Play, {}) })] }) }), _jsxs("footer", { className: "footer fixed-bottom bg-dark text-white text-center", children: [_jsx("div", { children: "Not Too High designed by Thomas Ertle" }), _jsx("div", { children: "(other copyright information will go here)" }), _jsxs("div", { children: ["This is an open-source project. ", _jsx("a", { href: "https://github.com/Tertle950/startup-for-class-2", children: "Here's the Github!" })] })] })] }));
};
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(MainPage, {}));
