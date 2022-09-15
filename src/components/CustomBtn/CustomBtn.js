import React from "react";

import "./CustomBtn.css";

const CustomBtn = ({ text, type, anchorLink, link, onClick }) => {
  const downloadBtn = text === "Download";
  return anchorLink ? (
    <a
      className="CustomBtn"
      href={link}
      download={downloadBtn && true}
      target={!downloadBtn && "_blank"}
      onClick={!downloadBtn && onClick}
    >
      {text}
    </a>
  ) : (
    <button className="CustomBtn" type={type}>
      {text}
    </button>
  );
};

export default CustomBtn;
