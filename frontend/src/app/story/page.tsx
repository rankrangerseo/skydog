import StorySection from "@/components/storySection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),
  title: "The Lore & Universe Story | SkyDog Galactic Journey",
  description:
    "In the year 4444, the human race flees deep space. Follow SkyDog and his fleet of 4,444 warriors navigating cosmic challenges to find a new home.",
  keywords: [
    "SkyDog Lore",
    "SkyDog Story",
    "Web3 Sci-Fi",
    "NFT Storytelling",
    "SkyDog Universe",
  ],
  alternates: {
    canonical: "https://skydogsocial.com/story",
  },
  openGraph: {
    title: "The Lore & Universe Story | SkyDog Galactic Journey",
    description:
      "In the year 4444, the human race flees deep space. Follow SkyDog and his fleet of 4,444 warriors navigating cosmic challenges to find a new home.",
    url: "https://skydogsocial.com/story",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyDog Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lore & Universe Story | SkyDog Galactic Journey",
    description:
      "In the year 4444, the human race flees deep space. Follow SkyDog and his fleet of 4,444 warriors navigating cosmic challenges to find a new home.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};

const StoryPage = () => {
  return (
    <div>
      <StorySection />
    </div>
  );
};

export default StoryPage;
