import { ButtonHTMLAttributes } from "react";
import { clsx } from "src/utils";

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

function Button(props: ButtonProps) {
  const { children, className, variant = "primary", ...rest } = props;

  const chosenVariantClass = variantClasses[variant];

  const classes = clsx(
    "border rounded-sm p-1 px-2 flex items-center gap-1",
    chosenVariantClass,
    className,
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
