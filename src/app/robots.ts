import type { MetadataRoute } from "next";

/**
 * robots.txt（動的生成）。
 * 本番（Vercel production）のみ全許可 + sitemap 参照。
 * プレビュー／開発環境はクロール拒否してインデックス汚染を防ぐ。
 */
const isProduction = process.env.VERCEL_ENV === "production";
const siteUrl = "https://www.bluemonk.co.jp";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
