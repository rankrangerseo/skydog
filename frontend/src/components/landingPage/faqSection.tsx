"use client";
import { FaqSchema } from "@/components/seo/JsonLd";

import { useState } from "react";

import { BsArrowUpRight } from "react-icons/bs";
import TypoGraphy from "../commonUI/typoGraphy";

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const faqItems = [
    {
      question: "What is SkyDog?",
      answer:
        "In the year 4444, Earth is no longer habitable. The human race has fled, but one hero remains, the legendary SkyDog. To save the future, SkyDog and his fleet of 4444 elite warriors must navigate deep space, dodge asteroid belts, and survive intergalactic challenges to find a new home.",
    },
    {
      question: "What is SkyTrek?",
      answer:
        "SkyTrek is the interstellar journey undertaken by SkyDog and his elite warriors. It's also the name of the immersive game experience where players can join SkyDog's fleet and participate in the mission to find a new home for humanity.",
    },
    {
      question: "What is Sky Token and how to use?",
      answer:
        "Sky Tokens are the in-game currency used throughout the SkyDog universe. They can be earned through gameplay, missions, and community participation. Use them to upgrade your ship, purchase equipment, and trade with other players in the intergalactic marketplace.",
    },
    {
      question: "How to play and earn?",
      answer:
        "Join SkyDog's fleet by creating an account, customizing your warrior, and embarking on missions. Complete challenges, defeat space pirates, discover new planets, and collaborate with other players. Earn Sky Tokens through successful missions, daily tasks, and tournament participation.",
    },
    {
      question: "Can i redeem my reward into tokens?",
      answer:
        "Yes, all in-game rewards can be converted to Sky Tokens at the Galactic Exchange. These tokens can then be used within the game ecosystem or traded with other players. Special achievements unlock premium rewards with higher token conversion rates.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section className="lg:py-[200px] max-lg:py-[50px]">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="max-w-6xl mx-auto">
          <TypoGraphy
            variant="heading"
            text="FAQ"
            customCss="lg:text-[72px] carbon min-[1280px]:text-[75px]  max-[358px]:text-4xl  text-5xl md:text-7xl text-[#FFFFFF]  font-black"
          />
          <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 mt-6 md:gap-16">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#FFFFFF33] pb-6 cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex items-center justify-between">
                    <TypoGraphy
                      variant="paragraph"
                      text={item.question}
                      customCss={` ${
                        expandedIndex === index
                          ? "text-[#fff]"
                          : "text-[#AAAAAA]"
                      }   font-semibold lg:text-2xl text-xl`}
                    />
                    <div className="btn-wrapper">
                      <div className="btn-top h-[36px] w-[36px] ">
                        <span
                          className={` transition-transform ${
                            expandedIndex === index ? "rotate-90" : ""
                          }`}
                        >
                          <BsArrowUpRight className="text-[#fff] text-base font-black" />
                        </span>
                      </div>
                      <div className="btn-shadow  h-[36px] w-[30px]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-0">
              {expandedIndex !== null && (
                <div className="space-y-6">
                  <TypoGraphy
                    variant="paragraph"
                    text={faqItems[expandedIndex].answer}
                    customCss="text-[#DCDCDC]   font-semibold lg:text-2xl text-xl"
                  />

                  <div className="flex items-center gap-3 mt-8 group">
                    <TypoGraphy
                      variant="paragraph"
                      text="Read More"
                      customCss="text-[#FFFFFF] carbon  font-black  text-base"
                    />

                    <div className="btn-wrapper">
                      <div className="btn-top h-[36px] w-[36px] ">
                        <span>
                          <BsArrowUpRight className="text-[#fff] text-base font-black" />
                        </span>
                      </div>
                      <div className="btn-shadow  h-[36px] w-[30px]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
