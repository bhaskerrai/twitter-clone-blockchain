/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'about.twitter.com',
      },
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
      },
    ],
    minimumCacheTTL:1500000,
  },
};

module.exports = nextConfig
