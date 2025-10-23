import { aboutMeInfoBlocks, projectInfoList } from "src/config";

import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function Home() {
  return (
    <main>
      <Hero />
      <AboutMe infoBlocks={aboutMeInfoBlocks} />
      <Portfolio projectInfoList={projectInfoList} />
    </main>
  );
}

export default Home;
