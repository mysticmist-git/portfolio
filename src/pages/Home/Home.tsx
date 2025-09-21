import AboutMe, { InfoBlock } from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero";

const aboutMeInfoBlocks: InfoBlock[] = [
  {
    title: "Education",
    content:
      "Bachelor of Software Engineering. Graduated from the University of Information Technology, HCMC. GPA 8.86",
  },
  {
    title: "Skills",
    content:
      "Expertise in ReactJS, ExpressJS for web development. Proficient with AWS, Docker and CI/CD pipelines.",
  },
  {
    title: "Personality",
    content:
      "Dedicated  and results-oriented. Approach works with enthusiasm and strive for elegant solutions",
  },
];

function Home() {
  return (
    <main>
      <Hero />
      <AboutMe infoBlocks={aboutMeInfoBlocks} />
    </main>
  );
}

export default Home;
