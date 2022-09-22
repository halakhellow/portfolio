import React from "react";

import "./Footer.css";

let Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/halakhellow" target="_blank">
        <i className="fab fa-github"></i>
      </a>{" "}
      <a href="https://codepen.io/halakhellow" target="_blank">
        <i className="fab fa-codepen"></i>
      </a>
      <a href="https://linkedin.com/in/halakhellow" target="_blank">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Footer;
