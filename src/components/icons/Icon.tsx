import { ComponentType, SVGAttributes } from "react";
import { withDefaultClass } from "src/utils/component";

type IconProps = SVGAttributes<SVGElement> & {
  icon: ComponentType<SVGAttributes<SVGElement>>;
};

function IconComponent(props: IconProps) {
  const { icon: PassedIcon, ...rest } = props;
  return <PassedIcon {...rest} />;
}

const Icon = withDefaultClass(IconComponent, "w-6 h-6");

export default Icon;
