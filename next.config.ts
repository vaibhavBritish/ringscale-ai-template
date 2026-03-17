import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
        {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;