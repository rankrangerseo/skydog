import SkyToken from '@/components/skytoken'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),

  title: "SKY Token | Play-to-Earn Web3 Gaming Rewards",

  description:
    "Earn SKY Token by playing SkyTrek. Stake tokens, unlock NFT rewards, vote on governance, trade digital assets, and power the SkyDog ecosystem.",

  keywords: [
    "SKY Token",
    "SkyDog Gaming Token",
    "Play-to-Earn Crypto",
    "Web3 Utility Token",
    "Crypto Staking Yield",
    "P2E Rewards Token",
    "SkyTrek Currency",
  ],

  alternates: {
    canonical: "https://skydogsocial.com/sky-token",
  },

  robots: {
    index: true,
    follow: true,
  },

  // Social sharing (Facebook, LinkedIn, Discord)
  openGraph: {
    title: "SKY Token | Play-to-Earn Web3 Gaming Rewards",
    description:
      "Earn SKY Token by playing SkyTrek. Stake tokens, unlock NFT rewards, vote on governance, trade digital assets, and power the SkyDog ecosystem.",
    url: "https://skydogsocial.com/sky-token",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SKY Token",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "SKY Token | Play-to-Earn Web3 Gaming Rewards",
    description:
      "Earn SKY Token by playing SkyTrek. Stake tokens, unlock NFT rewards, vote on governance, trade digital assets, and power the SkyDog ecosystem.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};
const  SkyTokenPage = () => {
  return (
    <div>
        <SkyToken />
    </div>
  )
}

export default  SkyTokenPage
