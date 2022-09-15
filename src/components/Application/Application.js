import React, { useContext } from "react";

import { ModalContext, AppContext } from "../../App";
import CustomBtn from "../CustomBtn/CustomBtn";

import "./Application.css";

const Application = ({ title, imageSrc }) => {
  const [, setModalOpen] = useContext(ModalContext);
  const [, setAppTitle] = useContext(AppContext);
  return (
    <div
      className="Application"
      onClick={() => {
        setAppTitle(title);
      }}
    >
      <img src={imageSrc} alt={title} />
      <div className="Application-description">
        <h3>{title}</h3>
        <CustomBtn
          text="See details"
          anchorLink
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>
    </div>
  );
};

export default Application;
