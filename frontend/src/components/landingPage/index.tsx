import React from 'react'

import NftCollection from './nftCollection'
import SkyTrekSection from './skyTrekSection'
import SkyUtilitySection from './skyUtilitySection'
import SurvivalSection from './survivalSection'
import HeroSection from './heroSection'
import SpaceSection from './spaceSection'
import GearSection from './gearSection'
import RoadMapSection from './roadMapSection'
import FaqSection from './faqSection'

const LandingPage = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <SurvivalSection />
      <SpaceSection />
      <GearSection />
      <NftCollection />
      <SkyTrekSection />
      <SkyUtilitySection />
      <RoadMapSection />
      <FaqSection />
    </div>
  )
}

export default LandingPage
