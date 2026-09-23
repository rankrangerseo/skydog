"use client";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useFetchNftData } from "@/hooks/useFetchNftData";
import SkeletonLoader from "../commonUI/skeletonLoader";
import Image from "next/image";
import TypoGraphy from "../commonUI/typoGraphy";

const SkyWorkSection = () => {
    const { nftData, loading } = useFetchNftData();
  return (
    <section className="lg:py-[200px] py-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex flex-col max-[1023px]:flex-col-reverse lg:items-center lg:flex-row   lg:gap-8 min-[1280px]:gap-[24px] py-5">
          <div className="w-full lg:w-[47%] xl:w-[47%] max-[1023px]:mt-5">
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
                      {nftData.slice(7, 9).map((item, index) => (
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
                      {nftData.slice(10, 12).map((item, index) => (
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
              text="Why Work with SkyDog?"
              customCss="lg:text-[60px] lg:!leading-[1.2] xl:w-[601px] carbon min-[1280px]:text-[64px]  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#fff] font-black"
            />
            <TypoGraphy
              variant="paragraph"
              text="Join SkyDog for a next-level Web3 gaming experience with NFTs, immersive gameplay, and strong community engagement."
              customCss="text-[#AAAAAA] xl:w-[601px]  lg:text-xl font-bold leading-tight mt-3 text-base"
            />
            <p className="text-[#AAAAAA] xl:w-[599px] 2xl:w-[538px]  font-bold leading-tight mt-6 text-base xl:text-base lg:text-sm">
              <span className="text-[#FFFFFF]">🎮 Gaming Innovation -</span>{" "}
              Pioneering Play-to-Earn gaming mechanics.
            </p>
            <p className="text-[#AAAAAA] xl:w-[599px]  font-bold leading-tight mt-3 text-base xl:text-base lg:text-sm">
              <span className="text-[#FFFFFF]">💰 Strong Tokenomics –</span>{" "}
              Sustainable rewards for holders & players.
            </p>
            <p className="text-[#AAAAAA] xl:w-[599px]  font-bold leading-tight mt-3 text-base xl:text-base lg:text-sm">
              <span className="text-[#FFFFFF]">🌍 Global Community –</span>{" "}
              Thousands of engaged NFT & gaming fans.
            </p>
            <p className="text-[#AAAAAA] xl:w-[599px]  font-bold leading-tight mt-3 text-base xl:text-base lg:text-sm">
              <span className="text-[#FFFFFF]">
                🚀 Long-Term Growth Vision –
              </span>{" "}
              Expanding beyond NFTs into the Web3 space.
            </p>

            <div className="max-[1023px]:hidden flex lg:justify-start justify-center gap-4 mt-[30px] items-center">
              <TypoGraphy
                variant="paragraph"
                text="Join waitlist"
                customCss="text-[#fff]  carbon font-black text-[25px] max-sm:text-xl text-[25px]"
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

export default SkyWorkSection;
