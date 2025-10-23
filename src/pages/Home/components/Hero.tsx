import { HtmlHTMLAttributes } from "react";

import Button from "src/components/Button";
import Github from "src/components/icons/Github";
import heroImage from "src/assets/me.jpg";

function Hero(props: HtmlHTMLAttributes<HTMLDivElement>) {
  const { ...rest } = props;

  return (
    <div
      {...rest}
      className="flex flex-col text-center gap-4 justify-start items-center bg-zinc-50 px-8 py-4 min-h-[400px]"
    >
      <div className="w-32 h-32 md:w-36 md:h-36 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-zinc-900">
        <img src={heroImage} className="object-cover w-full h-full" />
      </div>
      <p className="text-lg">
        Hello I'm <b>HEN</b>
      </p>
      <p>
        <b>Web Developer</b>
      </p>
      <p className="font-poppins-thin">
        <i>
          “Over the last 2 years, I have experienced with various interesting
          and complex system”
        </i>
      </p>
      <div className="flex gap-1">
        <Button>Download CV</Button>
        <Button variant="outline">
          <span>Github</span>
          <span>
            <Github />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
