import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-e89bd6afaa57486f878db575d6064e3e.r2.dev",
      },
    ],
  },
};

export default nextConfig;