import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // 公開ドメインが決まったら下記を有効化してください
  // metadataBase: new URL("https://neumann.example.com"),
  title: "NeuMann.LLC｜見えない不安を、動ける仕組みに変える",
  description:
    "NeuMann.LLCは、地域見守り・防災・リスク査定・脱炭素支援のためのAIプロダクトを開発するスタートアップです。AI×地方で、見えない不安を、動ける仕組みに変えます。",
  keywords: [
    "NeuMann",
    "GovTech",
    "LocalTech",
    "AI",
    "地方",
    "防災",
    "地域見守り",
    "リスク査定",
    "脱炭素",
    "見守りくん",
    "RiskFix",
  ],
  authors: [{ name: "NeuMann.LLC" }],
  openGraph: {
    title: "NeuMann.LLC｜見えない不安を、動ける仕組みに変える",
    description:
      "地域見守り・防災・リスク査定・脱炭素支援のためのAIプロダクトを開発。AI×地方で、見えない不安を、動ける仕組みに変えます。",
    type: "website",
    locale: "ja_JP",
    siteName: "NeuMann.LLC",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* JS無効環境でもコンテンツが見えるようにする */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
