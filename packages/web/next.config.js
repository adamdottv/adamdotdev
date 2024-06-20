/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  // images: {
  //   formats: ["image/avif", "image/webp"],
  //   remotePatterns: [{ hostname: process.env.CDN_DOMAIN }],
  // },
};

module.exports = nextConfig;
