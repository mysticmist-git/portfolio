import { HtmlHTMLAttributes } from "react";

export function H3(props: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="font-bold text-lg" {...props} />;
}
