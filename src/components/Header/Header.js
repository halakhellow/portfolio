import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

let Header = ({ home }) => {
  return (
    <div className="Header">
      <Link to="/portfolio">
        <img src="https://img.icons8.com/ios/50/ffffff/home--v4.png" />
      </Link>
      {home ? (
        ""
      ) : (
        <div className="Header-sections">
          <NavLink to="/portfolio/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/portfolio/work" activeClassName="active">
            Portfolio
          </NavLink>
          <NavLink to="/portfolio/resume" activeClassName="active">
            Resume
          </NavLink>
          <NavLink to="/portfolio/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
