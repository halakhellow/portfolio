import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import JavaScriptUnderTheHood from "./thumbnails/javascript-under-the-hood.png";

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
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
