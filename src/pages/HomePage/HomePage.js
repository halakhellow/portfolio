import React from "react";

import Header from "../../components/Header/Header";
import Sections from "../../components/Sections/Sections";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";

let HomePage = () => {
  return (
    <div className="HomePage">
      <div className="page">
        <Header home />
        <h1 className="HomePage-title">
          Hey, It's <span>Hala Alkhellow</span>
        </h1>
        <p className="HomePage-bio">
          A React developer from Syria with proficiency in Redux, Hooks, vanilla
          JavaScript, HTML and CSS.
        </p>
        <Sections />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
