import React from "react";
import HeroSection from "./heroSection";
import EarnSection from "./earnSection";

import SkyTokenSection from "./skyTokenSection";

import SkyTokenomicsSection from "./skyTokenomicsSection";
import CasesSection from "./casesSection";
import RoadMapSection from "../landingPage/roadMapSection";


const SkyToken = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <SkyTokenSection />
      <CasesSection />
      <SkyTokenomicsSection />
      <EarnSection />

      <div className="lg:pb-[200px] pb-[50px]">
        <RoadMapSection />
      </div>
    </div>
  );
};

export default SkyToken;
