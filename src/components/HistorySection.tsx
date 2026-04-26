const histories = [
  ["2018/10", "ITパスポートを取得し、資格デビュー。"],
  ["2020/01", "電気通信主任技術者攻略資料作成をきっかけに資格コンサル（）を始める。"],
  ["2022/10", "一陸技ゆるふわ解説を投稿、Googleドライブ上で資料公開"],
  ["2023/02", "電験三種攻略解説-前編-を作成。前編で力尽きる。"],
  ["2024/04", "魂のネットワークスペシャリスト（暗記資料）作成"],
  ["2024/05", "基本情報技術者試験集中講座（対面１５時間）開講、間宮塾設立"],
  ["2024/08", "応用情報技術者リモート講義＆グループワーク開講"],
  ["2024/11", "第一級陸上無線技術士　対面講義＆資料作成＆動画講義"],
  ["2025/04", "ネットワークスペシャリスト直前詰め込み資料＜復讐ノート＞全85ページ作成"],
  ["2025/05", "第一級陸上無線技術士資料大幅刷新"],
  ["2025/10", "第一級陸上無線技術士　2期生指導"],
  ["2026/01", "基本情報技術者試験集中講座　2期開講"],
  ["2026/03", "基本情報技術者＆ネスペ資料　アプリ化"],
  ["2026/04", "間宮塾を第４術科協会に改名、資料格納サイトリニューアル"],
];

export function HistorySection() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-ink">沿革</h2>
        <ol className="mt-6 space-y-2 text-[10px] leading-5 text-muted sm:text-[11px]">
          {histories.map(([date, text]) => (
            <li key={`${date}-${text}`} className="grid gap-1 border-b border-line/60 pb-2 last:border-b-0 sm:grid-cols-[5.5rem_1fr]">
              <time className="font-semibold text-ink">{date}</time>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
