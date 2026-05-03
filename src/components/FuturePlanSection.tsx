const ganttMonths = [
  { label: "2026/05", compactLabel: "26/05" },
  { label: "2026/06", compactLabel: "06" },
  { label: "2026/07", compactLabel: "07" },
  { label: "2026/08", compactLabel: "08" },
  { label: "2026/09", compactLabel: "09" },
  { label: "2026/10", compactLabel: "10" },
  { label: "2026/11", compactLabel: "11" },
  { label: "2026/12", compactLabel: "12" },
  { label: "2027/01", compactLabel: "27/01" },
  { label: "2027/02", compactLabel: "02" },
  { label: "2027/03", compactLabel: "03" },
  { label: "2027/04", compactLabel: "04" },
  { label: "2027/05", compactLabel: "05" },
];

const ganttHalves = ganttMonths.flatMap((month) => [`${month.label}-first`, `${month.label}-second`]);

type GanttHalfKey = (typeof ganttHalves)[number];

const ganttItems = [
  { title: "単年度計画", start: "2026/05-first", end: "2026/05-first" },
  { title: "家計簿管理アプリ改修", start: "2026/05-second", end: "2026/05-second" },
  {
    title: "プロフェッショナルデジタルスキル試験（PDS）対策アプリ:要件定義",
    start: "2026/06-first",
    end: "2026/06-second",
  },
  { title: "PDSアプリ用ノート作成（PM）", start: "2026/07-first", end: "2026/07-second" },
  { title: "PDSアプリ用ノート作成（ST）", start: "2026/08-first", end: "2026/08-first" },
  { title: "PDSアプリ基本設計", start: "2026/08-second", end: "2026/09-first" },
  { title: "PDSアプリ詳細設計", start: "2026/09-first", end: "2026/09-second" },
  { title: "PDSアプリ開発", start: "2026/09-second", end: "2027/03-first" },
  { title: "PDS（マネジメント）対策アプリテスト", start: "2027/02-first", end: "2027/04-second" },
  { title: "PDS（システム）用資料作成", start: "2027/04-first", end: "2027/05-second" },
] satisfies { title: string; start: GanttHalfKey; end: GanttHalfKey }[];

function getGridColumn(start: GanttHalfKey, end: GanttHalfKey) {
  const startIndex = ganttHalves.indexOf(start);
  const endIndex = ganttHalves.indexOf(end);

  return `${startIndex + 2} / ${endIndex + 3}`;
}

export function FuturePlanSection() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-brand">Roadmap</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">今後の予定</h2>
          </div>
          <p className="text-[10px] font-semibold leading-5 text-muted sm:text-[11px]">期間：2026/05～2027/05</p>
        </div>

        <details className="group rounded-lg border border-line bg-surface shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-bold text-ink">
            <span>計画</span>
            <span className="text-xs text-muted transition group-open:rotate-180" aria-hidden="true">
              ▼
            </span>
          </summary>

          <div className="border-t border-line p-3 sm:p-5">
            <div className="overflow-x-auto">
              <div className="min-w-[56rem] rounded-lg border border-line bg-paper">
                <div className="grid grid-cols-[12rem_repeat(26,minmax(0,1fr))] border-b border-line text-[8px] font-bold leading-4 text-muted sm:text-[9px]">
                  <div className="row-span-2 flex items-center border-r border-line px-3 py-2 text-ink">予定</div>
                  {ganttMonths.map((month) => (
                    <div key={month.label} className="col-span-2 border-r border-line px-0.5 py-1 text-center last:border-r-0">
                      <span className="hidden sm:inline">{month.label}</span>
                      <span className="sm:hidden">{month.compactLabel}</span>
                    </div>
                  ))}
                  {ganttMonths.flatMap((month, index) => [
                    <div key={`${month.label}-first`} className="border-r border-t border-line px-0.5 py-1 text-center">
                      上
                    </div>,
                    <div
                      key={`${month.label}-second`}
                      className={`border-r border-t border-line px-0.5 py-1 text-center ${
                        index === ganttMonths.length - 1 ? "border-r-0" : ""
                      }`}
                    >
                      下
                    </div>,
                  ])}
                </div>

                {ganttItems.map((item) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-[12rem_repeat(26,minmax(0,1fr))] border-b border-line text-[8px] leading-4 text-muted last:border-b-0 sm:text-[9px]"
                  >
                    <div className="flex min-h-10 items-center break-words border-r border-line px-3 py-2 font-semibold text-ink">
                      {item.title}
                    </div>
                    {ganttHalves.map((half) => (
                      <div key={`${item.title}-${half}`} className="min-h-10 border-r border-line last:border-r-0" />
                    ))}
                    <div
                      aria-label={item.title}
                      className="z-10 mx-0.5 my-2 rounded bg-brand/85 shadow-sm"
                      style={{ gridColumn: getGridColumn(item.start, item.end), gridRow: 1 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
