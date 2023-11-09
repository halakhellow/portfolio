import React from "react";
import { nanoid } from "nanoid";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./BlogPage.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import blogPostsDetails from "../../appsDetails/blogPostsDetails";

let BlogsPage = () => {
  return (
    <div className="blogs-page page">
      <div className="page-content">
        <Header />
        <h3>
          Check my published articles on <span>Medium</span> platform
        </h3>
        <div className="blogs">
          {blogPostsDetails.map((post) => (
            <BlogCard
              key={nanoid()}
              imgSrc={post.imgSrc}
              title={post.title}
              description={post.description}
              link={post.link}
              time={post.time}
              date={post.date}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
