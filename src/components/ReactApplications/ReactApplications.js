import React from "react";

import Application from "../../components/Application/Application";

import todoAppImg from "../../images/todoApp.png";
import hangmanImg from "../../images/hangmanApp.png";
import jokesAppImg from "../../images/jokesApp.png";

let ReactApplications = () => {
  return (
    <div>
      <Application
        title="JOKES"
        imageSrc={jokesAppImg}
        description="App deals with fetching jokes from an API &amp; uses react-flip-move library"
        appLink="https://halakhellow.github.io/jokes-app/"
      />
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
    </div>
  );
};

export default ReactApplications;
