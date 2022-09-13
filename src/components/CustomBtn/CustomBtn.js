import React from "react";

import "./CustomBtn.css";

const CustomBtn = ({ text, type }) => {
  return (
    <button className="CustomBtn" type={type}>
      {text}
    </button>
  );
};

export default CustomBtn;
