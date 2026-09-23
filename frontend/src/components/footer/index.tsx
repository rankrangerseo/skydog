import Image from "next/image";
import React from "react";

import Link from "next/link";
import Tiktok from "../../../public/assets/home/tiktok.png";
// import YouTube from "../../../public/assets/home/Youtube.png";
import Facebook from "../../../public/assets/home/fb_icon.png";
import Twitter from "../../../public/assets/home/twitterimg.png";
import Telegram from "../../../public/assets/home/telegram.png";
import { MyImage } from "../commonUI/Images";
import TypoGraphy from "../commonUI/typoGraphy";
const LeftMenu = [
  { name: "Home", href: "/" },

  { name: "Skytrek", href: "/skytrek" },

  { name: "Sky token", href: "/sky-token" },
  { name: "Perks & Benefits", href: "/perks-&-benefits" },
];
const RightMenu = [
  { name: "NFT’S", href: "/sky-nft" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Teams ", href: "/teams" },
  { name: "Contact Us", href: "/contact-us" },
];
const bottomTabb = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/term-of-use" },
  // { name: "FAQ", href: "" },
  // { name: "Career", href: "" },
];
const Footer = () => {
  return (
    <>
      <section className="lg:pt-[70px] border-t-[1px] border-[#AAAAAA4D] overflow-hidden">
        <div className="container mx-auto max-[1279px]:px-4">
          <div className="flex md:flex-row gap-y-6  lg:items-center flex-col w-full  justify-center md:justify-between  max-[991px]:mt-[30px]">
            <div className="flex w-full md:w-[55%] xl:w-[60%] flex-col">
              <div className="max-[767px]:flex max-[767px]:justify-center mb-[60px]">
                <Image
                  alt="skydog"
                  src={MyImage.footerskydog}
                  className="w-[250px]"
                />
              </div>
              <div className=" flex md:justify-start  min-[768px]:gap-x-[30px] lg:gap-x-[40px] xl:gap-x-[60px]   justify-between ">
                <div>
                  {LeftMenu?.map((item, key) => {
                    return (
                      <Link href={item.href} key={key}>
                        <h4 className="text-[#fff] xl:text-[45px] lg:text-[38px] max-[450px]:text-[24px] max-[320px]:text-[20px]  max-[1023px]:text-[22px] hover:text-[#04cbf3]">
                          {item.name}
                        </h4>
                      </Link>
                    );
                  })}
                </div>
                <div>
                  {RightMenu?.map((item, key) => {
                    return (
                      <Link href={item.href} key={key}>
                        <h4 className="text-[#fff] xl:text-[45px] lg:text-[38px] max-[450px]:text-[24px] max-[320px]:text-[20px] max-[1023px]:text-[22px] footer-width  hover:text-[#04cbf3]">
                          {item.name}
                        </h4>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className=" w-full md:mb-5  xl:mb-0">
                <TypoGraphy
                  variant="paragraph"
                  text="Follow Us On"
                  customCss=" carbon text-[#fff] font-black mt-[40px] text-3xl max-lg:text-[22px] hover:text-[#04cbf3]"
                />

                <div className=" flex gap-3 items-center flex-wrap mt-2 min-[992px]:my-2 lg:mb-0">
                  <Link target="_blank" href="https://discord.gg/skydog">
                    <Image
                      alt="SkyDog Discord Community"
                      priority
                      src={MyImage.discord}
                      className="w-[50px] h-[50px]"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/skydog_social/"
                  >
                    <Image
                      alt="SkyDog Instagram"
                      priority
                      src={MyImage.instagram}
                      className="w-[50px] h-[50px]"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/james-c-stone-jr-870459249/"
                    target="_blank"
                  >
                    <Image
                      alt="SkyDog LinkedIn"
                      priority
                      src={MyImage.linkedin}
                      className="w-[50px] h-[50px]"
                    />
                  </Link>

                  <Link target="_blank" href="https://t.me/SkyDog_SOCIAL">
                    <Image
                      alt="SkyDog Telegram Channel"
                      priority
                      src={Telegram}
                      className="w-[50px] h-[50px]"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/skydogsocial?mibextid=wwXIfr"
                  >
                    <Image
                      alt="SkyDog Facebook Page"
                      priority
                      src={Facebook}
                      className="w-[50px] h-[50px]"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://twitter.com/SkyDogSocialNFT"
                  >
                    <Image
                      alt="SkyDog Twitter X"
                      priority
                      src={Twitter}
                      className="w-[50px] h-[50px]"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.tiktok.com/@skydogsocial44"
                  >
                    <Image
                      alt="SkyDog TikTok"
                      priority
                      src={Tiktok}
                      className="w-[50px] h-[50px]"
                    />
                  </Link>
                  {/* <Link
                    target="_blank"
                    href="https://www.youtube.com/@SkyDogSocial"
                  >
                    <Image
                      alt="skydog"
                      priority
                      src={YouTube}
                      className="w-[50px] h-[50px]"
                    />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className=" w-full  md:w-[45%] relative xl:w-[40%]">
              <div className="lg:w-[494px] xl:w-[556px] footer-image md:w-[377px] flex justify-end items-end">
                <Image
                  className="w-full"
                  alt="skydog"
                  priority
                  src={MyImage.footerdogimage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#AAAAAA4D]">
          <div className="container mx-auto max-[1279px]:px-4">
            <div className="flex page-coverx justify-between py-5  items-center max-md:flex-col">
              <p className="text-[#fff] font-bold text-xs max-[767px]:text-center max-[767px]:mb-3">
                COPYRIGHT © {new Date().getUTCFullYear()} -- “SKYDOG” -- ALL
                RIGHTS RESERVED
              </p>
              <div className="flex gap-5 flex-wrap max-[767px]:gap-3 max-[294px]:gap-2 items-center md:mr-[5px] lg:mr-[15px] xl:mr-[-50px] max-[767px]:text-center ">
                {bottomTabb?.map((item, key) => {
                  return (
                    <Link href={item.href} key={key}>
                      <p className="text-[#fff] font-bold text-xs hover:text-[#04cbf3]">
                        {item.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
