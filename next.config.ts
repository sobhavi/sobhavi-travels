import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/cancellation-policy',
        destination: '/cancellation-and-refund-policy',
        permanent: true,
      },
      {
        source: '/cancellation-refund-policy',
        destination: '/cancellation-and-refund-policy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
