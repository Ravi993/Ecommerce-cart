import React from 'react';
import Modal from 'reacttrap/Modal';
import Button from 'reactstrap/Button';
import './modal.css';

const LoginModal = (props) => { 
    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
              <Modal.Header closeButton>
                 <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
              <Modal.Footer>
                 <Button variant="danger" onClick={props.handleModalOpen}>
                    Cancel
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default LoginModal;