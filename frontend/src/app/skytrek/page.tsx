import { GameSchema } from "@/components/seo/JsonLd";
import SkyTrek from '@/components/skyTrek'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),

  title: "SkyTrek | Play-to-Earn Web3 Space Adventure Game",

  description:
    "Play SkyTrek, the ultimate Web3 space adventure game. Dodge obstacles, earn SKY Tokens, unlock play-to-earn rewards, and compete for the top leaderboard with your SkyDog NFT.",

  keywords: [
    "SkyTrek",
    "Web3 Space Game",
    "Play-to-Earn Space Adventure",
    "P2E Blockchain Gaming",
    "NFT Space Simulator",
    "SkyDog Arcade",
  ],

  alternates: {
    canonical: "https://skydogsocial.com/skytrek",
  },

  robots: {
    index: true,
    follow: true,
  },

  // Social sharing (Facebook, LinkedIn, Discord)
  openGraph: {
    title: "SkyTrek | Play-to-Earn Web3 Space Adventure Game",
    description:
      "Play SkyTrek, the ultimate Web3 space adventure game. Dodge obstacles, earn SKY Tokens, unlock play-to-earn rewards, and compete for the top leaderboard with your SkyDog NFT.",
    url: "https://skydogsocial.com/skytrek",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyTrek",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "SkyTrek | Play-to-Earn Web3 Space Adventure Game",
    description:
      "Play SkyTrek, the ultimate Web3 space adventure game. Dodge obstacles, earn SKY Tokens, unlock play-to-earn rewards, and compete for the top leaderboard with your SkyDog NFT.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};
const SkyTrekPage = () => {
  return (
    <div>
      <GameSchema />
      <SkyTrek />
    </div>
  )
}

export default SkyTrekPage
