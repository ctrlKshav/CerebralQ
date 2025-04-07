import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },

    ],
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/blog",
          destination: "https://wp.cerebralquotient.com/:slug*/"
        },
        {
          source: "/blog/:slug*",
          destination: "https://wp.cerebralquotient.com/:slug*/"
        }
      ]
    }

  }
}

export default nextConfig;
