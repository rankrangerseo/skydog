import PrivacyPolicy from "@/components/privacyPolicy";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),
  title: "Privacy Policy | SkyDog Social & Gaming Ecosystem",
  description:
    "Read the official privacy policy governing data handling, cookies, and decentralized wallet interactions across the SkyDog platform.",
  alternates: {
    canonical: "https://skydogsocial.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | SkyDog Social & Gaming Ecosystem",
    description:
      "Read the official privacy policy governing data handling, cookies, and decentralized wallet interactions across the SkyDog platform.",
    url: "https://skydogsocial.com/privacy-policy",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "SkyDog Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SkyDog Social & Gaming Ecosystem",
    description:
      "Read the official privacy policy governing data handling, cookies, and decentralized wallet interactions across the SkyDog platform.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
