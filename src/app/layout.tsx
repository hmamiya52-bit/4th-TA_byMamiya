import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "第４術科協会（旧間宮塾） | 資格試験対策のオリジナル教材",
  description:
    "資格試験の学習を支援するために作成したオリジナル教材を公開しています。資料、問題集、学習アプリ、動画を資格ごとにまとめています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
