import React from "react";
import logo from "../../logo.svg";

const Footer = () => (
  <footer className="fixed-bottom">
    <p id="footertext">
      Built with React
      <img src={logo} className="App-logo" alt="logo" />
      Copyright © 2018 Marcus Hilaire{" "}
    </p>
  </footer>
);

export default Footer;
