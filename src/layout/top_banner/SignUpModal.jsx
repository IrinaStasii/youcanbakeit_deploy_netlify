// SignUpModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './modals.css';
import { useAlert } from '../../alert/useAlert';

function SignUpModal({ show, onHide }) {
  const showAlertSignUp = useAlert();
  const [userData, setUserData] = useState({ userName: '', userPass: '' });

  const handleClose = () => {
    setUserData({ userName: '', userPass: '' });
    onHide();
  };

  const handleSignUp = async () => {
    // Perform sign-up logic here
    showAlertSignUp("currently this functionality is unavailable");
    handleClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                name='userName'
                value={userData.userName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='userPass'
                value={userData.userPass}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button className='login_signup_Buttons' onClick={handleSignUp}>
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpModal;
