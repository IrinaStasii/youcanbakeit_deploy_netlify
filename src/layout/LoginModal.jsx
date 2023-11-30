import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./layout.css"

function LoginModal(props) {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({userName: "", userPass:""});


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async () => {
    // try {
    //   const response = await fetch("/login.php", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userData),
    //   });
  
    //   if (response.status === 200) {
    //     // Authentication successful, perform redirection
    //     window.location.href = "/redirect-url";
    //   } else {
    //     // Handle authentication failure 
    //     console.log("Authentication failed");
    //   }
    // } catch (error) {
    //   // Handle fetch error
    //   console.error("Error:", error);
    // }
  alert("currently this functionality is unavailable");
    handleClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <Button id="loginModal" variant="outline-secondary" onClick={handleShow}>
       Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="userName"
                value={userData.userName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={userData.userPass}
                name="userPass"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
