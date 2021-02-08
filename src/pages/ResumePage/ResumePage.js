import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import resume from "./resume.pdf";

let ResumePage = () => {
  return (
    <div>
      <Header />
      <iframe src={`${resume}#toolbar=0`} height="387px"></iframe>
      <Footer />
    </div>
  );
};

export default ResumePage;
