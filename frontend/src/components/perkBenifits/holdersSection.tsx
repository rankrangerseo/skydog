import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
const features = [
  {
    title: "🎟️ VIP Access to Future NFT Drops",
    description: "Holders get lower mint prices.",
  },
  {
    title: "🎁 Early Access to Features & Beta Testing",
    description: "Get first access to SkyTrek updates.",
  },
  {
    title: "🌍 Join a Global Community of Holders & Gamers",
    description: "Private holder-only channels & AMAs.",
  },
  {
    title: "👕 Merch Discounts",
    description: "Exclusive gears available only to holders.",
  },
];
const HoldersSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="subheading"
          text="SkyDog NFT Holders Get Access to Exclusive Experiences"
          customCss="lg:text-[60px] xl:w-[896px] xl:mx-auto text-center !leading-[1.2] carbon  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#FFFFFF] font-black"
        />

        <TypoGraphy
          variant="paragraph"
          text="SkyDog NFT holders unlock access to exclusive missions, rewards, and in-game perks. Experience the adventure like never before"
          customCss="text-[#AAAAAA]  text-center xl:w-[700px] xl:mx-auto  lg:text-xl font-bold leading-tight mt-3 text-base"
        />
        <div className="lg:w-[948px] lg:mx-auto">
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6  my-[36px]">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <TypoGraphy
                  variant="paragraph"
                  text={feature.title}
                  customCss="text-[#FFFFFF] lg:text-xl xl:text-[22px] xl:w-[460px] font-black carbon text-base"
                />
                <TypoGraphy
                  variant="paragraph"
                  text={feature.description}
                  customCss="text-[#AAAAAA] mt-2 lg:text-xl md:text-lg font-bold text-base"
                />
              </div>
            ))}
          </div>
          <div className=" flex  justify-center gap-4 mt-3 items-center">
            <TypoGraphy
              variant="paragraph"
              text="Join the SkyDog Community"
              customCss="text-[#fff]  carbon font-black text-[25px] max-sm:text-xl text-[25px]"
            />
            <div className="btn-wrapper">
              <div className="btn-top h-[55px] w-[55px]">
                <Link href="/join-waitlist">
                  <span>
                    <GoArrowUpRight className="text-[#fff] text-xl font-normal" />
                  </span>
                </Link>
              </div>
              <div className="btn-shadow h-[55px] w-[50px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoldersSection;
