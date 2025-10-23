import { flow } from "lodash";
import { HtmlHTMLAttributes, ReactNode } from "react";
import { H2 } from "src/components/headings/H2";
import { withDefaultClass } from "src/utils/fp/component";

type SectionProps = HtmlHTMLAttributes<HTMLElement> & {
  title: string;
  subTitle?: string;
  children?: ReactNode;
};

function SectionComponent(props: SectionProps) {
  const { title, subTitle, children, ...rest } = props;

  return (
    <section {...rest}>
      <H2>{title}</H2>
      <p>{subTitle}</p>
      {children}
    </section>
  );
}

const transform = flow(
  withDefaultClass(
    "bg-zinc-900 py-20 flex flex-col text-center gap-4 justify-start items-center px-8 min-h-[400px] text-white",
  ),
);

const Section = transform(SectionComponent);

export default Section;
