/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false, // Enable image optimization
    domains: [], // Remove localhost domains
    remotePatterns: [], // Remove localhost patterns
  },
}

module.exports = nextConfig
