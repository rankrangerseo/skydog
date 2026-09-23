import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-[100px] token_bg ">
      <div className="container mx-auto max-[1279px]:px-4 ">
        <div className="text-center flex items-center justify-center  min-[1700px]:py-[300px] min-[1440px]:py-[200px]  py-[150px] lg:w-[795px] lg:mx-auto w-full ">
          <div className="text-center ">
            <TypoGraphy
              as="h1" variant="heading"
              text="Earn, Play, and Build with SKY Token"
              customCss="lg:text-[72px] text-center carbon min-[1280px]:text-[80px] xl:w-[896px] !leading-[1.2] max-[358px]:text-4xl  text-5xl md:text-7xl text-[#FFFFFF]  font-black"
            />
            <TypoGraphy
              variant="paragraph"
              text="Your score in SkyTrek converts into SKY Tokens, fueling an ecosystem where gaming meets real rewards"
              customCss="xl:w-[650px] text-[#CDCDCD] xl:mx-auto mt-4 xl:text-xl md:text-lg text-base font-bold"
            />

            <div className="flex items-center justify-center mt-6">
              <Link href="/join-waitlist">
                <button className="flex items-center px-[10px] h-[42px]  py-[10px] gap-2.5 border-[1px] border-solid border-[#FFFFFF] rounded-[5px]">
                  <span className="text-[#FFFFFF] carbon  font-black text-sm md:text-base xl:text-lg">
                    {/* claim skytoken */}
                    Join waitlist
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M10.1832 3.80795C10.2412 3.74984 10.3101 3.70374 10.386 3.67229C10.4619 3.64084 10.5432 3.62465 10.6253 3.62465C10.7075 3.62465 10.7888 3.64084 10.8647 3.67229C10.9406 3.70374 11.0095 3.74984 11.0675 3.80795L17.3175 10.058C17.3756 10.116 17.4217 10.1849 17.4532 10.2608C17.4847 10.3367 17.5008 10.418 17.5008 10.5001C17.5008 10.5823 17.4847 10.6636 17.4532 10.7395C17.4217 10.8154 17.3756 10.8843 17.3175 10.9423L11.0675 17.1923C10.9503 17.3096 10.7912 17.3755 10.6253 17.3755C10.4595 17.3755 10.3004 17.3096 10.1832 17.1923C10.0659 17.0751 10 16.916 10 16.7501C10 16.5843 10.0659 16.4252 10.1832 16.308L15.9918 10.5001L10.1832 4.69233C10.125 4.63428 10.0789 4.56535 10.0475 4.48948C10.016 4.41361 9.99986 4.33227 9.99986 4.25014C9.99986 4.16801 10.016 4.08668 10.0475 4.0108C10.0789 3.93493 10.125 3.866 10.1832 3.80795ZM11.0675 10.9423C11.1256 10.8843 11.1717 10.8154 11.2032 10.7395C11.2347 10.6636 11.2508 10.5823 11.2508 10.5001C11.2508 10.418 11.2347 10.3367 11.2032 10.2608C11.1717 10.1849 11.1256 10.116 11.0675 10.058L4.81753 3.80795C4.70026 3.69068 4.5412 3.62479 4.37535 3.62479C4.2095 3.62479 4.05044 3.69068 3.93316 3.80795C3.81588 3.92523 3.75 4.08429 3.75 4.25014C3.75 4.41599 3.81588 4.57505 3.93316 4.69233L9.74175 10.5001L3.93316 16.308C3.81588 16.4252 3.75 16.5843 3.75 16.7501C3.75 16.916 3.81588 17.0751 3.93316 17.1923C4.05044 17.3096 4.2095 17.3755 4.37535 17.3755C4.5412 17.3755 4.70026 17.3096 4.81753 17.1923L11.0675 10.9423Z"
                        fill="#0F84EB"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
