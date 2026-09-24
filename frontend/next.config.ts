import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "thumbor.forbes.com" },
      { protocol: "https", hostname: "website-backend.skydogsocial.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/perks-&-benefits",
        destination: "/perks-and-benefits",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
