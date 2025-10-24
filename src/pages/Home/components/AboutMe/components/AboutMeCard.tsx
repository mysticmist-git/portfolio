import { DetailedHTMLProps, HTMLAttributes } from "react";
import { H3 } from "src/components/headings/H3";

export type AboutMeCardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  title: string;
  content: string;
};

function AboutMeCard(props: AboutMeCardProps) {
  const { title, content } = props;

  return (
    <article className="bg-zinc-800 text-zinc-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <H3 className="text-lg font-bold mb-2">{title}</H3>
      <p className="text-sm text-zinc-300">{content}</p>
    </article>
  );
}

export default AboutMeCard;
