import { flow } from "lodash";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { withDefaultClass, withVariantClasses } from "src/utils/fp/component";
import { clsx } from "src/utils/css";

export type AVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "success"
  | "danger"
  | "warning";

export type AProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  variant?: AVariant;
};

const variantClasses: Partial<Record<AVariant, string>> = {
  primary: "bg-zinc-900 text-white",
  secondary: "bg-zinc-100 text-zinc-900",
  outline: "border border-zinc-900 text-zinc-900",
};

function AComponent(props: AProps) {
  const { children, className, variant = "primary", ...rest } = props;

  const chosenVariantClass = variantClasses[variant];

  const classes = clsx(chosenVariantClass, className);

  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}

const transform = flow(
  withDefaultClass(
    "rounded-sm p-1 px-2 flex justify-center items-center gap-1",
  ),
  withVariantClasses(variantClasses),
);

const A = transform(AComponent) as typeof AComponent;

export default A;
