import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const NftSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="heading"
          text="SkyDog NFT Holders Get Exclusive Access & Real Benefits!"
          customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[75px] xl:!leading-[1.2]   max-[358px]:text-4xl  text-4xl md:text-6xl text-[#fff]  font-black"
        />
        <TypoGraphy
          variant="paragraph"
          text="SkyDog NFT holders unlock exclusive access to special missions, rewards, and governance power. Enjoy real benefits and shape the future of the SkyTrek universe."
          customCss="text-[#AAAAAA] xl:w-[770px]  xl:mx-auto text-center lg:text-xl font-bold leading-tight mt-3 text-base"
        />
        <div className="grid gap-6 sm:grid-cols-2 grid-cols-1 lg:w-[712px] lg:mx-auto my-[48px]">
          <div className="border-[1.5px] card-shodow p-6  border-solid border-[#FFF] rounded-[20px] bg-[#DA4140]">
            <div className="bg-[#FFFFFF] flex items-center justify-center rounded-full w-[50px] h-[50px] ">
              <TypoGraphy
                variant="paragraph"
                text="1"
                customCss="text-[#DA4140]  lg:text-2xl xl:text-[35px] font-black carbon  text-xl"
              />
            </div>
            <TypoGraphy
              variant="paragraph"
              text="SkyTrek Game Access"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Play the exclusive Play-to-Earn game."
              customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
            />
          </div>
          <div className="border-[1.5px] card-shodow p-6  border-solid border-[#FFF] rounded-[20px] bg-[#0F84EB]">
            <div className="bg-[#FFFFFF] flex items-center justify-center rounded-full w-[50px] h-[50px] ">
              <TypoGraphy
                variant="paragraph"
                text="2"
                customCss="text-[#2690FF]  lg:text-2xl xl:text-[35px] font-black carbon  text-xl"
              />
            </div>
            <TypoGraphy
              variant="paragraph"
              text="Earn SKY Tokens"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Your highest score = your SKY Token rewards"
              customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
            />
          </div>
          <div className="border-[1.5px] card-shodow p-6  border-solid border-[#FFF] rounded-[20px] bg-[#FF972F]">
            <div className="bg-[#FFFFFF] flex items-center justify-center rounded-full w-[50px] h-[50px] ">
              <TypoGraphy
                variant="paragraph"
                text="3"
                customCss="text-[#FF972F]  lg:text-2xl xl:text-[35px] font-black carbon  text-xl"
              />
            </div>
            <TypoGraphy
              variant="paragraph"
              text="Limited Supply & Rarity"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Only 5,222 exist, no second chances."
              customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
            />
          </div>
          <div className="border-[1.5px] card-shodow p-6  border-solid border-[#FFF] rounded-[20px] bg-[#B840C7]">
            <div className="bg-[#FFFFFF] flex items-center justify-center rounded-full w-[50px] h-[50px] ">
              <TypoGraphy
                variant="paragraph"
                text="4"
                customCss="text-[#B840C7]  lg:text-2xl xl:text-[35px] font-black carbon  text-xl"
              />
            </div>
            <TypoGraphy
              variant="paragraph"
              text="DAO Governance"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Holders influence ecosystem decisions & voting rights."
              customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
            />
          </div>
        </div>
        <div className="flex items-center justify-center relative gap-4">
          <TypoGraphy
            variant="paragraph"
            text="Join waitlist"
            customCss="text-[#fff]  carbon font-black max-sm:text-xl text-[25px] xl:text-3xl !underline"
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
    </section>
  );
};

export default NftSection;
