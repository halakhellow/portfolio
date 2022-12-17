import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../images/logo.png";

import "./Header.css";

let Header = ({ home }) => {
  return (
    <div className="header">
      <Link to="/portfolio">
        <img src={logo} alt="logo" />
      </Link>
      {home ? (
        ""
      ) : (
        <div className="header-sections">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <div className="dark-bg"></div>
          <ul className="menu">
            <li>
              <NavLink to="/portfolio/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/work" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
