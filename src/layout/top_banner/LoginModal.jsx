import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './modals.css';
import { useAlert } from '../../alert/useAlert';
import LoginService from '../LoginService';
import LoginIcon from './LoginIcon';
import SignUpModal from './SignUpModal';

function LoginModal() {
  const showAlertLogin = useAlert();
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({ userName: '', userPass: '' });
  const [showSignUpModal, setShowSignUpModal] = useState(false); 

  const handleClose = () => {
    setShow(false);
    setShowSignUpModal(false); 
  };

  const handleShow = () => setShow(true);


  const handleLogin = async () => {
    const loginResult = LoginService.login(userData.userName, userData.userPass);

    if (loginResult) {
      showAlertLogin("Login successful");
    } else {
      showAlertLogin("Login failed");
    }
    handleClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const openSignUpModal = () => {
    handleClose(); 
    setShowSignUpModal(true);  
  };

  return (
    <>
<LoginIcon onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
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
                value={userData.userPass}
                name='userPass'
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button className='login_signup_Buttons' onClick={handleLogin}>
            Login
          </Button>
          <p>Don't have an account?</p>
          <Button id='signupModal' variant='outline-secondary' onClick={openSignUpModal}>
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
      {showSignUpModal && (
        <SignUpModal show={showSignUpModal} onHide={() => setShowSignUpModal(false)} />
      )}
    </>
  );
}

export default LoginModal;
