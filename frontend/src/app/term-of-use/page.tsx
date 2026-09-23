import TermOfUse from "@/components/termOfUse";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),
  title: "Terms of Use | SkyDog Social Web3 Platform",
  description:
    "Review the terms and conditions for utilizing SkyDog digital collectibles, game utilities, and smart contract transactions.",
  alternates: {
    canonical: "https://skydogsocial.com/term-of-use",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Use | SkyDog Social Web3 Platform",
    description:
      "Review the terms and conditions for utilizing SkyDog digital collectibles, game utilities, and smart contract transactions.",
    url: "https://skydogsocial.com/term-of-use",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyDog Terms of Use",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | SkyDog Social Web3 Platform",
    description:
      "Review the terms and conditions for utilizing SkyDog digital collectibles, game utilities, and smart contract transactions.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};

const TermOfUsePage = () => {
  return (
    <>
      <TermOfUse />
    </>
  );
};

export default TermOfUsePage;
