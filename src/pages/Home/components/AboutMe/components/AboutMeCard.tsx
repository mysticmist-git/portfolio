import { HtmlHTMLAttributes } from "react";

export type AboutMeCardProps = {
  title: string;
  content: string;
};

function H3 (props: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="font-bold text-lg" {...props} />
}

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
