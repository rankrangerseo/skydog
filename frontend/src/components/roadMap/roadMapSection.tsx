"use client";
import React from "react";

import Image from "next/image";
import nft1 from "../../../public/assets/home/pixelsimage/James.png";
import nft2 from "../../../public/assets/home/pixelsimage/phase2.jpeg";
import nft3 from "../../../public/assets/home/pixelsimage/phase3.jpeg";
import { MyImage } from "../commonUI/Images";
import TypoGraphy from "../commonUI/typoGraphy";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

// Type definitions
// interface RoadmapItem {
//   id: number;
//   step: number;
//   title: string;
//   description: string;
//   image: string | StaticImageData;
//   date?: string;
// }
const phases = [
  {
    id: 1,
    title: "PHASE - 1",
    imageSrc: nft1,
    imageAlt: "SkyDog NFT with wizard hat",
    year: "2025",

    tasks: [
      "Minting of  Pixelated SkyDog NFTs on OpenSea 2 (OS2)",
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

// Roadmap component
const RoadMapSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px] overflow-hidden">
      <div className="container mx-auto max-[1279px]:px-4 lg:mt-[50px]">
        <TypoGraphy
          variant="heading"
          text="From Concept to Reality"
          customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[75px]  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#fff]  font-black"
        />
        <div className="lg:w-[804px] lg:mx-auto">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`flex w-full md:flex-row flex-col  gap-6 md:items-center mb-[50px] mt-[36px]`}
            >
              <div className="relative lg:w-[45%] w-full">
                <div className="w-full lg:w-[344px] aspect-square h-full lg:h-[409px]">
                  <Image
                    width={525}
                    height={805}
                    priority
                    src={phase.imageSrc}
                    alt={phase.imageAlt}
                    className="h-[100%] rounded-[10px] w-full object-cover"
                  />
                </div>
                <div className="overlay_bg">
                  <div className=""></div>
                  <div className="px-3 py-5">
                    <TypoGraphy
                      variant="paragraph"
                      text={`${
                        phase.imageAlt.split(" ")[0]
                      } NFT COLLECTION LAUNCH`}
                      customCss="text-2xl carbon  font-black text-[#fff]"
                    />
                    <TypoGraphy
                      variant="paragraph"
                      text={`(${phase.year})`}
                      customCss="text-2xl carbon  font-black text-[#fff]"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-[55%] w-full">
                <TypoGraphy
                  variant="paragraph"
                  text={phase.title}
                  customCss="text-2xl carbon  md:text-4xl lg:text-[50px] text-3xl font-black mb-[36px] text-[#fff]"
                />
                <div className="">
                  {phase.tasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-start w-full gap-3 mb-6"
                    >
                      <div className="w-[5%] mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.11033 1.44067C8.92092 1.61065 8.72264 1.77047 8.51631 1.91946C8.1587 2.15946 7.75669 2.32506 7.33428 2.40905C7.15068 2.44505 6.95867 2.46065 6.57586 2.49065C5.61464 2.56745 5.13343 2.60585 4.73262 2.74745C4.2742 2.90902 3.85783 3.1713 3.51413 3.51498C3.17043 3.85866 2.90815 4.27501 2.74657 4.73342C2.60496 5.13421 2.56656 5.6154 2.48976 6.57659C2.47598 6.83065 2.44874 7.0838 2.40816 7.33497C2.32416 7.75737 2.15855 8.15936 1.91855 8.51695C1.81415 8.67295 1.68934 8.81935 1.43974 9.11094C0.81452 9.84533 0.501312 10.2125 0.317708 10.5965C-0.105903 11.4845 -0.105903 12.5165 0.317708 13.4045C0.501312 13.7885 0.81452 14.1557 1.43974 14.89C1.68934 15.1816 1.81415 15.328 1.91855 15.484C2.15855 15.8416 2.32416 16.2436 2.40816 16.666C2.44416 16.8496 2.45976 17.0416 2.48976 17.4244C2.56656 18.3856 2.60496 18.8668 2.74657 19.2676C2.90815 19.726 3.17043 20.1423 3.51413 20.486C3.85783 20.8297 4.2742 21.092 4.73262 21.2535C5.13343 21.3951 5.61464 21.4335 6.57586 21.5103C6.95867 21.5403 7.15068 21.5559 7.33428 21.5919C7.75669 21.6759 8.1587 21.8427 8.51631 22.0815C8.67232 22.1859 8.81872 22.3107 9.11033 22.5603C9.84475 23.1855 10.212 23.4987 10.596 23.6823C11.484 24.1059 12.516 24.1059 13.404 23.6823C13.788 23.4987 14.1553 23.1855 14.8897 22.5603C15.1813 22.3107 15.3277 22.1859 15.4837 22.0815C15.8413 21.8415 16.2433 21.6759 16.6657 21.5919C16.8493 21.5559 17.0413 21.5403 17.4241 21.5103C18.3854 21.4335 18.8666 21.3951 19.2674 21.2535C19.7258 21.092 20.1422 20.8297 20.4859 20.486C20.8296 20.1423 21.0919 19.726 21.2534 19.2676C21.395 18.8668 21.4334 18.3856 21.5102 17.4244C21.5402 17.0416 21.5558 16.8496 21.5918 16.666C21.6758 16.2436 21.8426 15.8416 22.0815 15.484C22.1859 15.328 22.3107 15.1816 22.5603 14.89C23.1855 14.1557 23.4987 13.7885 23.6823 13.4045C24.1059 12.5165 24.1059 11.4845 23.6823 10.5965C23.4987 10.2125 23.1855 9.84533 22.5603 9.11094C22.3903 8.92155 22.2304 8.72327 22.0815 8.51695C21.8413 8.15942 21.6749 7.75759 21.5918 7.33497C21.5513 7.0838 21.524 6.83065 21.5102 6.57659C21.4334 5.6154 21.395 5.13421 21.2534 4.73342C21.0919 4.27501 20.8296 3.85866 20.4859 3.51498C20.1422 3.1713 19.7258 2.90902 19.2674 2.74745C18.8666 2.60585 18.3854 2.56745 17.4241 2.49065C17.1701 2.47687 16.9169 2.44963 16.6657 2.40905C16.2431 2.32604 15.8412 2.1596 15.4837 1.91946C15.2774 1.77047 15.0791 1.61065 14.8897 1.44067C14.1553 0.81548 13.788 0.502285 13.404 0.318688C12.9657 0.108898 12.4859 0 12 0C11.5141 0 11.0343 0.108898 10.596 0.318688C10.212 0.502285 9.84475 0.81548 9.11033 1.44067ZM17.2477 9.43614C17.4173 9.25051 17.5088 9.00663 17.5032 8.75526C17.4975 8.50389 17.3951 8.26438 17.2173 8.08659C17.0395 7.9088 16.8 7.80641 16.5486 7.80074C16.2972 7.79508 16.0533 7.88656 15.8677 8.05616L10.0476 13.8761L8.1323 11.9621C7.94667 11.7925 7.70278 11.701 7.4514 11.7067C7.20001 11.7123 6.9605 11.8147 6.7827 11.9925C6.6049 12.1703 6.50251 12.4098 6.49684 12.6612C6.49117 12.9126 6.58266 13.1564 6.75227 13.3421L9.35633 15.946C9.53947 16.1288 9.78762 16.2314 10.0464 16.2314C10.3051 16.2314 10.5532 16.1288 10.7364 15.946L17.2477 9.43614Z"
                            fill="#36A9FF"
                          />
                        </svg>
                      </div>
                      <div className="w-[90%]">
                        <TypoGraphy
                          variant="paragraph"
                          text={task}
                          customCss="text-[#FFFFFF] lg:text-xl font-bold text-base"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className=" flex  justify-center gap-4 mt-[36px] items-center">
            <TypoGraphy
              variant="paragraph"
              text="Will expand more"
              customCss="text-[#fff]  carbon font-black text-[25px] max-sm:text-xl text-[25px]"
            />
            <div className="btn-wrapper">
              <div className="btn-top h-[55px] w-[55px]">
                <Link href="">
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

export default RoadMapSection;
