import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./TopBanner.css";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../pages/Kit_pages/ShoppingCartContext";

const TopBanner = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  const [input, setInput] = useState("");
  const navigateTo = useNavigate();

  //search input on button click event
  const searchButtonClick = (event) => {
    event.preventDefault();
    const searchTerm = input.toLowerCase();
    navigateTo(`/search-results/${searchTerm}`);
    setInput("");
  };

  //search input on enter event
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchTerm = input.toLowerCase();
      navigateTo(`/search-results/${searchTerm}`);
      setInput("");
    }
  };

  const userLoggedIn = sessionStorage.getItem("userLoggedIn");
  const userName = sessionStorage.getItem("userName");
  return (
    <>
      {/* social media icons */}
      <ul className="icons">
        <li>
          {" "}
          <a href="https://www.facebook.com/youcanbakeit">
            <img src="/icons/fb_icon.png" alt="no_fb" />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.linkedin.com/in/irina-stasii/">
            <img src="/icons/in_icon.png" alt="no_in" />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.instagram.com/irina_stasii/">
            <img src="/icons/inst_icon.png" alt="no_inst" />
          </a>
        </li>
        {/* <li>
          user is logged in as {userLoggedIn}
        </li> */}
        {/* <li>
          you are logged in as {userName}
        </li> */}
      </ul>
      {userLoggedIn ? <p> you are logged in as {userName}</p> : null}
      {/* login and signup modals */}
      <div className="modals">

        <LoginModal />
        <Button
          onClick={openCart}
          id="shoppingCard"
          variant="outline-secondary"
          className="rounded-circle button-with-cart-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1.5rem"
            fill="#6c757d"
            className="bi bi-cart cart-icon"
            viewBox="0 0 15 15"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          {cartQuantity > 0 && (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "translate(25% 25%)",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </div>
      {/* search input */}
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search on this website"
          className="me-2 shadow bg-white rounded"
          aria-label="Search"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          value={input}
        />
        <Button
          disabled={!input}
          variant="outline-secondary"
          onClick={searchButtonClick}
        >
          Search
        </Button>
      </Form>
    </>
  );
};

export default TopBanner;
