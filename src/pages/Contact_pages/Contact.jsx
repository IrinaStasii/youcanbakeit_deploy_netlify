import { React, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isNameValid) {
      console.log("Form submitted with data:", formData);
    } else {
      console.log("Data not submited");
    }

    // !isEmailValid
    //   ? alert("Invalid email format. Example of valid email: nameexample@gmail.com ")
    //   : console.log("Form submitted with data:", formData);

    // !isNameValid
    // ? alert("Invalid name format. Example of valid name: Stasii Irina")
    //   : console.log("Form submitted with data:", formData);
  };

  const validateName = (name) => {
    const namePattern = /^([A-Za-z]+)\s+([A-Za-z]+)$/;
    return namePattern.test(name);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  return (
    <div className="formDiv">
      <div className="dividedLeftSidePageContact">
        <p id="formTitle">CONTACT</p>
        <p id="hearFromYou">I WOULD LOVE TO HEAR FROM YOU!</p>
        <p>Please fill out the form below</p>
        <div className="formContent">
          <form onSubmit={handleSubmit}>
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
            </div>
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
                  Please enter a valid email address. Example: adress@gmail.com
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
            </div>
            <button id="contactSubmitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
