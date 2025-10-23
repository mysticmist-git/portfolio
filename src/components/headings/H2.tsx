import { HtmlHTMLAttributes } from "react";

export function H2(props: HtmlHTMLAttributes<HTMLHeadingElement>) {
    return <h2 className="text-xl font-bold" {...props} />;
}
