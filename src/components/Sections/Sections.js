import React from "react";

import SectionItem from "../SectionItem/SectionItem";

let Sections = () => {
  return (
    <>
      <SectionItem name="About" faClass="fas fa-info-circle" />
      <SectionItem name="Projects" faClass="fas fa-briefcase" />
      <SectionItem name="Resume" faClass="fas fa-file" />
      <SectionItem name="Contact" faClass="fas fa-envelope" />
    </>
  );
};

export default Sections;
