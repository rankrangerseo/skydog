import Team from "@/components/team";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),
  title: "Core Team & Strategic Partners | SkyDog Web3 Ecosystem",
  description:
    "Meet the visionary builders, blockchain engineers, and gaming partners driving the SkyDog Web3 IP and SkyTrek play-to-earn ecosystem.",
  keywords: [
    "SkyDog Team",
    "SkyDog Founders",
    "Web3 Builders",
    "SkyDog Partners",
    "Blockchain Developers",
  ],
  alternates: {
    canonical: "https://skydogsocial.com/teams",
  },
  openGraph: {
    title: "Core Team & Strategic Partners | SkyDog Web3 Ecosystem",
    description:
      "Meet the visionary builders, blockchain engineers, and gaming partners driving the SkyDog Web3 IP and SkyTrek play-to-earn ecosystem.",
    url: "https://skydogsocial.com/teams",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyDog Core Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Team & Strategic Partners | SkyDog Web3 Ecosystem",
    description:
      "Meet the visionary builders, blockchain engineers, and gaming partners driving the SkyDog Web3 IP and SkyTrek play-to-earn ecosystem.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};

const TeamPage = () => {
  return (
    <div>
      <Team />
    </div>
  );
};

export default TeamPage;
