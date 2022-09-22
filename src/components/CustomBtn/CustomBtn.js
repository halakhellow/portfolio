import React from "react";

import "./CustomBtn.css";

const CustomBtn = ({ text, type, anchorLink, link, onClick }) => {
  const downloadBtn = text === "Download";
  return anchorLink ? (
    <a
      className="custom-button"
      href={link}
      download={downloadBtn && true}
      target={!downloadBtn && "_blank"}
      onClick={!downloadBtn && onClick}
    >
      {text}
    </a>
  ) : (
    <button className="custom-button" type={type}>
      {text}
    </button>
  );
};

export default CustomBtn;
