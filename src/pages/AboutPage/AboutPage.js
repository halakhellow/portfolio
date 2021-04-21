import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";

import "./AboutPage.css";

let AboutPage = () => {
  return (
    <div className="AboutPage page">
      <div className="page-content">
        <Header />
        <h3>ABOUT ME</h3>
        <div className="AboutPage-info">
          <p>
            Hey there :) <br /> I'm Hala Alkhellow, a self-taught React
            developer.
            <br /> I finished university with a bachelor degree in Communication
            Engineering from Aleppo University. We had some programming subjects
            and I enjoyed them at that time , so decided to shift career and
            started studying online with help from a professional software
            engineers throughout mentorship sessions. <br />
            During this time I made some projects with vanilla JavaScript then
            started to use React js. You can check them &nbsp;
            <Link to="/portfolio/work">here.</Link>
          </p>
          <p>
            Proficient in Redux js, Hooks, vanilla JavaScript, HTML and CSS ...
            <br />
            and other skills mentioned in my &nbsp;
            <Link to="/portfolio/resume">Resume.</Link>
          </p>

          <p>
            I'm an astrophil as you can guess &#127775;, I love looking at the
            sky and stars, I also enjoy music, watching football, watching tv
            series, and learning languages.
          </p>
          <p>
            Want to connect? <Link to="/portfolio/contact">Let's go!</Link>
          </p>
          <div className="social-media-links">
            <a href="https://github.com/halakhellow" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://facebook.com/hallosh" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com/hall0sh" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/in/halakhellow" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
