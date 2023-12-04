import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
  );
};

export default Footer;
