import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
// import Image from "next/image";
// import googleplayimage from "../../../public/assets/home/pixelsimage/googleplay.png";
// import applestoreimage from "../../../public/assets/home/pixelsimage/applestore.png";
const SpaceSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="flex lg:flex-row flex-col lg:items-start gap-5 lg:justify-between w-full">
          <div className="lg:w-[45%] w-full">
            <div className="max-h-[404px] rounded-[15px] border-[2px] border-solid border-[#FFF]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-[15px]"
              >
                <source src="/assets/skydogbgamevideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* <div className="text-center mt-6">
              <TypoGraphy
                variant="paragraph"
                text="Free to play, Coming soon..."
                customCss="text-[#FFFFFF]  xl:text-2xl md:text-lg text-base font-black carbon"
              />
              <div className="flex items-center justify-center gap-[10px] mt-[10px]">
                <Image
                  alt="skydog"
                  priority
                  src={googleplayimage}
                  className="w-[150px]"
                />
                <Image
                  alt="skydog"
                  priority
                  src={applestoreimage}
                  className="w-[150px]"
                />
              </div>
            </div> */}
          </div>
          <div className="lg:w-[49%]  w-full">
            <h4 className="lg:text-[50px] xl:text-6xl  text-[#FFF] mb-3 text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black !leading-tight">
              SkyTrek <br className="max-lg:hidden" /> The{" "}
              <span className="text-[#2690FF]">Play-to-Earn</span> Space
              Adventure Awaits!
            </h4>

            <TypoGraphy
              variant="paragraph"
              text="Dodge cosmic hazards, collect power-ups, and rack up high scores to earn SKY Tokens before the token launch!"
              customCss="text-[#AAAAAA] xl:w-[461px]  lg:text-xl font-bold leading-tight mt-3 text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
