import { Link, NavLink } from "react-router-dom";

import logo from "../../images/logo.png";

import "./Header.css";

type HeaderProps = {
  home?: boolean;
};

const Header = ({ home }: HeaderProps) => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {home ? null : (
        <div className="header-sections">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <div className="dark-bg"></div>
          <ul className="menu">
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className={({ isActive }) => (isActive ? "active" : "")}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
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
