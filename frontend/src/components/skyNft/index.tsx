import React from 'react'
import HeroSection from './heroSection';
import NftSection from './nftSection';
import SkyTraitsSection from './skyTraitsSection';
import NftTicketSection from './nftTicketSection';

import RewardsSection from './rewardsSection';
import RoadMapSection from '../landingPage/roadMapSection';

const SkyNft = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <NftSection />
      <SkyTraitsSection />
      <NftTicketSection />
      <RoadMapSection />
      <RewardsSection />
    </div>
  );
}

export default SkyNft
