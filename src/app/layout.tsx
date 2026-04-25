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
  const themeScript = `
    (() => {
      try {
        const savedMode = window.localStorage.getItem("theme-mode");
        const mode = savedMode === "light" || savedMode === "dark" || savedMode === "system" ? savedMode : "system";
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.dataset.themeMode = mode;
        document.documentElement.dataset.theme = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
      } catch {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.dataset.themeMode = "system";
        document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
      }
    })();
  `;

  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
