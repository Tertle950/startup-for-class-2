import React, { useState } from 'react';

import {
	Link
} from 'react-router-dom';

import {
	Container,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export const Play: React.FC = () => {
    return (
        <>
        <ListGroup>
            <ListGroupItem>Doe A. Deer played a 5. The deck is now at 5.</ListGroupItem>
            <ListGroupItem>Jane Doe played an X, and chose a value of 10. The deck is now at 15.</ListGroupItem>
            <ListGroupItem>John Doe played a -2. The deck is now at 13.</ListGroupItem>
        </ListGroup>
        </>
    )
}