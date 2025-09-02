import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**', // Adjust this if you want a more specific path
      },
    ],
  },
};

export default nextConfig;
