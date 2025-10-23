import { ComponentType, Attributes } from "react";
import { clsx } from "./css";

export function speardProps<Props extends { key?: Attributes["key"] }>(
  Component: ComponentType<Props>,
) {
  return function (props: Props) {
    const { key } = props;
    return <Component {...props} key={key} />;
  };
}

export function withDefaultClass<Props extends { className?: string }>(
  Component: ComponentType<Props>,
  defaultClassName: string,
) {
  return function (props: Props) {
    const { className } = props;
    const classes = clsx(defaultClassName, className);
    return <Component {...props} className={classes} />;
  };
}

export function withVariantClasses<
  VariantType extends string | number | symbol,
  Props extends { className?: string; variant: VariantType },
>(
  Component: ComponentType<Props>,
  classesByVariant: Partial<Record<VariantType, string>>,
) {
  return function (props: Props) {
    const { className, variant } = props;
    const classes = clsx(classesByVariant[variant], className);
    return <Component {...props} className={classes} />;
  };
}
