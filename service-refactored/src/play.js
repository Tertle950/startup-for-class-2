import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Play = () => {
    const [lastPlayed, _setLastPlayed] = React.useState('-2');
    return (_jsxs(Container, { style: { height: '100%' }, children: [_jsxs(Row, { children: [_jsx("div", { children: "Doe A. Deer played a 5. The deck is now at 5." }), _jsx("div", { children: "Jane Doe played an X, and chose a value of 10. The deck is now at 15." }), _jsx("div", { children: "John Doe played a -2. The deck is now at 13." })] }), _jsx("br", {}), _jsx(Row, { children: _jsxs(Row, { children: [_jsx(Col, {}), " ", _jsx(Col, { children: _jsx("img", { src: "/cards/" + lastPlayed + ".png" }) }), _jsx(Col, {})] }) }), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsxs(Row, { className: "justify-content-md-center", children: [" ", _jsx("p", { children: "Here's what your hand looks like:" }), _jsx(Col, {}), " ", _jsx(Col, { children: _jsx("img", { src: "/cards/9.png" }) }), _jsx(Col, { children: _jsx("img", { src: "/cards/5.png" }) }), _jsx(Col, { children: _jsx("img", { src: "/cards/1.png" }) }), _jsx(Col, { children: _jsx("img", { src: "/cards/-1.png" }) }), _jsx(Col, {})] })] }));
};
