import React from 'react'
import HeroSection from './heroSection';
import PratnerSection from './pratnerSection';
import EcosystemSection from './ecosystemSection';
import SkyWorkSection from './skyWorkSection';

const Team = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <PratnerSection />
      <EcosystemSection />
      <SkyWorkSection />
    </div>
  );
}

export default Team
