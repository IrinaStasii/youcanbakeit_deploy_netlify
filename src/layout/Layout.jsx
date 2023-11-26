import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import "./layout.css";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  //toggle the menu navbar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* social media icons */}
      <div id="beforeNavBar" className="navbar">
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
        </ul>

        {/* login and signup modals */}
        <div className="modals">
          <LoginModal />
          <SignUpModal />
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
      </div>

      {/* Layout content */}
      <div id="fullPageContent">
        <div id="youcanbaieitText">
          <Navbar.Brand href="/">You Can Bake It!</Navbar.Brand>
        </div>
        <Navbar data-bs-theme="light" expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMenu}
              className={`no-border-button mx-auto ${
                isMenuOpen ? "active" : ""
              }`}
            >
              {isMenuOpen ? "X" : <span className="navbar-toggler-icon"></span>}
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-center">
              <Nav.Link as={NavLink} to="/" id="firstLink">
                 Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/allRecipes">
                  All Recipes
                </Nav.Link>
                <Nav.Link as={NavLink} to="/cakes">
                  Cakes
                </Nav.Link>
                <Nav.Link as={NavLink} to="/cookies">
                  Cookies
                </Nav.Link>
                <Nav.Link as={NavLink} to="/kit">
                  Kit
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="flex_page_aside">
          <Outlet />

          {/* About section (right side of teh page) */}
          <div className="asideContainer">
            <aside className="widget-wrap">
              <p id="aboutIrina">ABOUT IRINA STASII</p>
              <img id="imageIrina" src="./me.jpg" alt="" />
              <p id="welcome_short_description">
                Welcome to my cozy corner. Let's get to know each other. I'm
                Irina, a coffee lover passionate about baking, creating
                beautiful designs, food photography and crafting delicious
                treats.{" "}
                <Link to={"/about"} id="readMore">
                  Read more...{" "}
                </Link>
              </p>

              {/* Instagram post links */}
              <h6 id="insta_text">You Can Bake It! on INSTAGRAM</h6>
              <div className="insta_links">
                <a
                  id="insta_photo1"
                  href="https://www.instagram.com/p/CLrUZpOpMvZ/"
                >
                  link
                </a>
                <a
                  id="insta_photo2"
                  href="https://www.instagram.com/p/CI8VAwxJ0_s/"
                >
                  link
                </a>
                <a
                  id="insta_photo3"
                  href="https://www.instagram.com/p/CLWiJwjpx2I/"
                >
                  link
                </a>
                <a
                  id="insta_photo4"
                  href="https://www.instagram.com/p/CMmYMrdpZx0/?img_index=1"
                >
                  link
                </a>
                <a
                  id="insta_photo5"
                  href="https://www.instagram.com/p/CLCdtnrJedb/?img_index=1"
                >
                  link
                </a>
                <a
                  id="insta_photo6"
                  href="https://www.instagram.com/p/CI0hv-_pdh3/"
                >
                  link
                </a>
                <a
                  id="insta_photo7"
                  href="https://www.instagram.com/p/CMCUv0YnlUn/"
                >
                  link
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer content */}
        <footer id="footer">
          <p>Copyright © {new Date().getFullYear()} You Can Bake It!</p>
          <p>
            <Link to={"/termsofuse"}> TERMS OF USE </Link>
            &middot;
            <Link to={"/privacyPolicy"}> PRIVACY POLICY </Link>
            &middot;
            <Link to={"/contact"}> CONTACT </Link>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
