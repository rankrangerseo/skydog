import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.pixabay.com",
      "thumbor.forbes.com",
      "website-backend.skydogsocial.com",
    ],
  },
};

export default nextConfig;
