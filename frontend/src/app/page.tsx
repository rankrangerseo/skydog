import LandingPage from "@/components/landingPage";
import { FaqSchema } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),

  title: "SkyDog NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem",

  description:
    "SkyDog NFT is a Web3 IP building the future of blue-chip NFTs with immersive storytelling, play-to-earn gaming, and a thriving community-driven ecosystem.",

  keywords: [
    "SkyDog NFT",
    "Blue-Chip NFTs",
    "Web3 Gaming",
    "NFT Gaming",
    "Play-to-Earn",
    "P2E",
    "Web3 Ecosystem",
    "NFT Community",
    "Blockchain Gaming",
    "Digital Collectibles",
  ],

  alternates: {
    canonical: "https://skydogsocial.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SkyDog NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem",
    description:
      "SkyDog NFT is a Web3 IP building the future of blue-chip NFTs with immersive storytelling, play-to-earn gaming, and a thriving community-driven ecosystem.",
    url: "https://skydogsocial.com",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyDog NFT Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SkyDog NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem",
    description:
      "SkyDog NFT is a Web3 IP building the future of blue-chip NFTs with immersive storytelling, play-to-earn gaming, and a thriving community-driven ecosystem.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};

export default function MyApp() {
  return (
    <>
      <FaqSchema />
      <LandingPage />
    </>
  );
}
