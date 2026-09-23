import ContactUs from "@/components/contactUs";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),
  title: "Contact SkyDog | Web3 Community & Partnership Inquiries",
  description:
    "Get in touch with the SkyDog team for strategic partnerships, press inquiries, community support, and ecosystem collaborations.",
  keywords: [
    "Contact SkyDog",
    "SkyDog Support",
    "SkyDog Partnership",
    "Web3 Inquiries",
  ],
  alternates: {
    canonical: "https://skydogsocial.com/contact-us",
  },
  openGraph: {
    title: "Contact SkyDog | Web3 Community & Partnership Inquiries",
    description:
      "Get in touch with the SkyDog team for strategic partnerships, press inquiries, community support, and ecosystem collaborations.",
    url: "https://skydogsocial.com/contact-us",
    siteName: "SkyDog",
    images: [
      {
        url: "https://skydogsocial.com/assets/meta/preview.png",
        width: 1200,
        height: 630,
        alt: "Contact SkyDog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SkyDog | Web3 Community & Partnership Inquiries",
    description:
      "Get in touch with the SkyDog team for strategic partnerships, press inquiries, community support, and ecosystem collaborations.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
  },
};

const ContactUsPage = () => {
  return (
    <div>
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;
