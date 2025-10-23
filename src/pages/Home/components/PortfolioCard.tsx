import { speardProps, withDefaultClass } from "src/utils/component";
import { ProjectInfo } from "./Portfolio";
import { Badge } from "./Badge";
import { HTMLAttributes } from "react";

type PortfolioCardProps = ProjectInfo & HTMLAttributes<HTMLElement>;

function PortfolioCardComponent(props: PortfolioCardProps) {
  const { name, description, tags, ...rest } = props;

  return (
    <article {...rest}>
      <p>{name}</p>
      <p>{description}</p>
      {tags
        .map((text, index) => ({ key: index, text }))
        .map(speardProps(Badge))}
    </article>
  );
}

const PortfolioCard = withDefaultClass(
  PortfolioCardComponent,
  "p-2 bg-gray-500 min-w-80 min-h-40 rounded-sm snap-start",
);

export default PortfolioCard;
