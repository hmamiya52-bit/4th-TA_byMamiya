import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "第４術科協会（旧間宮塾） | 資格学習の無料教材リンク集",
  description:
    "第一級陸上無線技術士、基本情報技術者試験、応用情報技術者試験、ネットワークスペシャリストの無料教材を整理した資格学習サイトです。",
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
