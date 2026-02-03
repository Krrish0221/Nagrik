import type { NextConfig } from "next";

const nextConfig: any = {
  /* config options here */
  productionBrowserSourceMaps: false,
  output: 'standalone',
  serverExternalPackages: ['pdf-parse'],
  experimental: {
    // optimizePackageImports: ['iconoir-react'],
  },
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
      '**/*.map',
      'node_modules/pdf-parse/test/**/*',
    ],
    '/api/upload': [
      'node_modules/@next/**/*',
      'node_modules/next/**/*',
      'node_modules/react/**/*',
      'node_modules/react-dom/**/*',
      'node_modules/lodash/**/*',
      'node_modules/caniuse-lite/**/*',
    ],
  },
  async rewrites() {
    const pythonBackend = process.env.PYTHON_BACKEND_URL || 'http://127.0.0.1:5000';
    return [
      {
        source: '/api/Flask_APP/:path*',
        destination: 'https://avinash159-159-nagrik-backend.hf.space/:path*',
      },
    ];
  },
};

export default nextConfig;
