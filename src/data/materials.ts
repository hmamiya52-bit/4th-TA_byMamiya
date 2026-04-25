export type MaterialType = "PowerPoint" | "PDF" | "Webアプリ" | "動画";

export type Material = {
  title: string;
  exam: string;
  type: MaterialType;
  description: string;
  url: string;
};

export const materials: Material[] = [
  {
    title: "第一級陸上無線技術士 パワーポイント資料",
    exam: "第一級陸上無線技術士",
    type: "PowerPoint",
    description: "第一級陸上無線技術士の学習に使える講義スライド資料です。",
    url: "https://example.com/radio-engineer-1st-slides",
  },
  {
    title: "基本情報技術者試験 午後問題サンプル問題集",
    exam: "基本情報技術者試験",
    type: "PDF",
    description: "午後問題対策のサンプル問題集です。",
    url: "https://example.com/fe-afternoon-sample.pdf",
  },
  {
    title: "基本情報技術者試験 午後問題学習アプリ",
    exam: "基本情報技術者試験",
    type: "Webアプリ",
    description: "午後問題をブラウザで学習できるWebアプリです。",
    url: "https://fe-learning-app.vercel.app/",
  },
  {
    title: "基本情報技術者試験 アルゴリズム解説パワーポイント資料",
    exam: "基本情報技術者試験",
    type: "PowerPoint",
    description: "アルゴリズム分野をわかりやすく解説したスライド資料です。",
    url: "https://example.com/fe-algorithm-slides",
  },
  {
    title: "応用情報技術者試験 勉強論解説動画",
    exam: "応用情報技術者試験",
    type: "動画",
    description: "応用情報技術者試験の勉強方法を解説した動画です。",
    url: "https://example.com/ap-study-method-video",
  },
  {
    title: "ネットワークスペシャリスト 学習アプリ",
    exam: "ネットワークスペシャリスト",
    type: "Webアプリ",
    description: "ネットワークスペシャリスト対策用の学習Webアプリです。",
    url: "https://mamiya-nwapp.vercel.app/",
  },
];

export const exams = Array.from(new Set(materials.map((material) => material.exam)));