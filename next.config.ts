import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/design-workflow",
        destination: "/ai-workflow",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
