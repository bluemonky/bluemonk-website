import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // public/images 配下の本番画像は内容が安定しているため、長期 immutable キャッシュを付与。
        // 画像差し替え時はファイル名（パス）を変えて新URLにする運用とする。
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
