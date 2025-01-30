import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/portfolio-maria' : '',
  assetPrefix: "/portfolio-maria/",
  trailingSlash: true,
};

export default nextConfig;
