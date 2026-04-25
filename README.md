# 4th-TA_byMamiya

資格学習に使える無料教材をまとめて紹介する、Next.js + TypeScript + Tailwind CSS 製の静的サイトです。

トップページ `/` のみで完結し、教材カードから外部URLを新しいタブで開けます。Vercel の GitHub 連携でそのままデプロイできる構成です。

## ローカル起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

## ビルド

```bash
npm run build
```

トップページは静的にプリレンダーされます。Vercel では Framework Preset を `Next.js` にして、出力先はデフォルト設定のままにします。

## 教材URLの差し替え方法

教材データは `src/data/materials.ts` にまとめています。

仮URLを差し替える場合は、対象教材の `url` を実際のURLに変更してください。タイトル、説明、試験区分、種別も同じファイルで編集できます。

```ts
{
  title: "基本情報技術者試験 午後問題サンプル問題集",
  exam: "基本情報技術者試験",
  type: "PDF",
  description: "午後問題対策のサンプル問題集です。",
  url: "https://example.com/fe-afternoon-sample.pdf",
}
```

## GitHubからVercelにデプロイする手順

1. Vercel にログインします。
2. Dashboard の `Add New...` から `Project` を選びます。
3. GitHub 連携で `hmamiya52-bit/4th-TA_byMamiya` を選択します。
4. Framework Preset が `Next.js` になっていることを確認します。
5. Build Command は `npm run build`、Output Directory は未設定のままにします。
6. `Deploy` を押すと公開されます。

教材URLを更新したい場合は、GitHub上で `src/data/materials.ts` を編集してコミットすると、Vercel が自動で再デプロイします。
