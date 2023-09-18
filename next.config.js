/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
};

module.exports = {
  nextConfig,
  output: 'serverless', // add this line
};
