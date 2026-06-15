import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "BLUE MONK CONSULTING | 人とAIと共に進化する企業へ",
  description:
    "人とAIと共に進化する企業へ。共創が生み出す変革と未来。経営者×ITエンジニア×MBAの視点で、研修・コンサルティング・開発支援を通じて企業のAI活用を支えます。",
  keywords: ["AI活用", "DX", "生成AI研修", "コンサルティング", "Bluemonky", "共創"],
  authors: [{ name: "BLUE MONK CONSULTING" }],
  openGraph: {
    title: "BLUE MONK CONSULTING | 人とAIと共に進化する企業へ",
    description: "共創が生み出す変革と未来。人とAIと共に進化する企業へ。",
    type: "website",
    locale: "ja_JP",
  },
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
