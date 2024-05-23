/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  target: "serverless",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
