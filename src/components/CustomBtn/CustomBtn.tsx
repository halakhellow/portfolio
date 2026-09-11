import type { MouseEventHandler } from "react";

import "./CustomBtn.css";

type CustomBtnProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  anchorLink?: boolean;
  link?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const CustomBtn = ({ text, type, anchorLink, link, onClick }: CustomBtnProps) => {
  const downloadBtn = text === "Download";
  return anchorLink ? (
    <a
      className="custom-button"
      href={link}
      download={downloadBtn || undefined}
      target={downloadBtn ? undefined : "_blank"}
      rel={downloadBtn ? undefined : "noreferrer"}
      onClick={downloadBtn ? undefined : onClick}
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
