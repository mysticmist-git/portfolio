import { DetailedHTMLProps, HTMLAttributes } from "react";

import AboutMeCard from "./components/AboutMeCard";
import Section from "src/components/Section";
import { speardProps } from "src/utils/component";

export type InfoBlock = {
  key: string;
  title: string;
  content: string;
};

type AboutMeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  infoBlocks?: InfoBlock[];
};

function AboutMe(props: AboutMeProps) {
  const { infoBlocks = [], ...rest } = props;

  const title = "About Me";
  const subTitle =
    "I am a software engineer who thrives on challenges and is passionate about crafting impactful digital experiences.";

  return (
    <Section {...rest} title={title} subTitle={subTitle} className="bg-zinc-900 text-white py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoBlocks.map(speardProps(AboutMeCard))}
        </div>
    </Section>
  );
}

export default AboutMe;

// Add hover effects to AboutMeCard components for better interactivity
