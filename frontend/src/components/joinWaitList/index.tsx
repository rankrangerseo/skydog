"use client";
import React from "react";
import JoinForm from "./JoinForm";
import TypoGraphy from "../commonUI/typoGraphy";

const JoinWaitList = () => {
  return (
    <>
      <section className="max-xl:py-[50px] join_waitlist_bg">
        <div className="container mx-auto max-[1279px]:px-4">
          <div className="flex flex-col md:flex-row md:items-center max-md:pt-[50px]  md:pt-[75px] lg:min-h-screen  md:gap-5 min-[1280px]:gap-0 lg:py-5 justify-between ">
            <div className="w-full lg:w-[60%] md:w-[60%]">
              <TypoGraphy
                variant="heading"
                text="Join the Waitlist Today and Be the First to Experience What's Coming!"
                customCss="lg:text-[72px]  carbon min-[1280px]:text-[75px] xl:w-[617px] !leading-[1.2] max-[358px]:text-4xl  text-4xl md:text-5xl text-[#FFFFFF]  font-black"
              />
              <TypoGraphy
                variant="paragraph"
                text="Get early access to groundbreaking features, limited-time offers, and special rewards. Don't miss your chance to be a part of something special"
                customCss="text-[#fff] xl:w-[617px]  lg:text-[20px] font-bold leading-tight   py-[15px] text-base"
              />
            </div>
            <div className="w-full lg:w-[37%] md:w-[40%]  max-[1023px]:mt-5  ">
              <div className="p-[30px] rounded-[10px]   bg-[#FFF] border-[1px] border-solid border-[#FFF]  ">
                <div className="">
                  <TypoGraphy
                    variant="paragraph"
                    text="Join waitlist"
                    customCss="font-black max-[350px]:text-xl text-3xl md:text-[32px]  text-[#000] carbon"
                  />
                </div>
                <JoinForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinWaitList;
