import { React, useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useAlert } from "../../alert/useAlert";
import { Button } from "react-bootstrap";

const Contact = () => {
  const showAlert = useAlert();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      setIsEmailValid(validateEmail(value));
    }

    if (name === "name") {
      setIsNameValid(validateName(value));
    }

    if (name === "message") {
      setIsMessageValid(validateMessage(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmailValid && isNameValid && isMessageValid) {
      showAlert("Email send");
      // console.log("Form submitted with data:", formData);

      emailjs
        .sendForm(
          "service_ffj8p1q",
          "template_ubjuqwi",
          form.current,
          "M4V2TlmY4SQsorqUB"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setFormData({ name: "", email: "", message: "" });
      setIsEmailValid(false);
      setIsNameValid(false);
      setIsMessageValid(false);
    } else {
      showAlert("Message couldn't be sent. Please try again.");
    }
  };

  const validateName = (name) => {
    const namePattern = /^([A-Za-z]+)\s+([A-Za-z]+)$/;
    return namePattern.test(name);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const validateMessage = (message) => {
    return formData.message.trim().length >= 15;
  };

  return (
    <div className="formDiv">
      <div className="dividedLeftSidePageContact">
        <p id="formTitle">CONTACT</p>
        <p id="hearFromYou">I WOULD LOVE TO HEAR FROM YOU!</p>
        <p>Please fill out the form below</p>
        <div className="formContent">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group ">
              <div className="required-field">
                <label htmlFor="name">First and Last Name: </label>
              </div>
                <input
                  className="form-control required-field"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {isNameValid ? null : (
                  <div className="error-message">
                    Please enter your First and Last Name. Example: Irina Stasii
                  </div>
                )}

                <div className="form-group">
                  <div className="required-field">
                    <label htmlFor="email">Email:</label>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {isEmailValid ? null : (
                    <div className="error-message">
                      Please enter a valid email address. Example:
                      adress@gmail.com
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <div className="required-field">
                    <label htmlFor="message">Message:</label>
                  </div>
                  <textarea
                    rows="5 "
                    cols="50"
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {isMessageValid ? null : (
                    <div className="error-message">
                      Please enter a message longer than 15 characters.
                    </div>
                  )}
                </div>
              </div>
            <Button
              className={
                !isMessageValid || !isNameValid || !isEmailValid
                  ? "submitFormButton"
                  : " submitFormButton enabledButton"
              }
              disabled={!isMessageValid || !isNameValid || !isEmailValid}
              variant="outline-secondary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
