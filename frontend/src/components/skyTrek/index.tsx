import React from 'react'
import HeroSection from './heroSection';
import EarnSection from './earnSection';
import GalaxySection from './galaxySection';
import LeaderboardSection from './leaderboardSection';
import SkyTrekSection from './skyTrekSection';
import TokensSection from './tokensSection';

const SkyTrek = () => {
  return (
    <div className='overflow-hidden'>
        <HeroSection />
        <EarnSection />
        <GalaxySection />
        <LeaderboardSection />
        <SkyTrekSection />
        <TokensSection />
    </div>
  )
}

export default SkyTrek;