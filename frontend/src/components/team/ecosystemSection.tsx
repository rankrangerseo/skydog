import React from "react";

import Image from "next/image";
import TypoGraphy from "../commonUI/typoGraphy";
import metaIcon from "../../../public/assets/home/pixelsimage/metaIcon.png";
import metaIcon1 from "../../../public/assets/home/pixelsimage/metaIcon1.png";
import nftIcon from "../../../public/assets/home/pixelsimage/nftIcon.png";
import nftIcon1 from "../../../public/assets/home/pixelsimage/nftIcon1.png";
import btcIcon from "../../../public/assets/home/pixelsimage/Icon.png";

import webIcon from "../../../public/assets/home/pixelsimage/webIcon.png";
import webIcon1 from "../../../public/assets/home/pixelsimage/webIcon1.png";
import busIcon from "../../../public/assets/home/pixelsimage/busIcon.png";
import busIcon1 from "../../../public/assets/home/pixelsimage/busIcon1.png";
import tokIcon from "../../../public/assets/home/pixelsimage/tokIcon.png";
const nftData = [
  {
    title: "Business Partners",
    imageone: busIcon,
    imagetwo: busIcon1,
  },
  {
    title: " Blockchain & DeFi",
    imageone: btcIcon,
  },
  {
    title: "Web3 & DAO Integration",
    imageone: webIcon,
    imagetwo: webIcon1,
  },
  {
    title: "Gaming & Metaverse Partner",
    imageone: metaIcon,
    imagetwo: metaIcon1,
  },
  {
    title: "NFT Marketplaces",
    imageone: nftIcon,
    imagetwo: nftIcon1,
  },
  {
    title: "Token Launchpad",
    imageone: tokIcon,
    imagetwo: "",
  },
];
const EcosystemSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="heading"
          text="The SkyDog Ecosystem is Growing with Top-Tier Partners!"
          customCss="lg:text-[64px] text-center carbon min-[1280px]:text-[64px] xl:!leading-[1.2] xl:w-[712px] xl:mx-auto  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#fff]  font-black"
        />

        <div className="grid gap-6 sm:grid-cols-2   grid-cols-1 lg:w-[712px] lg:mx-auto mt-[36px]">
          {nftData.map((item, index) => (
            <div
              key={index}
              className="border-[1.5px] border-[#FFFFFF1A] border-solid rounded-[20px] p-6"
            >
              <TypoGraphy
                variant="paragraph"
                text={item.title}
                customCss="text-[#FFFFFF] lg:text-xl opacity-[0.5] font-bold text-base"
              />
              <div className="flex items-center gap-3 mt-[11px]">
                <div className="w-[60px] h-[60px]">
                  <Image
                    alt={item.title}
                    src={item.imageone}
                    priority
                    width={250}
                    height={180}
                    className="w-full rounded-[30px] h-full object-cover"
                  />
                </div>
                {item.imagetwo && (
                  <div className="w-[60px] h-[60px]">
                    <Image
                      alt={item.title}
                      src={item.imagetwo}
                      priority
                      width={250}
                      height={180}
                      className="w-full rounded-[30px] h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
