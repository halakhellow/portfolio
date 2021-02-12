import React from "react";

import Application from "../../components/Application/Application";

import todoAppImg from "../../images/todoApp.png";

let ReactApplications = () => {
  return (
    <div>
      <Application
        title="TODO LIST"
        imageSrc={todoAppImg}
        description="training on forms with React"
        appLink="https://halakhellow.github.io/todo-list/"
      />
    </div>
  );
};

export default ReactApplications;
