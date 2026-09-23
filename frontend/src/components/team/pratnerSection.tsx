import React from "react";

import Image from "next/image";
import TypoGraphy from "../commonUI/typoGraphy";
import nft1 from "../../../public/assets/home/pixelsimage/James.png";
import nft2 from "../../../public/assets/home/pixelsimage/Dempsey.png";
import nft3 from "../../../public/assets/home/pixelsimage/Mark.png";

const nftData = [
  {
    image: nft1,
    title: "James C. Stone, Jr.",
    description: "Founder & CEO",
  },
  {
    image: nft2,
    title: "Dempsey B. Hammond",
    description: "Equity Partner",
  },
  {
    image: nft3,
    title: "Mark A. Tan",
    description: "Advisor",
  },
];
const PratnerSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="heading"
          text="Meet the Brains Behind SkyDog"
          customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[75px] xl:!leading-[1.2] xl:w-[712px] xl:mx-auto  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#fff]  font-black"
        />
        <TypoGraphy
          variant="paragraph"
          text="SkyDog is brought to life by a passionate team of artists, developers, and storytellers. With a shared love for gaming, blockchain, and sci-fi, they’ve crafted an immersive universe where adventure meets innovation."
          customCss="text-[#AAAAAA] xl:w-[770px]  xl:mx-auto text-center lg:text-xl font-bold leading-tight mt-3 text-base"
        />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:w-[828px] lg:mx-auto mt-[36px]">
          {nftData.map((item, index) => (
            <div key={index} className="">
              <div>
                <div className="w-full card_nfts aspect-square">
                  <Image
                    alt={item.title}
                    src={item.image}
                    priority
                    width={250}
                    height={180}
                    className="w-full rounded-[30px] h-full object-cover"
                  />
                </div>
                <TypoGraphy
                  variant="paragraph"
                  text={item.title}
                  customCss="text-[#FFFFFF] text-center mt-6 lg:text-xl xl:text-2xl min-[1700px]:text-[22px] font-black carbon text-base"
                />
                <TypoGraphy
                  variant="paragraph"
                  text={item.description}
                  customCss="text-[#FFFFFF] lg:text-xl mt-[6px] font-bold text-center text-base"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PratnerSection;
