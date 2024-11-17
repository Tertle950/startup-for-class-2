import React, { useState } from 'react';

import {
	Container,
    Row,
    Col
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Play: React.FC = () => {
    const [lastPlayed, setLastPlayed] = React.useState('-2');

    return (
        <Container style={{ height: '100%' }}>
            <Row>
                <div>Doe A. Deer played a 5. The deck is now at 5.</div>
                <div>Jane Doe played an X, and chose a value of 10. The deck is now at 15.</div>
                <div>John Doe played a -2. The deck is now at 13.</div>
            </Row>
            <br />
            <Row>
            <Row>
                <Col></Col> {/* There is a better way to push cards closer to the center but I'm not learning it today. */}
                <Col><img src={"/cards/"+lastPlayed+".png"}/></Col>
                <Col></Col>
            </Row>
            </Row>
            <br />
            <br />
            <br />
            <br />
            
            <Row className="justify-content-md-center"> {/*className="position-absolute bottom-0 start-50 translate-middle-x"*/}
                <p>Here's what your hand looks like:</p>
                <Col></Col> {/* There is a better way to push cards closer to the center but I'm not learning it today. */}
                <Col><img src="/cards/9.png" /></Col>
                <Col><img src="/cards/5.png" /></Col>
                <Col><img src="/cards/1.png" /></Col>
                <Col><img src="/cards/-1.png" /></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}