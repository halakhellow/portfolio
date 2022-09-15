import githubAppImg from "../images/githubApp.png";
import moviesAppImg from "../images/moviesApp.png";
import xoAppImg from "../images/xoApp.png";

const jsAppsDetails = [
  {
    title: "GITHUB USERS' INFOS",
    imageSrc: githubAppImg,
    description:
      "App deals with GitHub API to get the information related to a specific GitHub account.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://halakhellow.github.io/GitHub-Users-Infos/",
  },
  {
    title: "MOVIES",
    imageSrc: moviesAppImg,
    description:
      "App deals with fetching data from an API and using url search parameters to set up navigation routes to show different categories of movies with the ability to see the details for each movie in a different page.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://halakhellow.github.io/Movies/",
  },
  {
    title: "TIC TAC TOE",
    imageSrc: xoAppImg,
    description:
      "A puzzle game for two players, called 'X' and 'O', who take turns marking the spaces in a 3×3 grid.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://halakhellow.github.io/Tic-Tac-Toe/",
  },
];

export default jsAppsDetails;
