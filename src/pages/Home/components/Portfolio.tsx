import Section from "src/components/Section";
import PortfolioCard from "./PortfolioCard";

export type ProjectInfo = {
  key?: string;
  name: string;
  description?: string;
  tags?: string[];
  url?: string;
  thumbnail?: string;
};

type PortfolioProps = {
  projectInfoList?: ProjectInfo[];
};

function Portfolio(props: PortfolioProps) {
  const { projectInfoList = [] } = props;

  return (
    <Section className="bg-zinc-50 px-0 text-zinc-900" title="PORTFOLIO">
      <div className="w-full h-full flex justify-start items-center gap-2 overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
        {projectInfoList.map((info) => (
          <PortfolioCard {...info} className="translate-x-8 last:mr-16 snap-center snap-always" />
        ))}
      </div>
    </Section>
  );
}

export default Portfolio;
