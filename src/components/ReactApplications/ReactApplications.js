import React from "react";

import Application from "../../components/Application/Application";

import todoAppImg from "../../images/todoApp.png";
import hangmanImg from "../../images/hangmanApp.png";
import ecommerceAppImg from "../../images/ecommerceApp.png";

let ReactApplications = () => {
  return (
    <div>
      <Application
        title="HANGMAN"
        imageSrc={hangmanImg}
        description="App uses class components and local state management"
        appLink="https://halakhellow.github.io/hangman/"
      />
      <Application
        title="TODO LIST"
        imageSrc={todoAppImg}
        description="App uses React forms (controlled components) + react-beautiful-dnd"
        appLink="https://halakhellow.github.io/todo-list/"
      />
      <Application
        title="E COMMERCE"
        imageSrc={ecommerceAppImg}
        description="App uses React router, Firebase, Redux, Selectors, HOC, Stripe and Asynchronous Redux (Redux-saga)"
        appLink="https://halakhellow.github.io/e-commerce/"
      />
    </div>
  );
};

export default ReactApplications;
