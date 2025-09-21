import {
  ComponentType,
  HtmlHTMLAttributes,
} from "react";
import AboutMeCard from "./components/AboutMeCard";

function H2(props: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <h2 className="text-xl font-bold" {...props} />;
}

export type InfoBlock = {
  title: string;
  content: string;
};

type AboutMeProps = HtmlHTMLAttributes<HTMLDivElement> & {
  infoBlocks?: InfoBlock[];
};

function speardProps<Props extends object>(Component: ComponentType<Props>) {
  return function (props: Props) {
    return <Component {...props} />;
  };
}

function AboutMe(props: AboutMeProps) {
  const { infoBlocks = [], ...rest } = props;

  return (
    <section
      className="py-20 flex flex-col text-center gap-4 justify-start items-center bg-zinc-900 px-8 min-h-[400px] text-white"
      {...rest}
    >
      <H2>ABOUT ME</H2>
      <p>
        A software engineer who thrives on challenges and passionate about
        creating impactful digital experiences
      </p>
      {infoBlocks.map(speardProps(AboutMeCard))}
    </section>
  );
}

export default AboutMe;
