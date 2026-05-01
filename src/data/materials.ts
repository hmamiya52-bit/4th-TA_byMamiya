export type MaterialType = "スライド" | "PDF" | "Webアプリ" | "動画" | "申請フォーム" | "アンケート";

export type Material = {
  title: string;
  exam: string;
  type: MaterialType;
  description: string;
  url: string;
  thumbnail?: string;
  recommended?: boolean;
};

export const materials: Material[] = [
  {
    title: "一陸技対策会　講義資料",
    exam: "第一級陸上無線技術士",
    type: "スライド",
    description: "世界一わかりやすい陸技解説を目指して作ったスライド資料です。",
    url: "https://drive.google.com/file/d/1izRxmQrww_Or2b2lI4_jypyk-RG8azzT/view?usp=drive_link",
    thumbnail: "/materials/radio-engineer-slides.png",
  },
  {
    title: "法規　超直前対策プリント",
    exam: "第一級陸上無線技術士",
    type: "PDF",
    description: "試験前日～当日から法規の勉強を始める人向けの資料です。",
    url: "https://drive.google.com/file/d/1yCJpU5fCCFQBIDzGo6itNGcZ3PsWQm2B/view?usp=drive_link",
    thumbnail: "/materials/radio-law-print.png",
  },
  {
    title: "一陸技対策会　ドキュメント詰め合わせ",
    exam: "第一級陸上無線技術士",
    type: "PDF",
    description: "陸技の暗記シートとか指南書とか問題解説とかスライド以外の資料諸々。",
    url: "https://drive.google.com/file/d/1kryjdS2uZ4jP09EnLIRpdAYXDC50o_4O/view?usp=drive_link",
    thumbnail: "/materials/radio-documents-pack.png",
  },
  {
    title: "アルゴリズム攻略　講義資料",
    exam: "基本情報技術者試験",
    type: "スライド",
    description:
      "アルゴリズム分野をわかりやすく解説したスライド資料です。現在、アルゴリズム以外の分野は非公開にしています。",
    url: "https://drive.google.com/file/d/1J_WomAHSUIdguFPAhexk2l78ItZJ-kIT/view?usp=drive_link",
    thumbnail: "/materials/fe-algorithm-slides.png",
  },
  {
    title: "アルゴリズム強化訓練アプリ",
    exam: "基本情報技術者試験",
    type: "Webアプリ",
    description: "午後問題をブラウザで学習できるWebアプリです。",
    url: "https://fe-learning-app.vercel.app/",
    thumbnail: "/materials/fe-training-app.png",
    recommended: true,
  },
  {
    title: "科目Ｂ公式サンプル問題集",
    exam: "基本情報技術者試験",
    type: "PDF",
    description: "IPAが公式で出しているサンプル問題を切り貼りした問題集です。",
    url: "https://drive.google.com/file/d/1qrT_TOjSMU6lFC6u3WnAyr-XHySZPFhs/view?usp=drive_link",
    thumbnail: "/materials/fe-sample-problems.png",
  },
  {
    title: "アカウント登録",
    exam: "ネットワークスペシャリスト",
    type: "申請フォーム",
    description:
      "ネットワークスペシャリスト学習アプリを使用する方は、まずはこちらで登録申請をしてください。１分以内に登録でき、アカウントは即時に払い出されます。",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfRHSGpnpWnyhpl5dxfdmkxix7ro_PrEiHaYwMJdWYa6Gmtfw/viewform?usp=publish-editor",
  },
  {
    title: "ネットワークスペシャリスト 学習アプリ",
    exam: "ネットワークスペシャリスト",
    type: "Webアプリ",
    description:
      "ネットワークスペシャリスト午後試験対策用の学習Webアプリです。午後試験突破に必要な基礎知識の暗記や、午後問題演習の学習計画をサポートします。午後試験の過去問の解答欄・解答例も一元化しています。ブラウザ版だと表示が崩れることがあるので、アプリインストール推奨です。現在の最新バージョンはv1.1.0です。",
    url: "https://mamiya-nwapp.vercel.app/",
    thumbnail: "/materials/nw-learning-app.png",
    recommended: true,
  },
  {
    title: "アンケート",
    exam: "ネットワークスペシャリスト",
    type: "アンケート",
    description: "ネットワークスペシャリスト学習アプリに関するアンケートです。利用後の感想や改善点を入力してください。",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdzK8LtbhVQtL6LuETnUuF7VjU2dBW2pu0lwdEzKy0Uc0alXw/viewform?usp=dialog",
  },
  {
    title: "午前試験対策　動画",
    exam: "応用情報技術者試験",
    type: "動画",
    description:
      "作成者が、「IT全然分からん」と言っている時代に作ったので、説明力が雑魚なので大目に見てください。今も分かりませんが。J官時代に作成した動画なので、所々にJ用語が出ますが、まぁ気にしないでください。",
    url: "https://drive.google.com/file/d/1h-Bxzcyyt3_3CdfxxSO3TIU0YeqOEZS-/view?usp=drive_link",
    thumbnail: "/materials/ap-morning-video.png",
  },
  {
    title: "R6春セキュリティ午後解説（前半）",
    exam: "応用情報技術者試験",
    type: "動画",
    description: "午後問題の基本的な解き方を一緒に学んでいこうぜ的なノリの動画の前半です。滑舌が悪い。",
    url: "https://drive.google.com/file/d/1UsGhVkLTxE9F9_lkYV7US1Vw6UBv3cwd/view?usp=drive_link",
    thumbnail: "/materials/ap-2.png",
  },
  {
    title: "R6春セキュリティ午後解説（後半）",
    exam: "応用情報技術者試験",
    type: "動画",
    description: "前半の動画から見てください。最後のアンケートは無視してください。",
    url: "https://drive.google.com/file/d/1UNl9JqJy1Xi8PbUdF-GQS5QPTQhySYiF/view?usp=drive_link",
    thumbnail: "/materials/ap-3.png",
  },
];

export const exams = Array.from(new Set(materials.map((material) => material.exam)));

export const examNotes: Record<string, string> = {
  第一級陸上無線技術士: "今も昔も変わらず無線屋最高峰資格。IT業界向けではない。",
  基本情報技術者試験: "科目B対策が中心です。科目Aについては、過去問道場（ネットで検索）を使用してください。",
  応用情報技術者試験: "午後試験対策講座は、ほぼ対面でしか実施していません。講義資料は非公開です。",
  ネットワークスペシャリスト: "アプリを使用する前に、アカウントの発行申請を行ってください。",
};
