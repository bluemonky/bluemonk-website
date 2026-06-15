import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP } from "next/font/google";
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
// Noto Serif JP weight 500/600 を next/font/google でセルフホスト配信し、
// display:'swap' で FOIT を避ける。CSS 変数 --font-noto-serif-jp を
// globals.css の --font-serif 先頭に据え、全環境で見出しが明朝になるようにする。
// 既存 OS フォント（ヒラギノ明朝 等）はフォールバックとして温存。
const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  // 日本語グリフは subsets ではなく weight 指定でセルフホスト（latin も含む）。
  weight: ["500", "600"],
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
