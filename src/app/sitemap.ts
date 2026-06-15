import type { MetadataRoute } from "next";

/**
 * sitemap.xml（動的生成）。
 * 全公開ルートを列挙する。/works は /services へ恒久リダイレクトするため除外。
 */
const siteUrl = "https://www.bluemonk.co.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    "/about",
    "/philosophy",
    "/insights",
    "/contact",
    "/services",
    "/services/consulting",
    "/services/development",
    "/services/training",
    "/services/training/chatgpt",
    "/legal/privacy",
    "/legal/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
