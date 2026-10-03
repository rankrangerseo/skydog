"use client";
import React, { useState, useEffect, useRef } from "react";
import Facebook from "../../../public/assets/home/fb_icon.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/assets/logo/Logo.png";
import { MyImage } from "../commonUI/Images";
import { usePathname } from "next/navigation";


const bottomTabb = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/term-of-use" },
  // { name: "FAQ", href: "" },
  // { name: "Career", href: "" },
];
const Header = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [showDropNav, setShowDropNav] = useState<boolean>(false);
const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setShowDropNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0); // Set isScrolled to true when scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLink() {
    setShowDropNav(false);
  }

  // const ShowBtnItem = ({ text }: any) => {
  //   return (
  //     <div className="py-[5px] px-[20px] bg-[#0F84EB] text-[#FFFFFF] border-[1px] border-solid border-[#0F84EB] text-[20px] carbon font-black rounded-[5px]">
  //       {text}
  //     </div>
  //   );
  // };
  const ShowItem = ({ text }: any) => {
    return (
      <div className="py-[5px] px-[20px] border-[1px] border-solid border-[#fff] text-[20px] carbon font-black rounded-[5px]">
        {text}
      </div>
    );
  };

  const MobShowItem = ({ text }: any) => {
    return (
      <div className=" md:text-[45px] sm:text-[30px] text-[25px] max-[425px]:text-[22px] max-[378px]:text-[19px] max-[323px]:text-[16px] max-[285px]:text-[17px] carbon font-black hover:text-[#04cbf3]">
        {text}
      </div>
    );
  };
  return (
    <>
      <div>
        <>
          <div
            className={`fixed top-0 z-[60] h-[75px] w-full justify-between flex items-center text-white mx-auto p-5 ${
           pathname === "/" || showNavbar
                ? "bg-[#000]"
                : "bg-transparent"
            } flex justify-between items-center px-4 py-4`}
          >
            <div className="container mx-auto">
              <div className="flex  justify-between text-[#fff] items-center">
                <Link href="/">
                  <Image
                    alt="skydog"
                    priority
                    width={300}
                    src={Logo}
                    className="w-[70px]"
                  />
                </Link>
                <div className="flex items-center gap-2">
                  {/* {hideRoutes && (
                    <Link
                      className="h-[36px] lg:hidden flex items-center justify-center p-[5px] bg-[#0F84EB] text-[#FFFFFF] border-[1px] border-solid border-[#0F84EB]  max-[340px]:text-xs text-sm carbon font-black rounded-[5px]"
                      href=""
                      onClick={() => setJoinWhiteOpen(true)}
                    >
                      JOIN WAITLIST
                    </Link>
                  )} */}

                  {!showDropNav ? (
                    <div
                      className="min-[992px]:hidden menu-icon"
                      onClick={() => setShowDropNav(!showDropNav)}
                    >
                      <RxHamburgerMenu className="text-[#fff] text-2xl" />
                    </div>
                  ) : (
                    <div
                      className="min-[992px]:hidden menu-icon"
                      onClick={() => setShowDropNav(!showDropNav)}
                    >
                      <RxCross2 className="text-[#fff] text-2xl" />
                    </div>
                  )}
                </div>
                <div className="list max-[991px]:hidden min-[992px]:flex items-center  text-[20px] rounded-[5px] inline-flex carbon font-black min-[992px]:gap-x-4 gap-[10px]">
                  {/* {hideRoutes && (
                    <Link href="" onClick={() => setJoinWhiteOpen(true)}>
                      <ShowBtnItem text="JOIN WAITLIST" />
                    </Link>
                  )} */}
                  <button type="button" onClick={() => setShowDropNav(!showDropNav)} className="bg-transparent border-0 p-0 m-0 cursor-pointer">
                    <ShowItem text="MENU" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={mobileNavRef}
            className={`
            bg-[#000] moblie-nav  max-[991px]:z-[50] z-[100] fixed w-full top-0 overflow-y-auto  overflow-x-hidden menu_box overflow-hidden  max-[1023px]:max-h-[84vh] lg:h-auto py-4 
      duration-500 ${showDropNav ? "top-0 " : "top-[-1000px]"}
      `}
          >
            <div className="  container  mx-auto   px-5   max-[991px]:pt-[60px]">
              <div className="max-[991px]:hidden flex items-center max-[991px]:justify-between justify-end">
                <div className="min-[992px]:hidden">
                  <Link href="/">
                    <Image
                      className="w-[70px]"
                      priority
                      src={MyImage.logo}
                      alt="logo"
                    />
                  </Link>
                </div>

                {!showDropNav ? (
                  <div
                    className=" menu-icon"
                    onClick={() => setShowDropNav(!showDropNav)}
                  >
                    <RxHamburgerMenu className="text-[#fff] text-2xl" />
                  </div>
                ) : (
                  <div
                    className="btn-wrapper"
                    onClick={() => setShowDropNav(!showDropNav)}
                  >
                    <div className="btn-top h-[47px] w-[47px]">
                      <button type="button" aria-label="Close Navigation" className="bg-transparent border-0 p-0 m-0 cursor-pointer">
                        <span>
                          <RxCross2 className="text-[#fff] text-2xl font-black hover:rotate-180 hover:duration-500" />
                        </span>
                      </button>
                    </div>
                    <div className="btn-shadow h-[45px] w-[45px]"></div>
                  </div>
                )}
              </div>

              <div className="flex max-[1023px]:flex-col flex-row   pt-[20px] justify-between gap-x-7 gap-y-5">
                <div className="w-[55%] max-[1023px]:w-full relative">
                  <div className="flex items-center max-[1023px]:justify-between justify-between gap-5 max-[1023px]:gap-[4rem]">
                    <div className="">
                      <div className="">
                        <Link href="/" onClick={handleLink}>
                          <MobShowItem text="HOME" />
                        </Link>
                      </div>
                      <div className="">
                        <Link href="/skytrek" onClick={handleLink}>
                          <MobShowItem text="Skytrek" />{" "}
                        </Link>
                      </div>

                      <div className="">
                        <Link href="/sky-token" onClick={handleLink}>
                          <MobShowItem text="Sky Token" />
                        </Link>
                      </div>
                      <div className="">
                        <Link href="/perks-and-benefits" onClick={handleLink}>
                          <MobShowItem text="Perks & Benefits" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <Link href="/sky-nft" onClick={handleLink}>
                          <MobShowItem text="NFT’S" />{" "}
                        </Link>
                      </div>

                      <div className="">
                        <Link href="/roadmap" onClick={handleLink}>
                          <MobShowItem text="Roadmap" />
                        </Link>
                      </div>

                      <div className="">
                        <Link href="/teams" onClick={handleLink}>
                          <MobShowItem text="Teams " />
                        </Link>
                      </div>
                      <div className="">
                        <Link href="/contact-us" onClick={handleLink}>
                          <MobShowItem text="Contact Us" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex max-[1023px]:hidden flex-wrap items-center max-[1023px]:justify-center  gap-5  absolute bottom-0">
                    {bottomTabb?.map((item, key) => {
                      return (
                        <Link href={item.href} key={key} onClick={handleLink}>
                          <p className="text-[#fff] font-bold text-[18px] md:text-[20px] max-[310px]:text-[18px] hover:text-[#04cbf3]">
                            {item.name}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="w-[40%] max-[1023px]:w-full">
                  <div className="flex items-center justify-center max-[1023px]:justify-between  gap-7 ">
                    <Link target="_blank" href="https://discord.gg/zbF6Aab76g">
                      <Image
                        alt="skydog"
                        priority
                        src={MyImage.discord}
                        className="w-[80px] max-[639px]:w-[60px] max-[400px]:w-[50px]"
                      />
                    </Link>
                    <div className="">
                      <Link href="https://www.instagram.com/skydog_social/">
                        <Image
                          alt="skydog"
                          priority
                          src={MyImage.instagram}
                          className="w-[80px] max-[639px]:w-[60px] max-[400px]:w-[50px]"
                        />
                      </Link>
                    </div>

                    <Link href="https://www.linkedin.com/in/james-c-stone-jr-870459249/">
                      <Image
                        alt="skydog"
                        priority
                        src={MyImage.linkedin}
                        className="w-[80px] max-[639px]:w-[60px] max-[400px]:w-[50px]"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center max-[1023px]:justify-between gap-7 py-5 max-[1023px]:my-2">
                    <div className="">
                      <Link href="https://www.facebook.com/skydogsocial?mibextid=wwXIfr">
                        <Image
                          alt="skydog"
                          priority
                          src={Facebook}
                          className="w-[80px] max-[639px]:w-[60px] max-[400px]:w-[50px]"
                        />
                      </Link>
                    </div>

                    <Link href="https://twitter.com/SkyDogSocialNFT">
                      <Image
                        alt="skydog"
                        priority
                        src={MyImage.twitter}
                        className="w-[80px] max-[639px]:w-[60px] max-[400px]:w-[50px]"
                      />
                    </Link>
                  </div>
                  <div className="flex justify-center  max-[1023px]:hidden relative">
                    <div>
                      <Image
                        alt="skydog"
                        priority
                        src={MyImage.footerdogimage}
                        className="w-[218px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center max-[1023px]:justify-center  gap-5 lg:hidden">
                  {bottomTabb?.map((item, key) => {
                    return (
                      <Link href={item.href} key={key} onClick={handleLink}>
                        <p className="text-[#fff] font-bold text-[18px] md:text-[20px] max-[310px]:text-[18px] hover:text-[#04cbf3]">
                          {item.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="hidden flex justify-between items-center max-[1023px]:justify-center  max-[1023px]:flex-col-reverse relative pb-4">
                <div className="w-[50%] max-[1023px]:w-full max-[1023px]:mt-[rem]">
                  <div className="flex flex-wrap items-center max-[1023px]:justify-center  gap-5 min-[1366px]:absolute min-[1366px]:top-[231px] min-[1366px]:left-[0]">
                    {bottomTabb?.map((item, key) => {
                      return (
                        <Link href={item.href} key={key} onClick={handleLink}>
                          <p className="text-[#fff] font-bold text-[18px] md:text-[20px] max-[310px]:text-[18px]">
                            {item.name}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Header;
