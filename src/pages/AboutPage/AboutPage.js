import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import Header from "../../components/Header/Header";
import FlippingCard from "../../components/FlippingCard/FlippingCard";
import Footer from "../../components/Footer/Footer";

import "./AboutPage.css";

const skills = [
  { skill: "JavaScript", icon: "logos:javascript" },
  { skill: "ReactJS", icon: "logos:react" },
  { skill: "Redux", icon: "fontisto:redux" },
  { skill: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { skill: "NodeJS", icon: "logos:nodejs-icon" },
  { skill: "ExpressJs", icon: "Express" },
  { skill: "MongoDB", icon: "logos:mongodb-icon" },
];

let AboutPage = () => {
  return (
    <div className="about-page page">
      <div className="page-content">
        <Header />
        <h3>ABOUT ME</h3>
        <div className="about-page-info">
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
            <Link className="link-in-text" to="/portfolio/work">
              here
            </Link>
            &nbsp;.
          </p>
          <div>
            Technical skills I'm familiar with:
            <div className="skills">
              {skills.map((technology) => {
                return (
                  <FlippingCard
                    key={nanoid()}
                    skill={technology.skill}
                    icon={technology.icon}
                  />
                );
              })}
            </div>
            and other skills mentioned in my &nbsp;
            <Link className="link-in-text" to="/portfolio/resume">
              Resume
            </Link>
            &nbsp;.
          </div>

          <p>
            I'm an astrophil as you can guess <i className="fa fa-star" /> , I
            enjoy music, watching football, and learning languages.
          </p>
          <p>
            Want to connect?{" "}
            <Link className="link-in-text" to="/portfolio/contact">
              Let's go
            </Link>
            &nbsp;!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
