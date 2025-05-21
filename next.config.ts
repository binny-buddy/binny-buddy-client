import type { NextConfig } from 'next';

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: 'https://binny-buddy.cspc.me/:path*',
      },
    ];
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // 이미지 URL의 프로토콜 (https 또는 http)
        hostname: '*', // 이미지 도메인 (예: example.com)
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withPWA(nextConfig);
