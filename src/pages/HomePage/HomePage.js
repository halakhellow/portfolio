import React from "react";

import Header from "../../components/Header/Header";
import Sections from "../../components/Sections/Sections";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";

let HomePage = () => {
  return (
    <div className="home-page page">
      <div className="page-content">
        <Header home />
        <h1 className="home-page-title">
          <div className="iam-section">Hi, I'm &nbsp;</div>
          <div className="slide-section">
            <div className="scroller">
              <div className="inner">
                <p>Hala Alkhellow</p>
                <p>Full Stack Developer</p>
                <p>MERN Stack Developer</p>
              </div>
            </div>
          </div>
        </h1>
        <p className="home-page-bio">
          A Full Stack Developer, specializing in the MERN stack.
          <br /> MongoDB, ExpressJS, ReactJS and NodeJS
        </p>
        <Sections />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
