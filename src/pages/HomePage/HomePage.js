import React from "react";

import Sections from "../../components/Sections/Sections";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";

let HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="HomePage-title">Hey, It's Hala Alkhellow</h1>
      <p className="HomePage-bio">
        A React developer from Syria with proficiency in Redux, Hooks, vanilla
        JavaScript, HTML and CSS.
      </p>
      <Sections />
      <Footer />
    </div>
  );
};

export default HomePage;
