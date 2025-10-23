import { speardProps, withDefaultClass } from "src/utils/component";
import { ProjectInfo } from "./Portfolio";
import { Badge } from "./Badge";
import { HTMLAttributes } from "react";
import A from "src/components/A";

type PortfolioCardProps = ProjectInfo & HTMLAttributes<HTMLElement>;

function PortfolioCardComponent(props: PortfolioCardProps) {
  const { name, description, tags = [], thumbnail, url, ...rest } = props;

  return (
    <article
      {...rest}
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="inset-0 absolute bg-linear-to-t from-black to-black/20 -z-1"></div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex gap-2">
        {tags
          .map((text, index) => ({ key: index, text }))
          .map(speardProps(Badge))}
      </div>
      <A href={url} className="w-full font-bold" variant="secondary">
        Explore
      </A>
    </article>
  );
}

const PortfolioCard = withDefaultClass(
  PortfolioCardComponent,
  `p-2 bg-gray-500 min-w-80 min-h-70 rounded-sm snap-start flex flex-col
   justify-end items-start text-start text-white gap-2 p-4 relative`,
);

export default PortfolioCard;
