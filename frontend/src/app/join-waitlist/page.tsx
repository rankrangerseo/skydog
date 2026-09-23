import JoinWaitList from "@/components/joinWaitList";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),
  title: "Join Whitelist & Early Mint Access | SkyDog NFT Drop",
  description:
    "Register for early whitelist access and guaranteed minting allocation for the upcoming SkyDog 4444 elite NFT character release.",
  keywords: [
    "SkyDog Whitelist",
    "SkyDog Mint",
    "NFT Pre-Sale",
    "Join Waitlist",
    "Web3 Minting",
  ],
  alternates: {
    canonical: "https://skydogsocial.com/join-waitlist",
  },
  openGraph: {
    title: "Join Whitelist & Early Mint Access | SkyDog NFT Drop",
    description:
      "Register for early whitelist access and guaranteed minting allocation for the upcoming SkyDog 4444 elite NFT character release.",
    url: "https://skydogsocial.com/join-waitlist",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyDog Whitelist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Whitelist & Early Mint Access | SkyDog NFT Drop",
    description:
      "Register for early whitelist access and guaranteed minting allocation for the upcoming SkyDog 4444 elite NFT character release.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};

const JoinWaitListPage = () => {
  return (
    <div>
      <JoinWaitList />
    </div>
  );
};

export default JoinWaitListPage;
