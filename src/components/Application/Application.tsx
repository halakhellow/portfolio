import { useContext } from "react";

import { ModalContext, AppContext } from "../../App";
import CustomBtn from "../CustomBtn/CustomBtn";

import "./Application.css";

type ApplicationProps = {
  title: string;
  imageSrc: string;
};

const Application = ({ title, imageSrc }: ApplicationProps) => {
  const [, setModalOpen] = useContext(ModalContext);
  const [, setAppTitle] = useContext(AppContext);
  return (
    <div
      className="application"
      onClick={() => {
        setAppTitle(title);
      }}
    >
      <img src={imageSrc} alt={title} />
      <div className="application-description">
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
