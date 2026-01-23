import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLUE MONK CONSULTING | AI戦略顧問",
  description: "年商1億円を目指す、経営者・リーダーのためのAI戦略顧問。DX & AI Strategyで不確実性を論理で突破する。",
  keywords: ["AI戦略", "DX", "コンサルティング", "経営支援", "BLUE MONK"],
  authors: [{ name: "BLUE MONK CONSULTING" }],
  openGraph: {
    title: "BLUE MONK CONSULTING | AI戦略顧問",
    description: "年商1億円を目指す、経営者・リーダーのためのAI戦略顧問。",
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
