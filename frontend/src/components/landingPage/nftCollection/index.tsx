"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import TypoGraphy from "@/components/commonUI/typoGraphy";

import SkeletonLoader from "@/components/commonUI/skeletonLoader";
import { useFetchNftData } from "@/hooks/useFetchNftData";

interface NftItem {
  image: string | StaticImageData;
  title: string;
}

const NftCollection: React.FC = () => {
  const { nftData, loading } = useFetchNftData();
  const [hovered] = useState<boolean>(false);
  const [slider1, setSlider1] = useState<NftItem[]>([]);
  const [slider2, setSlider2] = useState<NftItem[]>([]);

  useEffect(() => {
    if (nftData.length > 0) {
      const midpoint = Math.floor(nftData.length / 2);
      setSlider1(nftData.slice(0, midpoint));
      setSlider2(nftData.slice(midpoint));
    }
  }, [nftData]);

  return (
    <>
      <section className="overflow-hidden lg:pt-[200px] pt-[50px]">
        <div className="container mx-auto max-[1279px]:px-4">
          <h2 className="font-black lg:text-[50px]  text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] text-[#fff] leading-[normal] text-center">
            Newly Launched <span className="text-[#36A9FF]">4444</span>{" "}
            Pixelated NFT Collections
          </h2>
          <TypoGraphy
            variant="paragraph"
            text="Owning a SkyDog NFT isn’t just about collecting—it’s about unlocking exclusive gaming, rewards, and future ecosystem perks!"
            customCss="text-[#AAA] mt-3 text-base lg:text-xl text-center xl:w-[977px] xl:mx-auto font-bold"
          />
        </div>
        <div className="py-[50px]">
          {loading || (!slider1.length && !slider2.length) ? (
            <div className="grid grid-cols-1 xl:w-[1080px] lg:w-[1024px] lg:mx-auto lg:grid-cols-4 max-lg:px-4 sm:grid-cols-2 gap-5 justify-center ">
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </div>
          ) : (
            <>
              {slider1.length > 0 && (
                <div
                  className={`flex gap-5 justify-center slider-container ${
                    hovered ? "paused" : ""
                  }`}
                >
                  <div
                    className="ecosystemSlider"
                    style={{
                      animationPlayState: hovered ? "paused" : "running",
                    }}
                  >
                    {[...slider1, ...slider1, ...slider1].map((item, index) => (
                      <SliderCard key={index} item={item} index={index} />
                    ))}
                  </div>
                </div>
              )}
              {slider2.length > 0 && (
                <div
                  className={`flex gap-5 mt-7 justify-center slider-container ${
                    hovered ? "paused" : ""
                  }`}
                >
                  <div
                    className="ecosystemSlider"
                    style={{
                      animationPlayState: hovered ? "paused" : "running",
                    }}
                  >
                    {[...slider2, ...slider2, ...slider2].map((item, index) => (
                      <SliderCard key={index} item={item} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

interface SliderCardProps {
  index: number;
  item: NftItem;
}

export const SliderCard: React.FC<SliderCardProps> = ({ index, item }) => {
  return (
    <div
      className="w-[250px] card_nfts"
      style={{
        position: "relative",
        flexShrink: 0,
        bottom: index % 2 === 0 ? "15px" : "0px",
      }}
    >
      <div className="w-full aspect-square h-[250px]">
        <Image
          alt="skydog"
          src={item.image}
          width={250}
          height={180}
          priority
          className="w-full rounded-[30px] h-full object-cover"
        />
      </div>
      {/* <div className="pt-2 pb-4 px-6">
          <TypoGraphy
            variant="paragraph"
            text="Skydog Variant X"
            customCss="text-[#FFF] text-base font-bold"
          />
          <TypoGraphy
            variant="paragraph"
            text="#987654"
            customCss="text-[#FFF] text-sm font-bold mt-1"
          />
        </div> */}
    </div>
  );
};

export default NftCollection;
