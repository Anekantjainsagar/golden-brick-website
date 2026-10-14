/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['goldenbrick.biz'],
    unoptimized: true
  }
};

module.exports = nextConfig;
