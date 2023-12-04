import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //toggle the menu navbar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    const navbarCollapse = document.getElementById("navBarCollapse");
    if (navbarCollapse) {
      navbarCollapse.classList.add("collapseMenu");
    }
  };

  return (
    <Navbar data-bs-theme='light' expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={toggleMenu}
          // className={`no-border-button mx-auto ${isMenuOpen ? 'active' : ''}`}
          className={`no-border-button mx-auto}`}
       >
          {/* {isMenuOpen ? 'X' : <span className='navbar-toggler-icon'></span>} */}
        </Navbar.Toggle>
        <Navbar.Collapse id='navBarCollapse'>
          <Nav className='me-auto justify-content-center'>
            <Nav.Link as={NavLink} to='/' id='firstLink'  onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/allRecipes' onClick={handleLinkClick}>
              All Recipes
            </Nav.Link>
            <Nav.Link as={NavLink} to='/cakes' onClick={handleLinkClick}>
              Cakes
            </Nav.Link>
            <Nav.Link as={NavLink} to='/cookies' onClick={handleLinkClick}>
              Cookies
            </Nav.Link>
            <Nav.Link as={NavLink} to='/kit' onClick={handleLinkClick}>
              Kit
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about'onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to='/contact' id='lastLink' onClick={handleLinkClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
