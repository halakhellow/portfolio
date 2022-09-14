import React, { useContext } from "react";

import { ModalContext, AppContext } from "../../App";

import "./Application.css";

const Application = ({ title, imageSrc }) => {
  const [, setModalOpen] = useContext(ModalContext);
  const [, setAppTitle] = useContext(AppContext);
  return (
    <div
      className="Application"
      onClick={() => {
        setModalOpen(true);
        setAppTitle(title);
      }}
    >
      <img src={imageSrc} alt={title} />
    </div>
  );
};

export default Application;
