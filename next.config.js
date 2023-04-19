/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "viewport",
            value: "width=device-width, initial-scale=1",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
