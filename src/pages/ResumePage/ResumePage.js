import React from "react";

import Header from "../../components/Header/Header";
import CustomBtn from "../../components/CustomBtn/CustomBtn";
import Footer from "../../components/Footer/Footer";

import resume from "./resume.pdf";

import "./ResumePage.css";

let ResumePage = () => {
  return (
    <div className="resume-page page">
      <div className="page-content">
        <Header />
        <h2 className="resume-page-header">Resume :</h2>
        <p className="text">
          Reach out to me via my{" "}
          <a className="link-in-text" href="/portfolio/contact">
            contact
          </a>
          &nbsp; page .
          <br />
          View or download the resume <i class="fa fa-arrow-circle-down"></i>
        </p>
        <iframe
          src={`${resume}#toolbar=0`}
          allowfullscreen=""
          width="500"
          height="540"
          title="Hala Alkhellow Resume"
        ></iframe>
        <CustomBtn anchorLink text="Download" link={resume} />
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
