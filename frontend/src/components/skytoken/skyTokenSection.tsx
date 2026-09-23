"use client";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import TypoGraphy from "../commonUI/typoGraphy";
import { useFetchNftData } from "@/hooks/useFetchNftData";
import SkeletonLoader from "../commonUI/skeletonLoader";

const SkyTokenSection = () => {
  const { nftData, loading } = useFetchNftData();
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex flex-col max-[1023px]:flex-col-reverse lg:items-center lg:flex-row   lg:gap-8 min-[1280px]:gap-[50px] py-5">
          <div className="w-full lg:w-[47%] xl:w-[45%] max-[1023px]:mt-5">
            {loading || !nftData.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </div>
            ) : (
              <>
                {nftData.length > 0 && (
                  <>
                    <div className="flex items-center gap-5 w-full max-[470px]:flex-col mb-4">
                      {nftData.slice(4, 6).map((item, index) => (
                        <div
                          key={index}
                          className="lg:w-[223px] w-full card_nfts"
                        >
                          <div className="w-full aspect-square lg:h-[221px]">
                            <Image
                              alt={item.title}
                              src={item.image}
                              priority
                              width={250}
                              height={180}
                              className="w-full rounded-[30px] h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-5 w-full max-[470px]:flex-col">
                      {nftData.slice(6, 8).map((item, index) => (
                        <div
                          key={index}
                          className="lg:w-[223px] w-full card_nfts"
                        >
                          <div className="w-full aspect-square lg:h-[221px]">
                            <Image
                              alt={item.title}
                              src={item.image}
                              priority
                              width={250}
                              height={180}
                              className="w-full rounded-[30px] h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="w-full lg:w-[53%]">
            <TypoGraphy
              variant="paragraph"
              text="Your Key to the SkyDog Ecosystem"
              customCss="lg:text-[65px] lg:w-[589px] carbon min-[1280px]:text-[75px]  max-[358px]:text-4xl  text-5xl md:text-7xl text-[#fff] font-black"
            />
            <TypoGraphy
              variant="paragraph"
              text="SKY Token powers the SkyDog ecosystem, rewarding players for gameplay, enabling digital asset trading, and offering staking benefits. Holders can vote on upgrades and enjoy exclusive perks."
              customCss="text-[#AAAAAA] xl:w-[575px]  lg:text-xl font-bold leading-tight mt-3 text-base"
            />

            <div className=" flex justify-start gap-4 mt-[30px] items-center">
              <TypoGraphy
                variant="paragraph"
                text="Join waitlist"
                customCss="text-[#fff]  carbon font-black text-[25px]"
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
      </div>
    </section>
  );
};

export default SkyTokenSection;
