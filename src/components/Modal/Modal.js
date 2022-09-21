import React, { useContext } from "react";
import { nanoid } from "nanoid";

import { ModalContext, AppContext } from "../../App";
import CustomBtn from "../CustomBtn/CustomBtn";
import apiInfos from "../../appsDetails/apiDetails";
import reactAppsInfos from "../../appsDetails/reactAppsDetails";
import jsAppsDetails from "../../appsDetails/jsAppsDetails";

import "./Modal.css";

const apps = [...apiInfos, ...reactAppsInfos, ...jsAppsDetails];

const Modal = () => {
  const [, setModalOpen] = useContext(ModalContext);
  const [appTitle] = useContext(AppContext);
  let appDescription, appTechnologies, appLink, githubLink;
  apps.forEach((app) => {
    if (app.title === appTitle) {
      appDescription = app.description;
      appTechnologies = app.technologies;
      appLink = app.websiteLink;
      githubLink = app.githubLink;
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
            <i aria-hidden="true"></i>
          </button>
          <div className="modalContent">
            <p> {appDescription} </p>
            {/* To be deleted */}
            {appTitle === "TODO LIST" && (
              <p style={{ color: "hsl(206deg 99% 81%)", fontSize: "14px" }}>
                Note: This app isn't fully deployed yet but you can check the
                code below
              </p>
            )}
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
            <CustomBtn anchorLink text="GitHub" link={githubLink} />
            <CustomBtn
              anchorLink
              text={
                appTitle === "COOKIEZ API" ? "Documentation" : "Visit Website"
              }
              link={appLink}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
