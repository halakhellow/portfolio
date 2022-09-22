import React from "react";

import SectionItem from "../SectionItem/SectionItem";

let Sections = () => {
  return (
    <div className="sections">
      <SectionItem name="About" faClass="fas fa-info-circle" />
      <SectionItem name="Portfolio" faClass="fas fa-briefcase" />
      <SectionItem name="Resume" faClass="fas fa-file" />
      <SectionItem name="Contact" faClass="fas fa-envelope" />
    </div>
  );
};

export default Sections;
