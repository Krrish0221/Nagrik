import type { NextConfig } from "next";

const nextConfig: any = {
  /* config options here */
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['iconoir-react'],
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/**/*',
        'node_modules/@esbuild/**/*',
        'node_modules/terser/**/*',
        'node_modules/webpack/**/*',
        'node_modules/eslint/**/*',
        'node_modules/typescript/**/*',
        'node_modules/iconoir-react/**/*',
        'node_modules/@types/**/*',
        'node_modules/sharp/**/*',
      ],
    },
  },
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
