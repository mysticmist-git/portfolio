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

  const title = "ABOUT ME";
  const subTitle =
    "A software engineer who thrives on challenges and passionate about creating impactful digital experiences";

  return (
    <Section {...rest} title={title} subTitle={subTitle}>
      {infoBlocks.map(speardProps(AboutMeCard))}
    </Section>
  );
}

export default AboutMe;
