import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Removed problematic outputFileTracingRoot that pointed to non-existent parent directory
  typescript: {
    // Consider setting this to false in production to catch type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Consider setting this to false in production to catch linting errors
    ignoreDuringBuilds: true,
  },
  // Turbopack config only applies to dev mode, safe to keep
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
// Orchids restart: 1760678954660
