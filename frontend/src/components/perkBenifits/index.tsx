import React from 'react'
import HeroSection from './heroSection';
import NftSection from './nftSection';
import SkyBenefitsSection from './skyBenefitsSection';
import HoldersSection from './holdersSection';
import RewardsSection from './rewardsSection';
import SkyWorkSection from './skyWorkSection';

const PerkBenifits = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <NftSection />
      <SkyBenefitsSection />
      <HoldersSection />
      <RewardsSection />
      <SkyWorkSection />
    </div>
  );
}

export default PerkBenifits