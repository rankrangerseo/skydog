"use client";
import React from "react";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MyImage } from "../commonUI/Images";
import TypoGraphy from "../commonUI/typoGraphy";

// Type definitions
// interface RoadmapItem {
//   id: number;
//   step: number;
//   title: string;
//   description: string;
//   image: string | StaticImageData;
//   date?: string;
// }

interface CustomArrowProps {
  onClick?: () => void;
//   icon?: React.ReactNode;
//   text?: string;
}

const nftData = [
  { image: MyImage.nft1, title: "NFT 1" },
  { image: MyImage.nft2, title: "NFT 2" },
  { image: MyImage.nft3, title: "NFT 3" },
  { image: MyImage.nft4, title: "NFT 4" },
];

// CustomArrow component
const CustomArrow: React.FC<CustomArrowProps> = ({ onClick, }) => {
  return (
    <div className="relative  text-center" onClick={onClick}>
      <div className="slick-arrow justify-center lg:justify-end flex items-center mt-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center">
            <FaChevronLeft className="text-[#0F84EB]" />
            <FaChevronLeft className="text-[#0F84EB]" />
          </div>
          <h3 className="text-[32px] text-[#fff] max-[375px]:text-[18px] max-[320px]:text-[16px] max-[640px]:text-[24px] font-black">
            Scroll to Discover
          </h3>
          <div className="flex items-center">
            <FaChevronRight className="text-[#0F84EB]" />
            <FaChevronRight className="text-[#0F84EB]" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 2,
  slidesToScroll: 2,
  margin: 30,
  nextArrow: <CustomArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Roadmap component
const RoadMapSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px] overflow-hidden">
      <div className="container mx-auto max-[1279px]:px-4 lg:mt-[50px]">
        <TypoGraphy
          variant="heading"
          text="Roadmap & Future Utility"
          customCss="lg:text-[72px] max-md:text-center carbon min-[1280px]:text-[75px]  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#fff]  font-black"
        />
        <div>
          <Slider {...settings}>
            {nftData.map((item, index) => (
              <div key={index} className="item px-2 py-5">
                <div className="relative">
                  <div className="w-full aspect-square h-full lg:h-[628px]">
                    <Image
                      alt="Nft"
                      width={525}
                      height={805}
                      priority
                      src={item.image}
                      className="h-[100%] rounded-[10px] w-full object-cover"
                    />
                  </div>
                  <div className="overlay_bg">
                    <div className="border-b border-[#000] border-dotted">
                      <div className="px-3 flex items-center justify-between">
                        <TypoGraphy
                          variant="paragraph"
                          text={`Quarter ${index + 1}`}
                          customCss="carbon text-[30px] max-[1023px]:text-[30px] max-[500px]:text-[26px] max-[320px]:text-[20px] font-black text-[#000000]"
                        />
                      </div>
                    </div>
                    <div className="px-3 py-5">
                      <TypoGraphy
                        variant="paragraph"
                        text="SkyDog NFT Collection Launch"
                        customCss="text-4xl carbon max-[1023px]:text-3xl max-[500px]:text-3xl max-[320px]:text-xl font-black text-[#fff]"
                      />
                  
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;

// export const showDate = (da: string): string => {
//   let date = new Date(da);
//   return date.toDateString();
// };
