import Header from "../../components/Header/Header";
import Sections from "../../components/Sections/Sections";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";

const HomePage = () => {
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
                <p>Full stack developer</p>
                <p>MERN stack developer</p>
              </div>
            </div>
          </div>
        </h1>
        <p className="home-page-bio">
          A full stack developer, specializing in the MERN stack.
          <br /> MongoDB, ExpressJS, ReactJS and NodeJS
        </p>
        <Sections />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
