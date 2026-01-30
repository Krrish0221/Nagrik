import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
