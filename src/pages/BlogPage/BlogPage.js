import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import JavaScriptUnderTheHood from "./thumbnails/javascript-under-the-hood.png";
import dynamicProgramming from "./thumbnails/dynamic-programming.png";
import etlElt from "./thumbnails/etl-elt.png";
import makeAutomation from "./thumbnails/make-automation.png";

import "./BlogPage.css";
import BlogCard from "../../components/BlogCard/BlogCard";

let BlogsPage = () => {
  return (
    <div className="blogs-page page">
      <div className="page-content">
        <Header />
        <h3>
          Check my published articles on <span>Medium</span> platform
        </h3>
        <div className="blogs">
          <BlogCard
            imgSrc={JavaScriptUnderTheHood}
            title="JavaScript Under The Hood"
            description="The core concepts behind JavaScript programming language
                including the Call Stack, Execution Context, Event Loop,
                JIT(Just In Time) Compiler, and JS Engine."
            link="https://medium.com/@halakhellow/javascript-under-the-hood-623add30830c"
            time="6"
            date="November 28th, 2022"
          />
          <BlogCard
            imgSrc={dynamicProgramming}
            title="Dynamic Programming"
            description="The concept of dynamic programming and its applications in problem-solving. Demonstrating its implementation on the classic Fibonacci problem, using both memoization and tabulation techniques."
            link="https://medium.com/@halakhellow/dynamic-programming-memoization-vs-tabulation-5d1ee8075327"
            time="4"
            date="February 27th, 2023"
          />
          <BlogCard
            imgSrc={etlElt}
            title="ETL vs. ELT in Data Engineering"
            description="Two acronyms often pop up In the ever-evolving landscape of data engineering: ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform). These processes are essential in the data journey from source to analysis, shaping the foundation of data-driven decision-making."
            link="https://medium.com/@halakhellow/etl-vs-elt-in-data-engineering-extract-transform-load-5f3fafeac576"
            time="5"
            date="September 15th, 2023"
          />
          <BlogCard
            imgSrc={makeAutomation}
            title="Embracing the Magic of Automation with Make Platform"
            description="In the world of automation, the Make platform stands as a strong supporter, empowering individuals and organizations to streamline their tasks, boost productivity, and eliminate the need for repetitive manual work."
            link="https://medium.com/@halakhellow/embracing-the-magic-of-automation-with-make-platform-6774af24d6da"
            time="4"
            date="October 12th, 2023"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
