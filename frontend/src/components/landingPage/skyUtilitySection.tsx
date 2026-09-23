// import Link from "next/link";
import React from "react";

import Image from "next/image";
import Nftimage from "../../../public/assets/home/newImage.png";
import TypoGraphy from "../commonUI/typoGraphy";
// import { BsArrowUpRight } from "react-icons/bs";

const SkyUtilitySection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="heading"
          text="SKY Token Utility"
          customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[75px]  max-[358px]:text-4xl  text-5xl md:text-7xl text-[#fff]  font-black"
        />
        <div className="flex flex-col lg:flex-row  lg:gap-5 min-[1280px]:gap-6  mt-6">
          <div className="w-full lg:w-[50%] max-[1023px]:mt-5">
            <div className="min-[1280px]:w-[100%] min-[1536px]:w-full lg:h-[610px]  xl:h-[578px]  relative lg:px-[30px] lg:py-[30px] px-5 max-[1023px]:py-5  bg-[#000] border-2 rounded-[30px]">
              <TypoGraphy
                variant="mediumHeading"
                text="Earn SKY Tokens Just by Playing SkyTrek!"
                customCss="lg:text-[50px] lg:w-[468px] text-[#FFF] text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black leading-tight"
              />
              <TypoGraphy
                variant="paragraph"
                text="Your high score isn’t just bragging rights—it’s a real reward. Earn SKY Tokens before the official launch"
                customCss="text-[#AAA] text-base  mt-3 lg:text-xl font-bold"
              />

              <div className="lg:absolute lg:bottom-0">
                <div className="xl:w-[243px] lg:w-[218px] w-[180px] max-[480px]:w-[140px]">
                  <Image
                    alt="skydog"
                    priority
                    src={Nftimage}
                    className="w-full"
                  />
                </div>
              </div>
              {/* <div className="flex items-center relative gap-4">
                  <TypoGraphy
                    variant="paragraph"
                    text="Let’s play"
                    customCss="text-[#fff]  carbon font-black text-[25px]"
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
          </div>
          <div className="w-full lg:w-[50%] max-[1023px]:mt-5">
            <div className="min-[1280px]:w-[100%] min-[1536px]:w-full lg:h-[610px]  xl:h-[578px]  relative lg:px-[30px] lg:py-[30px] px-5 max-[1023px]:py-5  bg-[#000] border-2 rounded-[30px]">
              <TypoGraphy
                variant="mediumHeading"
                text="The Fuel of the SkyDog Ecosystem"
                customCss="lg:text-[50px] text-[#FFF] mb-3 text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black leading-tight"
              />

              <div className="flex items-start gap-3 my-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M8.7832 14.0938L11.7832 17.0938L18.7832 10.0938"
                      stroke="#36A9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7832 25.0938C20.4106 25.0938 25.7832 19.7212 25.7832 13.0938C25.7832 6.46633 20.4106 1.09375 13.7832 1.09375C7.15579 1.09375 1.7832 6.46633 1.7832 13.0938C1.7832 19.7212 7.15579 25.0938 13.7832 25.0938Z"
                      stroke="#36A9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#AAA] lg:text-xl text-base font-semibold">
                    <span className="text-[#36A9FF] font-bold">
                      Play-to-Earn Rewards:
                    </span>{" "}
                    Convert your best game scores into tokens.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M8.7832 14.0938L11.7832 17.0938L18.7832 10.0938"
                      stroke="#36A9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7832 25.0938C20.4106 25.0938 25.7832 19.7212 25.7832 13.0938C25.7832 6.46633 20.4106 1.09375 13.7832 1.09375C7.15579 1.09375 1.7832 6.46633 1.7832 13.0938C1.7832 19.7212 7.15579 25.0938 13.7832 25.0938Z"
                      stroke="#36A9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#AAA] lg:text-xl text-base font-semibold">
                    <span className="text-[#36A9FF] font-bold">
                      Future Marketplace:
                    </span>{" "}
                    Use SKY Tokens for in-game upgrades & NFT trading.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 my-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M8.7832 14.0938L11.7832 17.0938L18.7832 10.0938"
                      stroke="#36A9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7832 25.0938C20.4106 25.0938 25.7832 19.7212 25.7832 13.0938C25.7832 6.46633 20.4106 1.09375 13.7832 1.09375C7.15579 1.09375 1.7832 6.46633 1.7832 13.0938C1.7832 19.7212 7.15579 25.0938 13.7832 25.0938Z"
                      stroke="#36A9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#AAA] lg:text-xl text-base font-semibold">
                    <span className="text-[#36A9FF] font-bold">
                      DAO & Governance:
                    </span>{" "}
                    Holders vote on future decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <path
                      d="M8.7832 14.0938L11.7832 17.0938L18.7832 10.0938"
                      stroke="#36A9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.7832 25.0938C20.4106 25.0938 25.7832 19.7212 25.7832 13.0938C25.7832 6.46633 20.4106 1.09375 13.7832 1.09375C7.15579 1.09375 1.7832 6.46633 1.7832 13.0938C1.7832 19.7212 7.15579 25.0938 13.7832 25.0938Z"
                      stroke="#36A9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#AAA] lg:text-xl text-base font-semibold">
                    <span className="text-[#36A9FF] font-bold">
                      Exclusive Perks:
                    </span>{" "}
                    Lower mint price for future collections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkyUtilitySection;
