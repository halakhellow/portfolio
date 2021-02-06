import React from "react";
import { Link } from "react-router-dom";

import "./SectionItem.css";

let SectionItem = ({ name, faClass }) => {
  let linkref = name.toLowerCase();
  return (
    <Link to={`/${linkref}`} className="SectionItem">
      <div className="SectionItem-infos">
        <span className={`${faClass} SectionItem-icon`}></span>
        <p className="SectionItem-name">{name}</p>
      </div>
    </Link>
  );
};

export default SectionItem;
