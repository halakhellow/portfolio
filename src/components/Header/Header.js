import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

let Header = ({ home }) => {
  return (
    <div className="Header">
      <Link to="/">
        <img src="https://img.icons8.com/ios/50/ffffff/home--v4.png" />
      </Link>
      {home ? (
        ""
      ) : (
        <div className="Header-sections">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
