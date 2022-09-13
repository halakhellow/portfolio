import React from "react";

import resume from "../../pages/ResumePage/resume.pdf";

import "./CustomBtn.css";

const CustomBtn = ({ text, type, anchorLink }) => {
  return anchorLink ? (
    <a className="CustomBtn" href={resume} download>
      {text}
    </a>
  ) : (
    <button className="CustomBtn" type={type}>
      {text}
    </button>
  );
};

export default CustomBtn;
