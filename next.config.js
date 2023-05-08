/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/Resume",
      },
      {
        source: "/projects",
        destination: "/Projects",
      },
    ];
  },
};

module.exports = nextConfig;
