export type AppDetail = {
  title: string;
  imageSrc: string;
  description: string;
  technologies: string[];
  websiteLink?: string;
  githubLink: string;
};

export type BlogPost = {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  time: string;
  date: string;
};
