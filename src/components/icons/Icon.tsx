import { ComponentType, SVGAttributes } from "react";
import { clsx } from "src/utils";

type IconProps = SVGAttributes<SVGElement> & {
  icon: ComponentType<SVGAttributes<SVGElement>>;
};

function Icon(props: IconProps) {
  const { className, icon: PassedIcon, ...rest } = props;
  const classes = clsx("w-6 h-6", className);

  return <PassedIcon className={classes} {...rest} />;
}

export default Icon;
