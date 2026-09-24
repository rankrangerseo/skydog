import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
// import Link from "next/link";
import ContactForm from "./contactForm";

const ContactUs = () => {
  return (
    <section className="max-xl:py-[50px] Join_bg">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex flex-col md:flex-row md:items-center max-md:pt-[50px]  md:pt-[75px] lg:min-h-screen  md:gap-5 min-[1280px]:gap-0 lg:py-5 justify-between ">
          <div className="w-full lg:w-[60%] md:w-[50%]">
            <TypoGraphy
              as="h1"
              variant="heading"
              text="Need Help? Get in Touch with the SkyDog Team"
              customCss="lg:text-[72px]  carbon min-[1280px]:text-[75px] xl:w-[617px] !leading-[1.2] max-[358px]:text-4xl  text-5xl md:text-5xl text-[#FFFFFF]  font-black"
            />
            <TypoGraphy
              variant="paragraph"
              text="Get early access to groundbreaking features, limited-time offers, and special rewards. Don't miss your chance to be a part of something special"
              customCss="xl:w-[617px] text-[#FFFFFF]  mt-4 xl:text-xl md:text-lg text-base font-bold"
            />
            {/* <div className="mt-6">
              <Link href="">
                <button className="flex items-center px-[10px] h-[42px]  py-[10px] gap-2.5 border-[1px] border-solid border-[#FFFFFF] rounded-[5px]">
                  <span className="text-[#FFFFFF] carbon  font-black text-sm md:text-base xl:text-lg">
                    Chat now
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
            </div> */}
          </div>
          <div className="w-full lg:w-[40%] md:w-[50%]  max-[1023px]:mt-5  ">
            <div className="p-[30px] rounded-[10px]   bg-[#FFF] border-[1px] border-solid border-[#FFF]  ">
              <div className="">
                <TypoGraphy
                  variant="paragraph"
                  text="Contact Us"
                  customCss="font-black carbon max-[350px]:text-xl text-3xl md:text-[32px]  text-[#000]"
                />
              </div>
             <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
