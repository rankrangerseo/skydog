import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";

import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
const RewardsSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex lg:flex-row flex-col lg:items-center gap-5 xl:gap-10 lg:justify-between w-full">
          <div className="lg:w-[55%] w-full">
            <h4 className="lg:text-[60px] xl:text-[72px] xl:w-[620px]  text-[#FFF] mb-3 text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black leading-[1.2]">
              SkyDog NFTs Are <br className="max-lg:hidden" /> Built for
              Long-Term <br className="max-lg:hidden" /> Rewards
            </h4>

            <TypoGraphy
              variant="paragraph"
              text="SkyDog NFTs offer lasting value with ongoing rewards, exclusive access, and future upgrades. Earn play-to-earn benefits, unlock special missions, and gain governance power as the SkyTrek universe evolves and expands."
              customCss="text-[#AAAAAA] xl:w-[528px]  lg:text-xl font-bold leading-tight mt-3 text-base"
            />
            <div className="flex items-center gap-4 mt-6">
              <TypoGraphy
                variant="paragraph"
                text="Join waitlist"
                customCss="text-[#fff] !underline carbon font-black text-[25px] xl:text-3xl"
              />
              <div className="btn-wrapper">
                <div className="btn-top h-[55px] w-[55px] ">
                  <Link href="/join-waitlist">
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
                text="NFT Staking"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="Earn SKY Tokens just by holding NFTs"
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
                text="SkyDog Marketplace"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="Buy/sell in-game power-ups & NFT-based items."
                customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
              />
            </div>
            <div className="border-[1.5px] card-shodow p-6 lg:w-[363px] border-solid border-[#FFF] rounded-[20px] bg-[#FF972F]">
              <div className="bg-[#FFFFFF] flex items-center justify-center rounded-full w-[50px] h-[50px] ">
                <TypoGraphy
                  variant="paragraph"
                  text="3"
                  customCss="text-[#FF972F]  lg:text-2xl xl:text-[35px] font-black carbon  text-xl"
                />
              </div>
              <TypoGraphy
                variant="paragraph"
                text="Cross-Project Collaborations"
                customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
              />
              <TypoGraphy
                variant="paragraph"
                text="More partnerships & exclusive airdrops."
                customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
