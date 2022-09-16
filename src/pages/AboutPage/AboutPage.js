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
            Hey there :) <br /> I'm Hala Alkhellow, a Full Stack Developer.
            <br /> I finished university with a bachelor degree in Communication
            Engineering from Aleppo University where we received some
            programming related courses. They were not actual coding courses,
            but I learned the basics which were enough for my interest to
            programming! <br /> I decided to shift career and started studying
            frontend development online with help from professional software
            engineers throughout mentorship sessions. Then I joined a coding
            bootcamp to learn Backend web development skills and went a step
            further toward achieving my dream of being a full stack engineer.
            <br />
            During this time I made some projects with vanilla JavaScript then
            started to code with ReactJS as well as to build APIs. You can check
            my work &nbsp;
            <Link to="/portfolio/work">here.</Link>
          </p>
          <div>
            Technical skills I'm familiar with:
            <div className="skills">
              <p className="skill">HTML</p>
              <p className="skill">CSS</p>
              <p className="skill">SASS</p>
              <p className="skill">Bootstrap</p>
              <p className="skill">JavaScript</p>
              <p className="skill">ReactJS</p>
              <p className="skill">NodeJS</p>
              <p className="skill">ExpressJS</p>
              <p className="skill">MongoDB</p>
            </div>
            and other skills mentioned in my &nbsp;
            <Link to="/portfolio/resume">Resume.</Link>
          </div>

          <p>
            I'm an astrophil as you can guess <i className="fa fa-star" /> , I
            enjoy music, watching football, and learning languages.
          </p>
          <p>
            Want to connect? <Link to="/portfolio/contact">Let's go!</Link>
          </p>
          <div className="social-media-links">
            <a href="https://github.com/halakhellow" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://codepen.io/halakhellow" target="_blank">
              <i className="fab fa-codepen"></i>
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
