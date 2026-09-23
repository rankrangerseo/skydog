import PerkBenifits from "@/components/perkBenifits";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),
  title: "Perks & Holder Benefits | SkyDog NFT Ecosystem",
  description:
    "Explore exclusive benefits for SkyDog NFT holders, including staking yield, VIP community access, game passes, and ecosystem governance privileges.",
  keywords: [
    "SkyDog Perks",
    "NFT Holder Benefits",
    "Web3 Rewards",
    "SkyDog Staking",
    "NFT Utility",
  ],
  alternates: {
    canonical: "https://skydogsocial.com/perks-&-benefits",
  },
  openGraph: {
    title: "Perks & Holder Benefits | SkyDog NFT Ecosystem",
    description:
      "Explore exclusive benefits for SkyDog NFT holders, including staking yield, VIP community access, game passes, and ecosystem governance privileges.",
    url: "https://skydogsocial.com/perks-&-benefits",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyDog Perks and Benefits",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perks & Holder Benefits | SkyDog NFT Ecosystem",
    description:
      "Explore exclusive benefits for SkyDog NFT holders, including staking yield, VIP community access, game passes, and ecosystem governance privileges.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};

const PerkBenifitsPage = () => {
  return (
    <div>
      <PerkBenifits />
    </div>
  );
};

export default PerkBenifitsPage;
