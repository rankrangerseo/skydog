"use client";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useFetchNftData } from "@/hooks/useFetchNftData";
import SkeletonLoader from "../commonUI/skeletonLoader";
import Image from "next/image";
import TypoGraphy from "../commonUI/typoGraphy";

const SkyTraitsSection = () => {
  const { nftData, loading } = useFetchNftData();
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex flex-col max-[1023px]:flex-col lg:items-center lg:flex-row   lg:gap-8 min-[1280px]:gap-[50px] py-5">
          <div className="w-full lg:w-[53%]">
            <h3 className="lg:text-[50px] xl:w-[589px] max-lg:text-center lg:leading-[1.1] carbon min-[1280px]:text-[64px]  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#fff] font-black">
              Every SkyDog is <span className="text-[#36A9FF]">Unique</span>{" "}
              Find the One That Fits Your Style!
            </h3>
            <p className="text-[#AAAAAA] xl:w-[526px] 2xl:w-[538px]  font-bold leading-tight mt-3 text-base xl:text-base lg:text-sm">
              <span className="text-[#FFFFFF]">🎩 Headgear –</span> Steampunk
              Hats, Cyber Helmets, Astronaut Helmets.
            </p>
            <p className="text-[#AAAAAA] xl:w-[526px]  font-bold leading-tight mt-3 text-base xl:text-base lg:text-sm">
              <span className="text-[#FFFFFF]">🕶️ Accessories –</span>{" "}
              Sunglasses, Pixel Chains, Floating Orbs.
            </p>
            <p className="text-[#AAAAAA] xl:w-[526px]  font-bold leading-tight mt-3 text-base xl:text-base lg:text-sm">
              <span className="text-[#FFFFFF]">🛡️ Power-Ups –</span> Glow Aura,
              Holographic Shields, Cosmic Sparks.
            </p>
            <p className="text-[#AAAAAA] xl:w-[526px]  font-bold leading-tight mt-3 text-base xl:text-base lg:text-sm">
              <span className="text-[#FFFFFF]">🌌 Backgrounds –</span> Neon
              City, Galactic Storm, Digital Grid.
            </p>

            <div className=" flex lg:justify-start justify-center gap-4 mt-[30px] items-center">
              <TypoGraphy
                variant="paragraph"
                text="Join waitlist"
                customCss="text-[#fff]  carbon font-black max-sm:text-xl text-[25px]"
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
                    <div className="flex items-center gap-5 w-full max-[470px]:flex-col">
                      {nftData.slice(12, 14).map((item, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default SkyTraitsSection;
