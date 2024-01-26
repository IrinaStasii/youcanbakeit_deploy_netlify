import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./modals.css";
import { useAlert } from "../../alert/useAlert";
import LoginService from "../LoginService";
import SignUpModal from "./SignUpModal";

function LoginModal() {
  const showAlertLogin = useAlert();
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({ userName: "", userPass: "" });
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowSignUpModal(false);
  };

  const handleShow = () => setShow(true);

  const handleLogin = async () => {
    const loginResult = LoginService.login(
      userData.userName,
      userData.userPass
    );

    if (loginResult) {
      showAlertLogin("Login successful");
    } else {
      showAlertLogin(
        "Login feature is currently undergoing improvements. We appreciate your patience as we work to enhance your experience. Please try again later."
      );
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
      {/* <LoginIcon onClick={handleShow} /> */}

      <a
        href="#"
        onClick={handleShow}
        className="button-with-cart-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="#6c757d"

          style={{ cursor: "pointer", marginRight: "5px" }}
          className="hoverable-svg"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </a>

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
          <Button className="login_signup_Buttons" onClick={handleLogin}>
            Login
          </Button>
          <p>Don't have an account?</p>
          <Button
            id="signupModal"
            variant="outline-secondary"
            onClick={openSignUpModal}
          >
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
      {showSignUpModal && (
        <SignUpModal
          show={showSignUpModal}
          onHide={() => setShowSignUpModal(false)}
        />
      )}
    </>
  );
}

export default LoginModal;
