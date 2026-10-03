import RoadMap from '@/components/roadMap'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),

  title: "SkyDog Roadmap | Web3 Gaming & NFT Development",

  description:
    "Explore the SkyDog roadmap featuring NFT development, SkyTrek updates, SKY Token, play-to-earn gaming, DAO governance, staking, and future Web3 growth.",

  keywords: [
    "SkyDog Roadmap",
    "Web3 Project Milestones",
    "NFT Development Roadmap",
    "SkyTrek Launch Phases",
    "SKY Token Distribution Schedule",
    "DAO Governance Timeline",
  ],

  alternates: {
    canonical: "https://skydogsocial.com/roadmap",
  },

  robots: {
    index: true,
    follow: true,
  },

  // Social sharing (Facebook, LinkedIn, Discord)
  openGraph: {
    title: "SkyDog Roadmap | Web3 Gaming & NFT Development",
    description:
      "Explore the SkyDog roadmap featuring NFT development, SkyTrek updates, SKY Token, play-to-earn gaming, DAO governance, staking, and future Web3 growth.",
    url: "https://skydogsocial.com/roadmap",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyDog Roadmap",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "SkyDog Roadmap | Web3 Gaming & NFT Development",
    description:
      "Explore the SkyDog roadmap featuring NFT development, SkyTrek updates, SKY Token, play-to-earn gaming, DAO governance, staking, and future Web3 growth.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};
const RoadMapPage = () => {
  return (
    <div>
      <RoadMap />
    </div>
  )
}

export default RoadMapPage
