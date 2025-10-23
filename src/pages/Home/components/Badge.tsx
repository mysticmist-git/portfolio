import { DetailedHTMLProps, HTMLAttributes } from "react";

type BadgeProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  text?: string;
};

export function Badge(props: BadgeProps) {
  const { text = "" } = props;
  return <span className="text-xs bg-white/20 px-3 p-1 rounded-lg font-bold">{text}</span>;
}
