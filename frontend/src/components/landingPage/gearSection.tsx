import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
const GearSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex lg:flex-row flex-col lg:items-start gap-5 xl:gap-8 lg:justify-between w-full">
          <div className="lg:w-[50%] w-full">
            <h4 className="lg:text-[90px] xl:text-[120px]  text-[#FFF] mb-3 text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black leading-[1.2]">
              Gear Up in <br className="max-lg:hidden" /> 3 Easy{" "}
              <br className="max-lg:hidden" /> Steps!
            </h4>

            <TypoGraphy
              variant="paragraph"
              text="Prepare for battle in just three simple steps! Choose your SkyDog warrior, connect your wallet, and jump into the action. Train, fight, and conquer to earn rewards and rise to the top"
              customCss="text-[#AAAAAA] xl:w-[550px]  lg:text-xl font-bold leading-tight mt-3 text-base"
            />
            <div className="flex items-center gap-4 mt-6">
              <TypoGraphy
                variant="paragraph"
                text="Watch trailer"
                customCss="text-[#fff]  carbon font-black text-[25px] xl:text-3xl"
              />
              <div className="btn-wrapper">
                <div className="btn-top h-[55px] w-[55px] ">
                  <Link href="/story">
                    <span>
                      <BsArrowUpRight className="text-[#fff] text-xl font-black" />
                    </span>
                  </Link>
                </div>
                <div className="btn-shadow  h-[55px] w-[50px]" />
              </div>
            </div>
          </div>
          <div className="lg:w-[49%]  w-full">
            <div className="border-[1.5px] card-shodow p-6 lg:w-[350px] border-solid border-[#FFF] rounded-[20px] bg-[#DA4140]">
              <div className="bg-[#FFFFFF] flex items-center justify-center rounded-full w-[50px] h-[50px] ">
                <TypoGraphy
                  variant="paragraph"
                  text="1"
                  customCss="text-[#DA4140]  lg:text-2xl xl:text-[35px] font-black carbon  text-xl"
                />
              </div>
              <TypoGraphy
                variant="paragraph"
                text="Get Your SkyDog"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="Mint or buy from our marketplace."
                customCss="text-[#FFFFFF]  lg:text-lg lg:w-[302px] font-bold  mt-3 text-base"
              />
            </div>
            <div className="border-[1.5px] card-shodow p-6 my-6 lg:ml-auto lg:w-[350px] border-solid border-[#FFF] rounded-[20px] bg-[#0F84EB]">
              <div className="bg-[#FFFFFF] flex items-center justify-center rounded-full w-[50px] h-[50px] ">
                <TypoGraphy
                  variant="paragraph"
                  text="2"
                  customCss="text-[#2690FF]  lg:text-2xl xl:text-[35px] font-black carbon  text-xl"
                />
              </div>
              <TypoGraphy
                variant="paragraph"
                text="Enter the Game"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="Connect your wallet & load your warrior."
                customCss="text-[#FFFFFF]  lg:text-lg lg:w-[302px] font-bold  mt-3 text-base"
              />
            </div>
            <div className="border-[1.5px] card-shodow p-6 lg:w-[350px] border-solid border-[#FFF] rounded-[20px] bg-[#FF972F]">
              <div className="bg-[#FFFFFF] flex items-center justify-center rounded-full w-[50px] h-[50px] ">
                <TypoGraphy
                  variant="paragraph"
                  text="3"
                  customCss="text-[#FF972F]  lg:text-2xl xl:text-[35px] font-black carbon  text-xl"
                />
              </div>
              <TypoGraphy
                variant="paragraph"
                text="Fight, Explore & Earn"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="Win rewards, upgrade skills, and rule the battlefield."
                customCss="text-[#FFFFFF]  lg:text-lg lg:w-[302px] font-bold  mt-3 text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearSection;
