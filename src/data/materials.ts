export type MaterialType = "PowerPoint" | "PDF" | "Webアプリ" | "動画";

export type Material = {
  title: string;
  exam: string;
  type: MaterialType;
  description: string;
  url: string;
  recommended?: boolean;
};

export const materials: Material[] = [
  {
    title: "第一級陸上無線技術士 パワーポイント資料",
    exam: "第一級陸上無線技術士",
    type: "PowerPoint",
    description: "世界一わかりやすい陸技解説を目指して作ったスライド資料です。",
    url: "https://drive.google.com/file/d/1izRxmQrww_Or2b2lI4_jypyk-RG8azzT/view?usp=drive_link",
  },
  {
    title: "基本情報技術者試験 アルゴリズム解説パワーポイント資料",
    exam: "基本情報技術者試験",
    type: "PowerPoint",
    description:
      "アルゴリズム分野をわかりやすく解説したスライド資料です。現在、アルゴリズム以外の分野は非公開にしています。",
    url: "https://drive.google.com/file/d/1J_WomAHSUIdguFPAhexk2l78ItZJ-kIT/view?usp=drive_link",
  },
  {
    title: "基本情報技術者試験 午後問題学習アプリ",
    exam: "基本情報技術者試験",
    type: "Webアプリ",
    description: "午後問題をブラウザで学習できるWebアプリです。",
    url: "https://fe-learning-app.vercel.app/",
    recommended: true,
  },
  {
    title: "基本情報技術者試験 午後問題サンプル問題集",
    exam: "基本情報技術者試験",
    type: "PDF",
    description: "IPAが公式で出しているサンプル問題を切り貼りした問題集です。",
    url: "https://drive.google.com/file/d/1qrT_TOjSMU6lFC6u3WnAyr-XHySZPFhs/view?usp=drive_link",
  },
  {
    title: "応用情報技術者試験 勉強論解説動画",
    exam: "応用情報技術者試験",
    type: "動画",
    description:
      "作成者が、「IT全然分からん」と言っている時代に作ったので、説明力が雑魚なので大目に見てください。今も分かりませんが。",
    url: "https://drive.google.com/file/d/1h-Bxzcyyt3_3CdfxxSO3TIU0YeqOEZS-/view?usp=drive_link",
  },
  {
    title: "ネットワークスペシャリスト 学習アプリ",
    exam: "ネットワークスペシャリスト",
    type: "Webアプリ",
    description: "ネットワークスペシャリスト対策用の学習Webアプリです。",
    url: "https://mamiya-nwapp.vercel.app/",
    recommended: true,
  },
];

export const exams = Array.from(new Set(materials.map((material) => material.exam)));
