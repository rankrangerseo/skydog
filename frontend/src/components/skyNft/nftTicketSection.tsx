import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
// import Link from "next/link";
// import { BsArrowUpRight } from "react-icons/bs";

const NftTicketSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="subheading"
          text="SkyDog NFT’s Unlock Your Ticket to SkyTrek!"
          customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[72px] xl:!leading-[1.2] xl:w-[766px] xl:mx-auto  max-[358px]:text-4xl  text-4xl  md:text-6xl text-[#fff]  font-black"
        />
        <TypoGraphy
          variant="paragraph"
          text="Holding a SkyDog isn’t just about collecting—it’s about playing, earning, and leading the pack"
          customCss="text-[#AAAAAA] xl:w-[620px]  xl:mx-auto text-center lg:text-xl font-bold leading-tight mt-3 text-base"
        />
        <div className="grid gap-6 sm:grid-cols-2 grid-cols-1 md:grid-cols-3  my-[24px]">
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
              text="Mint a SkyDog NFT"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Gain access to SkyTrek."
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
              text="Compete in the Game"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Dodge obstacles, collect power-ups, and set a high score."
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
              text="Earn SKY Tokens"
              customCss="text-[#FFFFFF]  lg:text-xl xl:text-2xl font-black carbon mt-3 text-base"
            />
            <TypoGraphy
              variant="paragraph"
              text="Your best game score = your token airdrop"
              customCss="text-[#FFFFFF]  lg:text-lg lg:w-[296px] font-bold  mt-3 text-base"
            />
          </div>
        </div>
        {/* <div className="flex items-center justify-center relative gap-4 mt-6">
          <TypoGraphy
            variant="paragraph"
            text="Start Playing SkyTrek"
            customCss="text-[#fff]  carbon font-black text-[25px] xl:text-3xl !underline"
          />
          <div className="btn-wrapper">
            <div className="btn-top h-[55px] w-[55px] ">
              <Link href="#">
                <span>
                  <BsArrowUpRight className="text-[#fff] text-xl font-black" />
                </span>
              </Link>
            </div>
            <div className="btn-shadow  h-[55px] w-[50px]" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NftTicketSection;
