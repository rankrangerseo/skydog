import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
const features = [
  {
    title: "🏆 Earn by playing SkyTrek",
  },
  {
    title: "🚀 Vote on ecosystem upgrades",
  },
  {
    title: "🛒 Buy, sell, and trade digital assets",
  },
  {
    title: "🎭 NFT Access & Upgrades",
  },
  {
    title: "💰 Stake tokens for passive rewards",
  },
  {
    title: "🎁 Lower mint costs for holders",
  },
];
const CasesSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="paragraph"
          text="Use Cases"
          customCss="lg:text-[60px] text-center !leading-[1.2] carbon  max-[358px]:text-4xl  text-4xl md:text-5xl text-[#36A9FF] font-black"
        />
        <TypoGraphy
          variant="paragraph"
          text="SKY Tokens let you earn rewards, trade assets, stake for passive income, and participate in governance. Unlock exclusive perks as you explore the SkyDog ecosystem."
          customCss="text-[#AAAAAA] text-center xl:w-[620px] xl:mx-auto  lg:text-xl font-bold leading-tight mt-3 text-base"
        />
        <div className="grid lg:w-[788px] lg:mx-auto grid-cols-1 sm:grid-cols-2 gap-[36px] mt-[36px]">
          {features.map((feature, index) => (
            <div key={index}>
              <TypoGraphy
                variant="paragraph"
                text={feature.title}
                customCss="text-[#FFFFFF] lg:text-xl xl:text-2xl min-[1700px]:text-[22px] font-black carbon text-base"
              />
             
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
