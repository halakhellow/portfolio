import { useContext } from "react";

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

  const app = apps.find((a) => a.title === appTitle);
  if (!app) return null;

  const { description, technologies, websiteLink, githubLink } = app;

  return (
    <>
      <div className="dark-bg" onClick={() => setModalOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modal-header">
            <h5 className="heading">{appTitle}</h5>
          </div>
          <button className="close-btn" onClick={() => setModalOpen(false)}>
            <i aria-hidden="true"></i>
          </button>
          <div className="modal-content">
            <p>{description}</p>
            {appTitle === "TODO LIST" && (
              <p style={{ color: "hsl(206deg 99% 81%)", fontSize: "14px" }}>
                Note: this app isn't fully deployed yet but you can check the code below
              </p>
            )}
            <div className="technologies">
              <p>Technologies used to build this app:</p>
              <div className="skills">
                {technologies.map((tech) => (
                  <p className="skill" key={tech}>
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <CustomBtn anchorLink text="GitHub" link={githubLink} />
            <CustomBtn
              anchorLink
              text={appTitle === "COOKIEZ API" ? "Documentation" : "Visit Website"}
              link={websiteLink}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
