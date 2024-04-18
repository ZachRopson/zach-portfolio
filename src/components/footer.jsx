import React from "react";
import logo from "../assets/logo.jpg";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <img src={logo} alt="link" width="69" height="37" />
       
      </div>
      <div className="footer-link">
        <img src="/fb.svg" alt="link" />
        <img src="/twitter.svg" alt="link" />
        <a href="https://www.linkedin.com/in/zachary-ropson-047723290/">
        <img src="public\linkedIn.png" alt="link" width="24" height="24"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
