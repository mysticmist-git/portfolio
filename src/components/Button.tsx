import { flow } from "lodash";
import { ButtonHTMLAttributes } from "react";
import { withDefaultClass, withVariantClasses } from "src/utils/fp/component";
import { clsx } from "src/utils/css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "success"
  | "danger"
  | "warning";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Partial<Record<ButtonVariant, string>> = {
  primary: "bg-zinc-900 text-white",
  outline: "border border-zinc-900 text-zinc-900",
};

function ButtonComponent(props: ButtonProps) {
  const { children, className, variant = "primary", ...rest } = props;

  const chosenVariantClass = variantClasses[variant];

  const classes = clsx(chosenVariantClass, className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

const transform = flow(
  withDefaultClass("border rounded-sm p-1 px-2 flex items-center gap-1"),
  withVariantClasses(variantClasses),
);

const Button = transform(ButtonComponent);

export default Button;
