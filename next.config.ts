import type { NextConfig } from "next";

const nextConfig: any = {
  /* config options here */
  productionBrowserSourceMaps: false,
  async rewrites() {
    return [
      {
        source: '/api/Flask_APP/chat',
        destination: 'http://127.0.0.1:5000/api/Flask_APP/chat',
      },
    ];
  },
};

export default nextConfig;
