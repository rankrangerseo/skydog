import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
import Link from "next/link";
const features = [
  {
    title: "🚀 SkyTrek Multiplayer Mode",
    description: "Compete against friends in real-time!",
  },
  {
    title: "🛒 Decentralized NFT Marketplace",
    description: "Trade SkyDogs & in-game assets.",
  },
  {
    title: "🌍 Expansion into New Blockchain Ecosystems",
    description: "Future cross-chain compatibility.",
  },
  {
    title: "🎮 VR/Metaverse Integration",
    description: "SkyDog enters the metaverse!",
  },
];
const VisionSection = () => {
  return (
    <section className="lg:pt-[200px] pt-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <TypoGraphy
          variant="subheading"
          text="Roadmap Vision"
          customCss="lg:text-[60px] text-center !leading-[1.2] carbon  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#FFFFFF] font-black"
        />
        <TypoGraphy
          variant="subheading"
          text='"What’s Next for SkyDog?”'
          customCss="lg:text-[60px]  text-center !leading-[1.2] carbon  max-[358px]:text-4xl  text-4xl md:text-6xl text-[#FFFFFF] font-black"
        />
        <TypoGraphy
          variant="paragraph"
          text="Owning a SkyDog NFT unlocks real rewards—priority drops, exclusive discounts, governance power, and in-game perks. Gain access to special missions, rare collectibles, and shape the future of the SkyTrek universe"
          customCss="text-[#AAAAAA]  text-center xl:w-[896px] xl:mx-auto  lg:text-xl font-bold leading-tight mt-3 text-base"
        />
        <div className="lg:w-[896px] lg:mx-auto">
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6  my-[36px]">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <TypoGraphy
                  variant="paragraph"
                  text={feature.title}
                  customCss="text-[#FFFFFF] lg:text-xl xl:text-[22px] xl:w-[460px] font-black carbon text-base"
                />
                <TypoGraphy
                  variant="paragraph"
                  text={feature.description}
                  customCss="text-[#AAAAAA] mt-2 lg:text-xl md:text-lg font-bold text-base"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Link href="/join-waitlist">
              <button className="flex items-center px-[10px] h-[42px]  bg-[#36A9FF] py-[10px] gap-2.5 border-[1px] border-solid border-[#FFFFFF] rounded-[5px]">
                <span className="text-[#FFFFFF] carbon  font-black text-sm md:text-base xl:text-lg">
                  {/* Join the SkyDog Revolution */}
                  Join waitlist
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M10.6832 3.4227C10.7412 3.36459 10.8101 3.31849 10.886 3.28704C10.9619 3.25558 11.0432 3.2394 11.1253 3.2394C11.2075 3.2394 11.2888 3.25558 11.3647 3.28704C11.4406 3.31849 11.5095 3.36459 11.5675 3.4227L17.8175 9.6727C17.8756 9.73074 17.9217 9.79968 17.9532 9.87555C17.9847 9.95142 18.0008 10.0328 18.0008 10.1149C18.0008 10.197 17.9847 10.2784 17.9532 10.3542C17.9217 10.4301 17.8756 10.499 17.8175 10.5571L11.5675 16.8071C11.4503 16.9243 11.2912 16.9902 11.1253 16.9902C10.9595 16.9902 10.8004 16.9243 10.6832 16.8071C10.5659 16.6898 10.5 16.5307 10.5 16.3649C10.5 16.199 10.5659 16.04 10.6832 15.9227L16.4918 10.1149L10.6832 4.30707C10.625 4.24903 10.5789 4.1801 10.5475 4.10423C10.516 4.02835 10.4999 3.94702 10.4999 3.86489C10.4999 3.78275 10.516 3.70142 10.5475 3.62555C10.5789 3.54968 10.625 3.48074 10.6832 3.4227ZM11.5675 10.5571C11.6256 10.499 11.6717 10.4301 11.7032 10.3542C11.7347 10.2784 11.7508 10.197 11.7508 10.1149C11.7508 10.0328 11.7347 9.95142 11.7032 9.87555C11.6717 9.79968 11.6256 9.73074 11.5675 9.6727L5.31753 3.4227C5.20026 3.30542 5.0412 3.23954 4.87535 3.23954C4.7095 3.23954 4.55044 3.30542 4.43316 3.4227C4.31588 3.53997 4.25 3.69903 4.25 3.86489C4.25 4.03074 4.31588 4.1898 4.43316 4.30707L10.2418 10.1149L4.43316 15.9227C4.31588 16.04 4.25 16.199 4.25 16.3649C4.25 16.5307 4.31588 16.6898 4.43316 16.8071C4.55044 16.9243 4.7095 16.9902 4.87535 16.9902C5.0412 16.9902 5.20026 16.9243 5.31753 16.8071L11.5675 10.5571Z"
                      fill="white"
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

export default VisionSection;
