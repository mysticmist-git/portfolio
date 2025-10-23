import { InfoBlock } from "./pages/Home/components/AboutMe/AboutMe";
import { ProjectInfo } from "./pages/Home/components/Portfolio";

export const aboutMeInfoBlocks: InfoBlock[] = [
  {
    key: 'education',
    title: "Education",
    content:
      "Bachelor of Software Engineering. Graduated from the University of Information Technology, HCMC. GPA 8.86",
  },
  {
    key: 'skills',
    title: "Skills",
    content:
      "Expertise in ReactJS, ExpressJS for web development. Proficient with AWS, Docker and CI/CD pipelines.",
  },
  {
    key: 'personality',
    title: "Personality",
    content:
      "Dedicated  and results-oriented. Approach works with enthusiasm and strive for elegant solutions",
  },
];

export const projectInfoList: ProjectInfo[] = [
  {
    key: 'project-a',
    name: "Project A",
    description:
      "Consequat cillum irure voluptate tempor. Officia nulla reprehenderit dolor do dolore reprehenderit non quis.",
    tags: ["Tag A", "Tag B"],
    url: "https://google.com",
    thumbnail: "https://i.pinimg.com/1200x/bd/90/a6/bd90a6c8ea07dc7390e461b655a8b1c6.jpg",
  },
  {
    key: 'project-b',
    name: "Project B",
    description:
      "Consequat cillum irure voluptate tempor. Officia nulla reprehenderit dolor do dolore reprehenderit non quis.",
    tags: ["Tag A", "Tag B"],
    url: "https://facebook.com",
    thumbnail: "https://i.pinimg.com/1200x/ae/ea/ef/aeeaef72573f23d5406381114d9126f9.jpg",
  },
  {
    key: 'project-c',
    name: "Project C",
    description:
      "New project description goes here. This project focuses on innovative solutions.",
    tags: ["Tag C", "Tag D"],
    url: "https://example.com",
    thumbnail: "https://i.pinimg.com/1200x/dd/32/c7/dd32c7200e641217e6b9a218b36cc238.jpg",
  },
  {
    key: 'project-d',
    name: "Project D",
    description:
      "This project aims to solve specific user issues with tailored solutions.",
    tags: ["Tag E", "Tag F"],
    url: "https://projectd.com",
    thumbnail: "https://i.pinimg.com/1200x/5b/02/40/5b0240219cc42c8ef6d12541b854f073.jpg",
  },
  {
    key: 'project-e',
    name: "Project E",
    description:
      "This is a placeholder description for a new project that will be added.",
    tags: ["Tag G", "Tag H"],
    url: "https://projecte.com",
    thumbnail: "https://i.pinimg.com/1200x/bf/b6/2e/bfb62ef4d775dfa16c12ebfa324d78c7.jpg",
  },
];
