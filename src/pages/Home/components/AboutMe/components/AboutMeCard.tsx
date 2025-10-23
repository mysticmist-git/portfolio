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
    <article className="bg-zinc-50 text-zinc-900 rounded-sm p-2">
      <H3>{title}</H3>
      <p>{content}</p>
    </article>
  );
}

export default AboutMeCard;
