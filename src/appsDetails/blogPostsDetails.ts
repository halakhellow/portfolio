import JavaScriptUnderTheHood from "../images/thumbnails/javascript-under-the-hood.png";
import dynamicProgramming from "../images/thumbnails/dynamic-programming.png";
import etlElt from "../images/thumbnails/etl-elt.png";
import makeAutomation from "../images/thumbnails/make-automation.png";
import companionApp from "../images/thumbnails/companion-app.png";
import thinkific from "../images/thumbnails/thinkific-logo.webp";

import type { BlogPost } from "./types";

const blogPostsDetails: BlogPost[] = [
  {
    imgSrc: JavaScriptUnderTheHood,
    title: "JavaScript under the hood",
    description:
      "The core concepts behind JavaScript programming language including the call stack, execution context, event loop, JIT (just in time) compiler, and JS engine.",
    link: "https://medium.com/@halakhellow/javascript-under-the-hood-623add30830c",
    time: "6",
    date: "November 28th, 2022",
  },
  {
    imgSrc: dynamicProgramming,
    title: "Dynamic programming",
    description:
      "The concept of dynamic programming and its applications in problem-solving. Demonstrating its implementation on the classic Fibonacci problem, using both memoization and tabulation techniques.",
    link: "https://medium.com/@halakhellow/dynamic-programming-memoization-vs-tabulation-5d1ee8075327",
    time: "4",
    date: "February 27th, 2023",
  },
  {
    imgSrc: etlElt,
    title: "ETL vs. ELT in data engineering",
    description:
      "Two acronyms often pop up in the ever-evolving landscape of data engineering: ETL (extract, transform, load) and ELT (extract, load, transform). These processes are essential in the data journey from source to analysis, shaping the foundation of data-driven decision-making.",
    link: "https://medium.com/@halakhellow/etl-vs-elt-in-data-engineering-extract-transform-load-5f3fafeac576",
    time: "5",
    date: "September 15th, 2023",
  },
  {
    imgSrc: makeAutomation,
    title: "Embracing the magic of automation with Make platform",
    description:
      "In the world of automation, the Make platform stands as a strong supporter, empowering individuals and organizations to streamline their tasks, boost productivity, and eliminate the need for repetitive manual work.",
    link: "https://medium.com/@halakhellow/embracing-the-magic-of-automation-with-make-platform-6774af24d6da",
    time: "4",
    date: "October 12th, 2023",
  },
  {
    imgSrc: companionApp,
    title: "Empowering interviews with the TalentLift companion app",
    description:
      "Discover the features of the TalentLift companion app which is a fit-to-purpose application to support large-scale virtual recruitment events.",
    link: "https://www.talentlift.ca/empowering-interviews-with-the-talentlift-companion-app-a-case-study-for-launching-large-scale-virtual-recruitment-events/",
    time: "3",
    date: "November 15th, 2023",
  },
  {
    imgSrc: thinkific,
    title: "TalentLift's learning path powered by Thinkific",
    description:
      "TalentLift has adopted Thinkific software to create courses and provide a holistic support system that empowers displaced talents throughout their journeys to thrive in their new environments.",
    link: "https://www.talentlift.ca/partners-in-our-mission-make-great-products-talentlifts-learning-path-powered-by-thinkific/",
    time: "3",
    date: "January 19th, 2024",
  },
];

export default blogPostsDetails;
