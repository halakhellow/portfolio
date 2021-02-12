import React from "react";

import "./Application.css";

let Application = ({ imageSrc, title, description, appLink }) => {
  return (
    <div className="Application">
      <img src={imageSrc} alt={title} />
      <div className="Application-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <a class="Application-link" href={appLink} target="_blank"></a>
        </p>
      </div>
    </div>
  );
};

export default Application;
