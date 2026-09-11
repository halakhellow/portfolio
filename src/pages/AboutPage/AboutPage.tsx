import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import FlippingCard from "../../components/FlippingCard/FlippingCard";
import Footer from "../../components/Footer/Footer";

import resume from "./resume.pdf";

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

const AboutPage = () => {
  return (
    <div className="about-page page">
      <div className="page-content">
        <Header />
        <h3>About me</h3>
        <div className="about-page-info">
          <p>
            Hey there :) <br /> I'm Hala Alkhellow, a full stack developer.
            <br /> I finished university with a bachelor degree in communication engineering
            from Aleppo University where we received some programming related courses. They
            were not actual coding courses, but I learned the basics which were enough for my
            interest in programming!
            <br /> I decided to shift career and started studying frontend development online
            with help from professional software engineers throughout mentorship sessions.
            Then I joined a coding bootcamp to learn backend web development skills and went a
            step further toward achieving my dream of being a full stack engineer.
            <br />
            During this time I made some projects with vanilla JavaScript then started to code
            with ReactJS as well as to build APIs. You can check my work &nbsp;
            <Link className="link-in-text" to="/work">
              here
            </Link>
            &nbsp;.
          </p>
          <div>
            Technical skills I'm familiar with:
            <div className="skills">
              {skills.map((technology) => (
                <FlippingCard
                  key={technology.skill}
                  skill={technology.skill}
                  icon={technology.icon}
                />
              ))}
            </div>
            and other skills mentioned in my &nbsp;
            <a className="link-in-text" href={resume} download>
              Resume
            </a>
            &nbsp;.
          </div>

          <p>
            I'm an astrophil as you can guess <i className="fa fa-star" />, I enjoy music,
            watching football, and learning languages.
          </p>
          <p>
            Want to connect?{" "}
            <Link className="link-in-text" to="/contact">
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
