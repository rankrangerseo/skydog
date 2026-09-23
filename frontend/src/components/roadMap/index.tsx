import React from "react";
import HeroSection from "./heroSection";

import SkyWorkSection from "./skyWorkSection";
import RoadMapSection from "./roadMapSection";
import VisionSection from "./visionSection";

const RoadMap = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <RoadMapSection />
      <VisionSection />

      <SkyWorkSection />
    </div>
  );
};

export default RoadMap;
