import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Dropdown, Row, Col, InputGroup, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
const socket = new WebSocket('ws://localhost:9900');
export const JoinHost = ({ IsPrimary = true }) => {
    return (_jsxs(Container, { children: [_jsx("p", { children: "Let's play a game! Want to join a game, or host one?" }), _jsxs(Row, { children: [_jsx(Col, { children: _jsx(Link, { to: "/join-host/join", children: _jsx(Button, { variant: IsPrimary ? "primary" : "secondary", className: "w-100", children: "Join" }) }) }), _jsx(Col, { children: _jsx(Link, { to: "/join-host/host", children: _jsx(Button, { variant: IsPrimary ? "outline-primary" : "outline-secondary", className: "w-100", children: "Host" }) }) })] })] }));
};
export const JoinHost_Join = () => {
    // State to store the selected game text
    const [selectedGame, setSelectedGame] = useState("Straw");
    const [code, setCode] = useState("");
    const [canPlay, setCanPlay] = useState(false);
    // Handler for selecting an option from the dropdown
    const handleSelect = (eventKey) => {
        if (eventKey)
            setSelectedGame(eventKey);
    };
    const codeOnChange = (e) => {
        setCode(e.target.value);
        setCanPlay(code != "");
    };
    return (_jsxs(_Fragment, { children: [_jsx(JoinHost, { IsPrimary: false }), _jsx("p", {}), _jsxs(Container, { children: [_jsxs(Row, { children: [_jsx(Col, { sm: "4", children: _jsxs(InputGroup, { className: "mb-3", children: [_jsxs(Dropdown, { onSelect: handleSelect, children: [_jsx(Dropdown.Toggle, { variant: "outline-primary", id: "game-select", children: selectedGame }), _jsx(Dropdown.Menu, { children: _jsx(Dropdown.Item, { eventKey: "Simple", children: "Simple" }) })] }), _jsx(Form.Control, { "aria-label": "ID", placeholder: "XXXXX", value: code, onChange: (e) => codeOnChange(e), type: "text" })] }) }), _jsx(Col, { children: _jsx(Link, { to: canPlay ? "/play/" + selectedGame + "/" + code : "#", children: _jsx(Button, { className: "w-100", disabled: !canPlay, children: canPlay ? "Start" : "Enter a code..." }) }) })] }), _jsxs("p", { children: ["Test for proper reception: ", selectedGame, "-", code] })] })] }));
};
export const JoinHost_Host = () => {
    const [selectedGame, setSelectedGame] = useState("(select)");
    const [code, setCode] = useState("#####");
    const [canPlay, setCanPlay] = useState(false);
    // Handler for selecting an option from the dropdown
    const handleSelect = (eventKey) => {
        if (eventKey) {
            setSelectedGame(eventKey);
            setCode("RANDO");
            // TODO: The Join button shouldn't work with less than 2 players.
            setCanPlay(true);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(JoinHost, { IsPrimary: false }), _jsx("p", {}), _jsxs(Container, { children: [_jsxs(InputGroup, { className: "mb-3 justify-content-center", size: "lg", children: [_jsxs(Dropdown, { onSelect: handleSelect, children: [_jsx(Dropdown.Toggle, { variant: "outline-primary", id: "game-select", children: selectedGame }), _jsx(Dropdown.Menu, { children: _jsx(Dropdown.Item, { eventKey: "Simple", children: "Simple" }) })] }), _jsx(InputGroupText, { children: code })] }), _jsx(Link, { to: canPlay ? "/play/" + selectedGame + "/" + code : "#", children: _jsx(Button, { className: "w-100", disabled: !canPlay, children: canPlay ? "Start" : "Please wait..." }) }), _jsx("p", {}), _jsx("p", { children: "Players joining so far:" }), _jsxs(ListGroup, { children: [_jsx(ListGroupItem, { children: "John Doe" }), _jsx(ListGroupItem, { children: "Jane Doe" }), _jsx(ListGroupItem, { children: "Doe A. Deer" })] })] })] }));
};
