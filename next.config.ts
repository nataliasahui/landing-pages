import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
      basePath,
      assetPrefix: basePath || undefined,
    }
  : {
      output: "standalone",
    };

export default nextConfig;
