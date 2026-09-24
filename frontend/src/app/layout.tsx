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
  keywords:
    "SkyDog NFT, blue-chip NFTs, Web3 gaming, NFT collection, play-to-earn, metaverse, blockchain gaming",
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
