import React from "react";

import "./SectionItem.css";

let SectionItem = ({ name, faClass }) => {
  return (
    <div className="SectionItem">
      <div className="SectionItem-infos">
        <span className={`${faClass} SectionItem-icon`}></span>
        <p className="SectionItem-name">{name}</p>
      </div>
    </div>
  );
};

export default SectionItem;
