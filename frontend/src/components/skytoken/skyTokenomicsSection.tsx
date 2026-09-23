// import Link from "next/link";
import React from "react";

import Image from "next/image";
import coins from "../../../public/assets/home/pixelsimage/coins.png";
// import Nftimage from "../../../public/assets/home/pixelsimage/rightface.png";
import TypoGraphy from "../commonUI/typoGraphy";
// import { BsArrowUpRight } from "react-icons/bs";

const SkyTokenomicsSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="heading"
          text="SKY Tokenomics"
          customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[75px]  max-[358px]:text-4xl  text-5xl md:text-7xl text-[#fff]  font-black"
        />
        <div className="flex flex-col lg:flex-row  lg:gap-5 min-[1280px]:gap-6  mt-6">
          <div className="w-full lg:w-[50%] max-[1023px]:mt-5">
            <div className="min-[1280px]:w-[100%] min-[1536px]:w-full lg:h-[610px]  xl:h-[578px]  relative lg:px-[30px] lg:py-[30px] px-5 max-[1023px]:py-5  bg-[#000] border-2 rounded-[30px]">
              <TypoGraphy
                variant="mediumHeading"
                text="Transparent, Community Focused & Fair"
                customCss="lg:text-[50px] text-[#FFF] mb-6 text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black leading-tight"
              />
              <p className=" lg:text-2xl text-xl  carbon text-[#FFF] font-black">
                Total Supply:{" "}
                <span className="text-[#36A9FF]">
                  {/* 1,000,000,000 SKY Tokens */}
                  To Be Revealed Soon
                </span>{" "}
              </p>

              <TypoGraphy
                variant="paragraph"
                text="(Fixed Supply – No Inflation)"
                customCss="text-[#AAA] lg:text-2xl text-xl font-bold"
              />
              <TypoGraphy
                variant="paragraph"
                text="Boost your survival in SkyTrek with powerful upgrades and strategic moves. Use energy boosters for speed, shields for protection, and collect galactic tokens for extra rewards. Dodge asteroid fields, escape black holes, and outmaneuver alien traps to master the galaxy!"
                customCss="text-[#AAAAAA]  lg:text-xl font-bold leading-tight mt-6 text-base"
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%] max-[1023px]:mt-5">
            <div className="min-[1280px]:w-[100%] min-[1536px]:w-full lg:h-[610px]  xl:h-[578px]  relative lg:px-[30px] lg:py-[30px] px-5 max-[1023px]:py-5  bg-[#000] border-2 rounded-[30px]">
              <TypoGraphy
                variant="mediumHeading"
                text="Token Allocations"
                customCss="lg:text-[50px] text-[#FFF] text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black leading-tight"
              />
              <TypoGraphy
                variant="paragraph"
                text="Will be reviled soon..."
                customCss="text-[#AAA] text-base  mt-3 lg:text-xl font-bold"
              />

              <div className="w-full sm:w-[392px] flex items-center justify-center mt-6 mx-auto ">
                <Image alt="skydog" priority src={coins} className="w-full" />
              </div>
           

              {/* <div className="flex items-center gap-6 mt-6 ">
                <div className="flex items-center mt-[190px] flex-col-reverse relative gap-4">
                  <TypoGraphy
                    variant="paragraph"
                    text="Join waitlist"
                    customCss="text-[#fff]  carbon font-black text-[25px]"
                  />
                  <div className="btn-wrapper">
                    <div className="btn-top h-[85px] w-[85px] ">
                      <Link href="/join-waitlist">
                        <span>
                          <BsArrowUpRight className="text-[#fff] text-xl font-black" />
                        </span>
                      </Link>
                    </div>
                    <div className="btn-shadow  h-[85px] w-[80px]" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-[11px]">
                  <div className="xl:w-[243px] lg:w-[218px] w-[180px] max-[480px]:w-[140px]">
                    <Image
                      alt="skydog"
                      priority
                      src={Nftimage}
                      className="w-full"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkyTokenomicsSection;
