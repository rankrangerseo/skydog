import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
import Image from "next/image";
import UFOimage from "../../../public/assets/home/pixelsimage/UFO.png";

const GalaxySection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex flex-col max-[1023px]:flex-col-reverse lg:items-center lg:flex-row   lg:gap-8 min-[1280px]:gap-[50px] py-5">
          <div className="w-full lg:w-[47%] xl:w-[47%] max-[1023px]:mt-5">
            <div className=" flex justify-start">
              <Image
                alt="UFOimage"
                src={UFOimage}
                priority
                width={999}
                height={999}
                className="w-full  h-full"
              />
            </div>
          </div>
          <div className="w-full lg:w-[53%]">
            <TypoGraphy
              variant="paragraph"
              text="Master the Galaxy,
Use Power-ups & Avoid Dangers"
              customCss="lg:text-[60px] !leading-[1.2] carbon  max-[358px]:text-4xl  text-4xl md:text-5xl text-[#fff] font-black"
            />
            <TypoGraphy
              variant="paragraph"
              text="Boost your survival in SkyTrek with powerful upgrades and strategic moves. Use energy boosters for speed, shields for protection, and collect galactic tokens for extra rewards. Dodge asteroid fields, escape black holes, and outmaneuver alien traps to master the galaxy!"
              customCss="text-[#AAAAAA] xl:w-[620px]  lg:text-xl font-bold leading-tight mt-3 text-base"
            />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 mt-[50px]">
          <div className="border-[1.5px] card-shodow p-6 border-solid border-[#FFF] rounded-[20px] bg-[#4F0E6F]">
            <TypoGraphy
              variant="paragraph"
              text="⚡ Energy Boosters"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Gives a speed burst to escape threats."
              customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
            />
          </div>
          <div className="border-[1.5px] card-shodow p-6 border-solid border-[#FFF] rounded-[20px] bg-[#E05F25]">
            <TypoGraphy
              variant="paragraph"
              text="🛡️ Shields"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Protect against asteroid crashes for a few seconds."
              customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
            />
          </div>
          <div className="border-[1.5px] card-shodow p-6 border-solid border-[#FFF] rounded-[20px] bg-[#C7224A]">
            <TypoGraphy
              variant="paragraph"
              text="💎 Galactic Tokens"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Bonus collectibles to increase rewards."
              customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxySection;
