import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 本番（Vercel production）のみ index を許可。プレビュー／開発は noindex。
const isProduction = process.env.VERCEL_ENV === "production";
const siteUrl = "https://www.bluemonk.co.jp";

// 日本語の見出し明朝・本文サンセは system フォントを使用（globals.css の
// --font-serif / --font-sans 参照）。Google Fonts のビルド時フェッチ依存を避け、
// 環境差・オフラインビルドでも安定させる方針（site-design の「重ければ system serif で可」）。
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased circuit-bg`}
      >
        {children}
      </body>
    </html>
  );
}
