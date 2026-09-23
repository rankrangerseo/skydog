import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const SurvivalSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="heading"
          text="A Fight for Survival"
          customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[75px]  max-[358px]:text-4xl  text-5xl md:text-7xl text-[#DA4140]  font-black"
        />
        <TypoGraphy
          variant="paragraph"
          text="In the year 4444, Earth is no longer habitable. The human race has fled, but one hero remains—the legendary SkyDog. To save the future, SkyDog and his fleet of 4444 elite warriors must navigate deep space, dodge asteroid belts, and survive intergalactic challenges to find a new home."
          customCss="text-[#AAA] text-base text-center my-3 xl:w-[817px] xl:mx-auto mt-3 md:text-2xl xl:text-[28px] font-bold"
        />
        <Link href="/story">
          <div className="flex items-center justify-center gap-4 mt-6">
            <TypoGraphy
              variant="paragraph"
              text="Watch trailer"
              customCss="text-[#fff]  carbon font-black text-[25px]"
            />
            <div className="btn-wrapper">
              <div className="btn-top h-[55px] w-[55px] ">
                <span>
                  <BsArrowUpRight className="text-[#fff] text-xl font-black" />
                </span>
              </div>
              <div className="btn-shadow  h-[55px] w-[50px]" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SurvivalSection;
