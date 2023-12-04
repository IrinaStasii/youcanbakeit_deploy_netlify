import React from 'react';
import './Logo.css';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='youCanBakeItText'>
      <Navbar.Brand as={NavLink} to='/'>
        You Can Bake It!
      </Navbar.Brand>
    </div>
  );
};

export default Logo;
