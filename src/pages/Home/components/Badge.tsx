import { DetailedHTMLProps, HTMLAttributes } from "react";


export function Badge(props: BadgeProps) {
    const { text = "" } = props;
    return <span>{text}</span>;
}
export type BadgeProps = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>, HTMLSpanElement
> & {
    text?: string;
};

