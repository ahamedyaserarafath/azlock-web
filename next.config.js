/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/azlock-web',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
