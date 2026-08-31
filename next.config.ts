import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend-dev.smartwash.mtjrsahl-ksa.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
