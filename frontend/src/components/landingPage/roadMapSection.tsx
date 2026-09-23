"use client";
import React from "react";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nft1 from "../../../public/assets/home/pixelsimage/James.png";
import nft2 from "../../../public/assets/home/pixelsimage/phase2.jpeg";
import nft3 from "../../../public/assets/home/pixelsimage/phase3.jpeg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MyImage } from "../commonUI/Images";
import TypoGraphy from "../commonUI/typoGraphy";
import Link from "next/link";

// Type definitions
// interface RoadmapItem {
//   id: number;
//   step: number;
//   title: string;
//   description: string;
//   image: string | StaticImageData;
//   date?: string;
// }

interface CustomArrowProps {
  onClick?: () => void;
//   icon?: React.ReactNode;
//   text?: string;
}
const nftData = [
  {
    id: 1,
    title: "PHASE - 1",
    imageSrc: nft1,
    imageAlt: "SkyDog NFT with wizard hat",
    year: "2025",

    tasks: [
      "Minting of 4444 Pixelated SkyDog NFTs on OpenSea 2 (OS2)",
      "Early Game Development Begins for SkyTrek",
      "Community Growth & Social Media Expansion",
    ],
  },
  {
    id: 2,
    title: "PHASE - 2",
    imageSrc: nft2,
    imageAlt: "SkyDog NFT with sunglasses",
    year: "2025",

    tasks: [
      "Beta Launch of SkyTrek - Early players test gameplay mechanics",
      "First Play-to-Earn SKY Token Airdrop - Score-based rewards begin",
      "Leaderboard System Goes Live - Competitive gaming starts",
    ],
  },
  {
    id: 3,
    title: "PHASE - 3",
    imageSrc: nft3,
    imageAlt: "SkyDog NFT with top hat",
    year: "2025",

    tasks: [
      "Official SKY Token Release - Utility expansion starts",
      "Staking for NFT Holders - Earn passive rewards",
      "New Power-Ups & Expansions in SkyTrek",
    ],
  },
  {
    id: 4,
    title: "PHASE - 4",
    imageSrc: MyImage.nft4,
    imageAlt: "SkyDog NFT with tech glasses",
    year: "2025",

    tasks: [
      "SkyDog NFT & In-Game Item Marketplace Launch",
      "Community DAO Governance Begins - NFT holders shape the future",
      "Additional Utility Features for SKY Token",
    ],
  },
  {
    id: 5,
    title: "PHASE - 5",
    imageSrc: MyImage.nft2,
    imageAlt: "SkyDog NFT with fancy hat",
    year: "2026 & BEYOND",

    tasks: [
      "SkyTrek 2.0 with Multiplayer & New Game Modes",
      "Strategic Gaming & Blockchain Partnerships",
      "Limited Edition NFT Expansions & Cross-Project Collabs",
    ],
  },
];

// CustomArrow component
const CustomArrow: React.FC<CustomArrowProps> = ({ onClick, }) => {
  return (
    <div className="relative  text-center" onClick={onClick}>
      <div className="slick-arrow justify-center lg:justify-end flex items-center mt-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center">
            <FaChevronLeft className="text-[#0F84EB]" />
            <FaChevronLeft className="text-[#0F84EB]" />
          </div>
          <h3 className="text-[32px] text-[#fff] max-[375px]:text-[18px] max-[320px]:text-[16px] max-[640px]:text-[24px] font-black">
            Scroll to Discover
          </h3>
          <div className="flex items-center">
            <FaChevronRight className="text-[#0F84EB]" />
            <FaChevronRight className="text-[#0F84EB]" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 3,
  margin: 30,
  nextArrow: <CustomArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Roadmap component
const RoadMapSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px] overflow-hidden">
      <div className="container mx-auto max-[1279px]:px-4 lg:mt-[50px]">
        <TypoGraphy
          variant="heading"
          text="The SkyDog Roadmap"
          customCss="lg:text-[72px] max-md:text-center carbon min-[1280px]:text-[75px]  max-[358px]:text-4xl  text-5xl md:text-7xl text-[#fff]  font-black"
        />
        <div>
          <Slider {...settings}>
            {nftData.map((item, index) => (
              <Link href="/roadmap" key={index} className="item px-2 py-5">
                <div className="relative">
                  <div className="w-full aspect-square h-full">
                    <Image
                      alt="Nft"
                      width={525}
                      height={805}
                      priority
                      src={item.imageSrc}
                      className="h-[100%] rounded-[10px] w-full object-cover"
                    />
                  </div>
                  <div className="overlay_bg">
                    <div className="border-b border-[#000] border-dotted">
                      <div className="px-3 flex items-center justify-between">
                        <TypoGraphy
                          variant="paragraph"
                          text={`step ${index + 1}`}
                          customCss="carbon text-[30px] max-[1023px]:text-[30px] max-[500px]:text-[26px] max-[320px]:text-[20px] font-black text-[#000000]"
                        />
                      </div>
                    </div>
                    <div className="px-3 py-5">
                      <TypoGraphy
                        variant="paragraph"
                        text={item.title}
                        customCss="text-4xl carbon max-[1023px]:text-3xl max-[500px]:text-3xl max-[320px]:text-xl font-black text-[#fff]"
                      />
                      <TypoGraphy
                        variant="paragraph"
                        text={item?.tasks?.[0]}
                        customCss="text-lg max-[500px]:text-base  font-normal text-[#fff]"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;

// export const showDate = (da: string): string => {
//   let date = new Date(da);
//   return date.toDateString();
// };
