import React from 'react';

import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function MessageDialog(props) {
  return (
    <Modal {...props} show={props.message} centered>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function MessageDialogLink(props) {
  return (
    <Modal {...props} show={props.message} centered>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Link to={props.to}><Button>Alright!</Button></Link>
      </Modal.Footer>
    </Modal>
  );
}
