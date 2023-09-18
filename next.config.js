/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  target: 'serverless',
};

module.exports = nextConfig;
