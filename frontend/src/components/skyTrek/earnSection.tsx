import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
const EarnSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex lg:flex-row flex-col lg:items-center gap-5 xl:gap-10 lg:justify-between w-full">
          <div className="lg:w-[55%] w-full">
            <h4 className="lg:text-[90px] xl:text-[120px] xl:w-[620px]  text-[#FFF] mb-3 text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black leading-[1.2]">
              How to Play <br className="max-lg:hidden" /> & Earn in{" "}
              <br className="max-lg:hidden" /> SkyTrek
            </h4>

            <TypoGraphy
              variant="paragraph"
              text="In SkyTrek, explore space, complete missions, and battle enemies to earn rewards. Collect resources, upgrade your ship, and trade assets to maximize your earnings. The more you play, the more you earn."
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
          <div className="lg:w-[45%]  w-full">
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
                text="Own a SkyDog NFT"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="Own a SkyDog NFT to access SkyTrek and start your adventure."
                customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
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
                text="Play & Set Your Best Score"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="Dodge asteroids, collect power-ups, and survive as long as possible"
                customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
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
                text="Earn SKY Tokens"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="Your highest score determines the SKY tokens you earn before launch"
                customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
