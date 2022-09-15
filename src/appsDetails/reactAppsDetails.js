import todoAppImg from "../images/todoApp.png";
import hangmanImg from "../images/hangmanApp.png";
import ecommerceAppImg from "../images/ecommerceApp.png";
const reactAppsDetails = [
  {
    title: "HANGMAN",
    imageSrc: hangmanImg,
    description: `Hangman is a guessing game where you try to guess a word by suggesting letters within a certain number of guesses. This app uses local state management.`,
    technologies: ["ReactJS", "CSS"],
    link: "https://halakhellow.github.io/hangman/",
  },
  {
    title: "TODO LIST",
    imageSrc: todoAppImg,
    description:
      "A MERN stack application that helps to maintain our day-to-day tasks and list everything that we have to do. It is helpful in planning our daily schedules and become more aware of how we spend time in the process of doing those tasks and how productive that time is.",
    technologies: ["ReactJS", "CSS", "NodeJS", "ExpressJS", "MongoDB"],
    //link: "https://halakhellow.github.io/todo-list/",
    link: "https://github.com/halakhellow/todo-list", // to delete
  },
  {
    title: "E-COMMERCE",
    imageSrc: ecommerceAppImg,
    description:
      "An online shopping store where you can see and buy different types of clothes.",
    technologies: [
      "ReactJS",
      "React router",
      "Redux",
      "Firebase",
      "Selectors",
      "HOC",
      "Stripe",
      "Asynchronous Redux (Redux-saga)",
    ],
    link: "https://halakhellow.github.io/e-commerce/",
  },
];

export default reactAppsDetails;
