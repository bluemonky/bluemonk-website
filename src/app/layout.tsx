import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// 本番（Vercel production）のみ index を許可。プレビュー／開発は noindex。
const isProduction = process.env.VERCEL_ENV === "production";
const siteUrl = "https://www.bluemonk.co.jp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 日本語の大見出し明朝（「発光する禅」の核）を Web フォント化。
// ビルド時に Google Fonts へフェッチする next/font/google は、Vercel ビルド環境で
// 取得が失敗するとデプロイごと失敗する不安定要因になり得るため、woff2 を
// リポジトリ同梱して next/font/local でセルフホストする（ビルド時の外部依存ゼロ）。
// weight 500/600（日本語サブセット）。display:'swap' で FOIT 回避。
// CSS 変数 --font-noto-serif-jp を globals.css の --font-serif 先頭に据える。
const notoSerifJp = localFont({
  src: [
    { path: "./fonts/noto-serif-jp-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/noto-serif-jp-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BLUE MONK CONSULTING | 人とAIと共に進化する企業へ",
    template: "%s | BLUE MONK CONSULTING",
  },
  description:
    "人とAIと共に進化する企業へ。共創が生み出す変革と未来。経営者×ITエンジニア×MBAの視点で、研修・コンサルティング・開発支援を通じて企業のAI活用を支えます。",
  keywords: ["AI活用", "DX", "生成AI研修", "コンサルティング", "Bluemonky", "共創"],
  authors: [{ name: "BLUE MONK CONSULTING" }],
  openGraph: {
    title: "BLUE MONK CONSULTING | 人とAIと共に進化する企業へ",
    description: "共創が生み出す変革と未来。人とAIと共に進化する企業へ。",
    type: "website",
    locale: "ja_JP",
    siteName: "BLUE MONK CONSULTING",
    url: siteUrl,
    images: [
      {
        url: "/images/ogp/og-default.png",
        width: 1200,
        height: 630,
        alt: "BLUE MONK CONSULTING",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLUE MONK CONSULTING | 人とAIと共に進化する企業へ",
    description: "共創が生み出す変革と未来。人とAIと共に進化する企業へ。",
    images: ["/images/ogp/og-default.png"],
  },
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#030b1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization 構造化データ（JSON-LD）。住所・電話は出さない。
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BLUE MONK CONSULTING",
    url: siteUrl,
    logo: `${siteUrl}/images/logo/bluemonk-mark.png`,
    description:
      "人とAIと共に進化する企業へ。経営者×ITエンジニア×MBAの視点で、研修・コンサルティング・開発支援を通じて企業のAI活用を支えます。",
    founder: {
      "@type": "Person",
      name: "青木紘史",
    },
  };

  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifJp.variable}`}
    >
      <body className="antialiased">
        {/* 二灯アンビエント（画面固定の光源層・装飾）: 寒色シアン＋暖色オレンジを
            全スクロール位置で本文背面に敷き、温度差で奥行きと差し色を全面へ届かせる。 */}
        <div aria-hidden className="bm-ambient pointer-events-none fixed inset-0 -z-10" />
        {/* 本文へスキップ（キーボード操作の a11y。#main の付与は本文側で行う前提） */}
        <a href="#main" className="skip-link">
          本文へスキップ
        </a>
        {/* JS 無効時はスクロール演出要素を常に表示（コンテンツが隠れないように） */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        {children}
        {/* Organization 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
