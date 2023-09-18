/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
};

module.exports = {
  nextConfig,
  target: 'serverless', // add this line
};
