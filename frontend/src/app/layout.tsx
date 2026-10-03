import type { Metadata } from "next";
import Script from "next/script";
import { Quicksand } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrganizationSchema } from "@/components/seo/JsonLd";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skydogsocial.com"),
  title: {
    default: "SkyDog NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem",
    template: "%s | SkyDog",
  },
  description:
    "SkyDog is a Web3 IP building the future of blue-chip NFTs with immersive storytelling, play-to-earn gaming, and a thriving community-driven ecosystem.",
  keywords: [
    "SkyDog NFT",
    "Blue-Chip NFTs",
    "Web3 Gaming",
    "NFT Collection",
    "Play-to-Earn",
    "P2E Gaming",
    "Metaverse",
    "Blockchain Gaming",
    "SkyTrek",
    "SKY Token",
    "Digital Collectibles",
  ],
  authors: [{ name: "SkyDog Team", url: "https://skydogsocial.com" }],
  creator: "SkyDog",
  publisher: "SkyDog",
  alternates: {
    canonical: "https://skydogsocial.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SkyDog NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem",
    description:
      "SkyDog is a Web3 IP building the future of blue-chip NFTs with immersive storytelling, play-to-earn gaming, and a thriving community-driven ecosystem.",
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
      "SkyDog is a Web3 IP building the future of blue-chip NFTs with immersive storytelling, play-to-earn gaming, and a thriving community-driven ecosystem.",
    images: ["https://skydogsocial.com/assets/meta/preview.png"],
    creator: "@SkyDogSocialNFT",
    site: "@SkyDogSocialNFT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.variable}>
        <OrganizationSchema />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5L5V6KRL');
          `}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5L5V6KRL"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <Header />
        <div className="flex flex-col min-h-screen min-w-full">{children}</div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Footer />
      </body>
    </html>
  );
}
