import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

let Header = () => {
  return (
    <Link to="/" className="Header">
      <img src="https://img.icons8.com/ios/50/ffffff/home--v4.png" />
    </Link>
  );
};

export default Header;
