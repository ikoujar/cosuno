/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['picsum.photos'],
  },
}

module.exports = nextConfig
