import React from "react";
import TypoGraphy from "../commonUI/typoGraphy";
import Image from "next/image";
import Nft from "../../../public/assets/home/leaderimage/nft.png";
import Nft1 from "../../../public/assets/home/leaderimage/nft1.png";
import Nft2 from "../../../public/assets/home/leaderimage/nft2.png";
import Nft3 from "../../../public/assets/home/leaderimage/nft3.png";
import Nft4 from "../../../public/assets/home/leaderimage/nft4.png";
import Nft5 from "../../../public/assets/home/leaderimage/nft5.png";
import Nft6 from "../../../public/assets/home/leaderimage/nft6.png";
import Nft7 from "../../../public/assets/home/leaderimage/nft7.png";
import Nft8 from "../../../public/assets/home/leaderimage/nft8.png";
import Nft9 from "../../../public/assets/home/leaderimage/nft9.png";
import Price from "../../../public/assets/home/pixelsimage/Price.png";
import darkprice from "../../../public/assets/home/pixelsimage/darkprice.png";
import Priceone from "../../../public/assets/home/pixelsimage/price1.png";
import medal from "../../../public/assets/home/pixelsimage/medal.png";

const LeaderData = [
  { id: 1, playerimage: Nft, name: "PLAYER 1", score: 3520, trophy: Price },
  {
    id: 2,
    playerimage: Nft1,
    name: "PLAYER 2",
    score: 3420,
    trophy: darkprice,
  },
  { id: 3, playerimage: Nft2, name: "PLAYER 3", score: 3320, trophy: Priceone },
  { id: 4, playerimage: Nft3, name: "PLAYER 4", score: 3220, trophy: medal },
  { id: 5, playerimage: Nft4, name: "PLAYER 5", score: 3120, trophy: medal },
  { id: 6, playerimage: Nft5, name: "PLAYER 6", score: 2520, trophy: medal },
  { id: 7, playerimage: Nft6, name: "PLAYER 7", score: 2420, trophy: medal },
  { id: 8, playerimage: Nft7, name: "PLAYER 8", score: 2320, trophy: medal },
  { id: 9, playerimage: Nft8, name: "PLAYER 9", score: 2220, trophy: medal },
  { id: 10, playerimage: Nft9, name: "PLAYER 10", score: 2120, trophy: medal },
];
const LeaderboardSection = () => {
  return (
    <section className="lg:mt-[200px] mt-[50px] leaderboard_bg">
      <div className="container mx-auto max-[1279px]:px-4">
        <div className="pt-[50px] text-center">
          <TypoGraphy
            variant="mediumHeading"
            text="Who Rules the Galaxy?"
            customCss="lg:text-[50px] text-[#FFF] mb-3 text-5xl max-[450px]:text-4xl max-[340px]:text-[35px] font-black leading-tight"
          />
          <TypoGraphy
            variant="paragraph"
            text="Compete in SkyTrek, earn rewards, and climb the leaderboard. Use power-ups, dodge obstacles, and outscore rivals to secure your place among the galaxy’s best"
            customCss="text-[#AAAAAA] xl:w-[712px] xl:mx-auto text-center lg:text-xl font-bold leading-tight mt-3 text-base"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-[36px] pb-[50px]">
          <div className="space-y-3">
            {LeaderData.slice(0, 5).map((player) => (
              <div
                key={player.id}
                className="leader-card p-[10px] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px]">
                    <Image
                      alt="Nft"
                      src={player.playerimage}
                      priority
                      width={250}
                      height={180}
                      className="w-full rounded-[5px] h-full object-cover"
                    />
                  </div>
                  <TypoGraphy
                    variant="paragraph"
                    text={player.name}
                    customCss="text-[#fff]  carbon font-black  max-[350px]:text-lg text-2xl"
                  />
                </div>
                <div className="flex items-center gap-6">
                  <TypoGraphy
                    variant="paragraph"
                    text={player.score}
                    customCss="text-[#fff]  carbon font-black  max-[350px]:text-lg text-2xl"
                  />
                  <div className="w-[37px] h-[40px]">
                    <Image
                      alt="Price"
                      src={player.trophy}
                      priority
                      width={250}
                      height={180}
                      className="w-full rounded-[5px] h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {LeaderData.slice(5, 10).map((player) => (
              <div
                key={player.id}
                className="leader-card p-[10px] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px]">
                    <Image
                      alt="Nft"
                      src={player.playerimage}
                      priority
                      width={250}
                      height={180}
                      className="w-full rounded-[5px] h-full object-cover"
                    />
                  </div>
                  <TypoGraphy
                    variant="paragraph"
                    text={player.name}
                    customCss="text-[#fff]  carbon font-black text-2xl max-[350px]:text-lg"
                  />
                </div>
                <div className="flex items-center gap-6">
                  <TypoGraphy
                    variant="paragraph"
                    text={player.score}
                    customCss="text-[#fff]  carbon font-black text-2xl max-[350px]:text-lg"
                  />
                  <div className="w-[37px] h-[40px]">
                    <Image
                      alt="Price"
                      src={player.trophy}
                      priority
                      width={250}
                      height={180}
                      className="w-full rounded-[5px] h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
