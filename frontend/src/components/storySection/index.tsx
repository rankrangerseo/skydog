"use client";
import React, { useRef, useState } from "react";
import TypoGraphy from "../commonUI/typoGraphy";

import Link from "next/link";

const StorySection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className="lg:py-[100px] story-bg Join_bg">
      <div className="container mx-auto max-lg:px-4 lg:px-[40px] xl:px-0">
        <div className=" text-center flex items-center justify-center max-lg:min-h-screen  min-[1700px]:py-[150px] min-[1440px]:py-[100px]  py-[100px]  flex-col w-full">
          <div className="">
            <TypoGraphy
              variant="heading"
              text="The SkyDog Saga."
              customCss="lg:text-[90px] text-center carbon xl:text-[100px] xl:w-[706px] xl:mx-auto !leading-[1.2] max-[358px]:text-4xl  text-4xl md:text-6xl text-[#FFFFFF]  font-black"
            />
          </div>
          <div className="relative max-h-[321px] mt-6 w-full sm:w-[569px] rounded-[30px]">
            <video
              ref={videoRef}
              loop
              //   muted
              playsInline
              className="w-full h-full rounded-[30px]"
              onClick={togglePlay}
            >
              <source src="/assets/story.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Button */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <button onClick={togglePlay} className="">
                {!isPlaying && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                  >
                    <path
                      d="M40 60L60.76 48L40 36V60ZM86.24 28.68C86.76 30.56 87.12 33.08 87.36 36.28C87.64 39.48 87.76 42.24 87.76 44.64L88 48C88 56.76 87.36 63.2 86.24 67.32C85.24 70.92 82.92 73.24 79.32 74.24C77.44 74.76 74 75.12 68.72 75.36C63.52 75.64 58.76 75.76 54.36 75.76L48 76C31.24 76 20.8 75.36 16.68 74.24C13.08 73.24 10.76 70.92 9.76 67.32C9.24 65.44 8.88 62.92 8.64 59.72C8.36 56.52 8.24 53.76 8.24 51.36L8 48C8 39.24 8.64 32.8 9.76 28.68C10.76 25.08 13.08 22.76 16.68 21.76C18.56 21.24 22 20.88 27.28 20.64C32.48 20.36 37.24 20.24 41.64 20.24L48 20C64.76 20 75.2 20.64 79.32 21.76C82.92 22.76 85.24 25.08 86.24 28.68Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center mt-9">
            <Link href="/join-waitlist">
              <button className="flex items-center px-[10px] h-[42px]  py-[10px] gap-2.5 border-[1px] border-solid border-[#FFFFFF] rounded-[5px]">
                <span className="text-[#FFFFFF] carbon  font-black text-sm md:text-base xl:text-lg">
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
    </section>
  );
};

export default StorySection;
