import { HtmlHTMLAttributes } from "react";
import { useEffect } from "react";

import Button from "src/components/Button";
import Github from "src/components/icons/Github";
import heroImage from "src/assets/me.jpg";

function Hero(props: HtmlHTMLAttributes<HTMLDivElement>) {
  useEffect(() => {
    // Add any animations or effects here if needed
  }, []);
  const { ...rest } = props;

  return (
    <section
      {...rest}
      className="flex flex-col text-center gap-6 justify-start items-center bg-zinc-50 text-black px-8 py-6 min-h-[64vh]"
    >
      <div className="w-32 h-32 md:w-36 md:h-36 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-zinc-900">
        <img src={heroImage} alt="Portrait of HEN" className="object-cover w-full h-full border border-black" />
      </div>
      <p className="text-xl font-semibold">
        Hello I'm <b>HEN</b>
      </p>
      <p>
        <b>Web Developer</b>
      </p>
      <blockquote className="font-poppins-thin text-base italic text-gray-600">
        <i>
          “Over the last 2 years, I have experienced with various interesting
          and complex system”
        </i>
      </blockquote>
      <div className="flex gap-1">
        <Button className="bg-white text-black border border-black px-4 py-2">Download CV</Button>
        <Button variant="outline" className="border-black text-black px-4 py-2">
          <span>Github</span>
          <span>
            <Github />
          </span>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
