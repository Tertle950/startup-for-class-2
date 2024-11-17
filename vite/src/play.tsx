import React, { useState } from 'react';

import {
	Container,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Play: React.FC = () => {
    return (
        <Container>
        <div>Doe A. Deer played a 5. The deck is now at 5.</div>
        <div>Jane Doe played an X, and chose a value of 10. The deck is now at 15.</div>
        <div>John Doe played a -2. The deck is now at 13.</div>
        <div>
            <img src="/cards/-2.png" />
        </div>
        <div>
            <img src="/cards/9.png" />
            <img src="/cards/5.png" />
            <img src="/cards/1.png" />
            <img src="/cards/-1.png" />
        </div>
        </Container>
    )
}