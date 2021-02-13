import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import VanillaJsApplications from "../../components/VanillaJsApplications/VanillaJsApplications";
import ReactApplications from "../../components/ReactApplications/ReactApplications";

import "./PortfolioPage.css";

let PortfolioPage = () => {
  return (
    <div className="PortfolioPage">
      <div className="page">
        <Header />
        <div className="PortfolioPage-content">
          <h3>Applications with React.js</h3>
          <ReactApplications />
          <h3>Applications with vanilla JavaScript</h3>
          <VanillaJsApplications />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
