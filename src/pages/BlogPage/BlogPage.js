import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import JavaScriptUnderTheHood from "./thumbnails/javascript-under-the-hood.png";
import dynamicProgramming from "./thumbnails/dynamic-programming.png";

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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
