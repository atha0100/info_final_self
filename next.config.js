/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    // These will be available in both client and server
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Property Management Dashboard',
  },
  images: {
    unoptimized: false, // Enable image optimization
    domains: ['vercel.app'], // Remove localhost domains
    remotePatterns: [], // Remove localhost patterns
  },
}

module.exports = nextConfig
