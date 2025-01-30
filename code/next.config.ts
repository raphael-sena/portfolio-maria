import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? '/code' : '',
  assetPrefix: "/code",
  trailingSlash: true,
};

export default nextConfig;
