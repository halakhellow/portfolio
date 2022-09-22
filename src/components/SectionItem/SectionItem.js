import React from "react";
import { Link } from "react-router-dom";

import "./SectionItem.css";

let SectionItem = ({ name, faClass }) => {
  let linkRef = name === "Portfolio" ? "work" : name.toLowerCase();
  return (
    <Link to={`/portfolio/${linkRef}`} className="section-item">
      <div className="section-item-infos">
        <span className={`${faClass} section-item-icon`}></span>
        <p className="section-item-name">{name}</p>
      </div>
    </Link>
  );
};

export default SectionItem;
