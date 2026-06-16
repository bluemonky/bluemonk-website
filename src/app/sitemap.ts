import type { MetadataRoute } from "next";

/**
 * sitemap.xml（動的生成）。
 * 全公開ルートを列挙する。/works は /services へ恒久リダイレクトするため除外。
 *
 * lastModified はビルド時刻（new Date()）にすると、内容が変わっていなくても
 * デプロイのたびに更新日が動いてしまい、クローラに誤った「更新」を伝える。
 * 実際のコンテンツ更新日に紐づく固定値を使う（次の実質更新時に手で見直す）。
 */
const siteUrl = "https://www.bluemonk.co.jp";

// 直近でサイト内容を実質更新した日（docs/PROJECT-STATUS.md の最終更新日に対応）。
const lastContentUpdate = new Date("2026-06-16");

export default function sitemap(): MetadataRoute.Sitemap {
  // /services/development は /fde へ恒久リダイレクトのため除外。
  const routes = [
    "/",
    "/fde",
    "/about",
    "/philosophy",
    "/insights",
    "/contact",
    "/services",
    "/services/consulting",
    "/services/training",
    "/services/training/chatgpt",
    "/legal/privacy",
    "/legal/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: lastContentUpdate,
  }));
}
