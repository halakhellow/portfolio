import React, { useContext } from "react";
import { nanoid } from "nanoid";

import { ModalContext, AppContext } from "../../App";
import CustomBtn from "../CustomBtn/CustomBtn";
import reactAppsInfos from "../../appsDetails/reactAppsDetails";
import jsAppsDetails from "../../appsDetails/jsAppsDetails";

import "./Modal.css";

const apps = [...reactAppsInfos, ...jsAppsDetails];

const Modal = () => {
  const [, setModalOpen] = useContext(ModalContext);
  const [appTitle] = useContext(AppContext);
  let appDescription, appTechnologies, appLink;
  apps.forEach((app) => {
    if (app.title === appTitle) {
      appDescription = app.description;
      appTechnologies = app.technologies;
      appLink = app.link;
    }
  });
  return (
    <>
      <div className="darkBG" onClick={() => setModalOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{appTitle}</h5>
          </div>
          <button className="closeBtn" onClick={() => setModalOpen(false)}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className="modalContent">
            <p> {appDescription} </p>
          </div>
          <div className="technologies">
            <p>Technologies used to build this app:</p>
            <div className="skills">
              {appTechnologies.map((tech) => (
                <p className="skill" key={nanoid()}>
                  {tech}{" "}
                </p>
              ))}{" "}
            </div>
          </div>
          <div className="modalActions">
            <CustomBtn anchorLink text="Go to website" link={appLink} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
