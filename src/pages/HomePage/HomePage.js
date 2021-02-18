import React from "react";

import Header from "../../components/Header/Header";
import Sections from "../../components/Sections/Sections";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";

let HomePage = () => {
  return (
    <div className="HomePage page">
      <div className="page-content">
        <Header home />
        <h1 className="HomePage-title">
          <div className="iamSection">Hi, I'm &nbsp;</div>
          <div className="slideSection">
            <div className="scroller">
              <div className="inner">
                <p>Hala Alkhellow</p>
                <p>FrontEnd Developer</p>
                <p>React Developer</p>
              </div>
            </div>
          </div>
        </h1>
        <p className="HomePage-bio">
          A Frontend developer, specializing in React development.
        </p>
        <Sections />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
