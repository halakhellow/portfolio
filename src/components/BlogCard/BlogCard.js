/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import "./BlogCard.css";

let BlogCard = ({ imgSrc, time, title, date, description, link }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="blog-card-body">
        <div className="reading-time">
          {" "}
          <i className="fas fa-solid fa-clock"></i>
          <span>{time} min read</span>
        </div>
        <a className="blog-title" href={link} target="_blank">
          <h2>{title}</h2>
        </a>
        <span className="blog-date">{date}</span>
        <p className="blog-description">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
