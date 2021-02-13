import React from "react";

import Application from "../../components/Application/Application";

import githubAppImg from "../../images/githubApp.png";
import moviesAppImg from "../../images/moviesApp.png";
import xoAppImg from "../../images/xoApp.png";

let VanillaJsApplications = () => {
  return (
    <div>
      <Application
        title="GITHUB USERS' INFOS"
        imageSrc={githubAppImg}
        description="App deals with GitHub API"
        appLink="https://halakhellow.github.io/GitHub-Users-Infos/"
      />
      <Application
        title="MOVIES"
        imageSrc={moviesAppImg}
        description="App deals with API and fetching data
        and using url search parameters to set up navigation routes"
        appLink="https://halakhellow.github.io/Movies/"
      />
      <Application
        title="TIC TAC TOE"
        imageSrc={xoAppImg}
        description="Application created with HTML, CSS and plain javascript."
        appLink="https://halakhellow.github.io/Tic-Tac-Toe/"
      />
    </div>
  );
};

export default VanillaJsApplications;
