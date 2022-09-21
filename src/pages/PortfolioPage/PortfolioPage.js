import React, { useContext } from "react";
import { nanoid } from "nanoid";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";
import Application from "../../components/Application/Application";

import { ModalContext } from "../../App";
import reactAppsInfos from "../../appsDetails/reactAppsDetails";
import jsAppsDetails from "../../appsDetails/jsAppsDetails";

import cookiezAPI from "../../images/cookiezAPI.png";

import "./PortfolioPage.css";

let PortfolioPage = () => {
  const [modalOpen] = useContext(ModalContext);
  return (
    <div className="PortfolioPage page">
      <div className="page-content">
        <Header />
        {modalOpen && <Modal />}
        <div className="PortfolioPage-content">
          {" "}
          <h3>APIs</h3>
          <Application title="COOKIEZ API" imageSrc={cookiezAPI} />
          <h3>Applications with React.js</h3>
          {reactAppsInfos.map((app) => (
            <Application
              key={nanoid()}
              title={app.title}
              imageSrc={app.imageSrc}
            />
          ))}
          <h3>Applications with vanilla JavaScript</h3>
          {jsAppsDetails.map((app, index) => (
            <Application
              key={index}
              title={app.title}
              imageSrc={app.imageSrc}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
