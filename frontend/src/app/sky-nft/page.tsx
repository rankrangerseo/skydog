import SkyNft from '@/components/skyNft'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),

  title: "Sky NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem",

  description:
    "Discover Sky NFT by SkyDog and unlock SkyTrek, earn SKY Tokens, enjoy play-to-earn rewards, NFT utility, governance, and exclusive holder perks.",

  keywords: [
    "Sky NFT",
  ],

  alternates: {
    canonical: "/sky-nft",
  },

  robots: {
    index: true,
    follow: true,
  },

  // Social sharing (Facebook, LinkedIn, Discord)
  openGraph: {
    title: "Sky NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem",
    description:
      "Discover Sky NFT by SkyDog and unlock SkyTrek, earn SKY Tokens, enjoy play-to-earn rewards, NFT utility, governance, and exclusive holder perks.",
    url: "https://skydogsocial.com/sky-nft",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "Sky NFT",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Sky NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem",
    description:
      "Discover Sky NFT by SkyDog and unlock SkyTrek, earn SKY Tokens, enjoy play-to-earn rewards, NFT utility, governance, and exclusive holder perks.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};
const SkyNftPage = () => {
  return (
    <div>
        <SkyNft />
    </div>
  )
}

export default SkyNftPage
