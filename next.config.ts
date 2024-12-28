import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
