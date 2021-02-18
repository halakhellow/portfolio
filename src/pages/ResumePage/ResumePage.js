import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import resume from "./resume.pdf";

import "./ResumePage.css";

let ResumePage = () => {
  return (
    <div className="ResumePage">
      <div className="page">
        <Header />
        <h2>Resume :</h2>
        <iframe src={`${resume}#toolbar=0`} height="387px"></iframe>
        <a href={resume} download className="download-button">
          <i className="fa fa-download"></i>Download
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
