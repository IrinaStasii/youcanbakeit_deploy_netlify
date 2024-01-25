import React from 'react';
import PropTypes from 'prop-types';

const SignUpIcon = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    onClick={onClick}
    style={{ cursor: 'pointer' }}  
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="7" r="4"></circle>
    <path d="M17 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

SignUpIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

export default SignUpIcon;
