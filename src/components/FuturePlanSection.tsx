const allGanttMonths = [
  { label: "2026/04", compactLabel: "26/04" },
  { label: "2026/05", compactLabel: "05" },
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
  { label: "2027/06", compactLabel: "06" },
  { label: "2027/07", compactLabel: "07" },
  { label: "2027/08", compactLabel: "08" },
  { label: "2027/09", compactLabel: "09" },
  { label: "2027/10", compactLabel: "10" },
];

const ganttSections = [
  { title: "2026/04-09", months: allGanttMonths.slice(0, 6) },
  { title: "2026/09-2027/03", months: allGanttMonths.slice(5, 12) },
  { title: "2027/04-10", months: allGanttMonths.slice(12) },
];

const allGanttHalves = allGanttMonths.flatMap((month) => [`${month.label}-first`, `${month.label}-second`]);

type GanttStatus = "完了" | "着手中" | "予定" | "遅延";

type GanttItem = {
  title: string;
  start: string;
  end: string;
  status: GanttStatus;
};

const ganttStatusStyles = {
  完了: "bg-blue-500/90",
  着手中: "bg-brand/85",
  予定: "bg-yellow-400/90",
  遅延: "bg-red-500/90",
} satisfies Record<GanttStatus, string>;

const ganttItems: GanttItem[] = [
  { title: "中期計画", start: "2026/04-first", end: "2026/05-first", status: "着手中" },
  { title: "ネスペアプリ改修", start: "2026/04-second", end: "2026/04-second", status: "完了" },
  { title: "家計簿管理アプリ改修", start: "2026/05-second", end: "2026/05-second", status: "予定" },
  {
    title: "プロフェッショナルデジタルスキル試験（PDS）対策アプリ:要件定義",
    start: "2026/06-first",
    end: "2026/06-second",
    status: "予定",
  },
  { title: "PDSアプリ用ノート作成（PM）", start: "2026/07-first", end: "2026/07-second", status: "予定" },
  { title: "PDSアプリ用ノート作成（ST）", start: "2026/08-first", end: "2026/08-first", status: "予定" },
  { title: "PDSアプリ基本設計", start: "2026/08-second", end: "2026/09-first", status: "予定" },
  { title: "PDSアプリ詳細設計", start: "2026/09-first", end: "2026/09-second", status: "予定" },
  { title: "PDSアプリ開発", start: "2026/09-second", end: "2027/03-first", status: "予定" },
  { title: "PDS（マネジメント）対策アプリテスト", start: "2027/02-first", end: "2027/05-second", status: "予定" },
  { title: "PDS（システム）用資料作成", start: "2027/04-first", end: "2027/10-second", status: "予定" },
];

function getSectionHalves(months: typeof allGanttMonths) {
  return months.flatMap((month) => [`${month.label}-first`, `${month.label}-second`]);
}

function getVisibleGridColumn(item: GanttItem, sectionHalves: string[]) {
  const sectionStartIndex = allGanttHalves.indexOf(sectionHalves[0]);
  const sectionEndIndex = allGanttHalves.indexOf(sectionHalves[sectionHalves.length - 1]);
  const itemStartIndex = allGanttHalves.indexOf(item.start);
  const itemEndIndex = allGanttHalves.indexOf(item.end);

  if (itemEndIndex < sectionStartIndex || sectionEndIndex < itemStartIndex) {
    return null;
  }

  const visibleStartIndex = Math.max(itemStartIndex, sectionStartIndex) - sectionStartIndex;
  const visibleEndIndex = Math.min(itemEndIndex, sectionEndIndex) - sectionStartIndex;

  return `${visibleStartIndex + 2} / ${visibleEndIndex + 3}`;
}

function GanttChart({ months, title }: { months: typeof allGanttMonths; title: string }) {
  const sectionHalves = getSectionHalves(months);
  const gridTemplateColumns = `12rem repeat(${sectionHalves.length}, minmax(0, 1fr))`;
  const visibleItems = ganttItems
    .map((item) => ({ ...item, gridColumn: getVisibleGridColumn(item, sectionHalves) }))
    .filter((item): item is GanttItem & { gridColumn: string } => item.gridColumn !== null);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[42rem] rounded-lg border border-line bg-paper">
        <div className="border-b border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink">{title}</div>
        <div
          className="grid border-b border-line text-[8px] font-bold leading-4 text-muted sm:text-[9px]"
          style={{ gridTemplateColumns }}
        >
          <div className="row-span-2 flex items-center border-r border-line px-3 py-1.5 text-ink">予定</div>
          {months.map((month) => (
            <div key={month.label} className="col-span-2 border-r border-line px-0.5 py-1 text-center last:border-r-0">
              <span className="hidden sm:inline">{month.label}</span>
              <span className="sm:hidden">{month.compactLabel}</span>
            </div>
          ))}
          {months.flatMap((month, index) => [
            <div key={`${month.label}-first`} className="border-r border-t border-line px-0.5 py-1 text-center">
              上
            </div>,
            <div
              key={`${month.label}-second`}
              className={`border-r border-t border-line px-0.5 py-1 text-center ${
                index === months.length - 1 ? "border-r-0" : ""
              }`}
            >
              下
            </div>,
          ])}
        </div>

        {visibleItems.map((item) => (
          <div
            key={`${title}-${item.title}`}
            className="grid border-b border-line text-[8px] leading-4 text-muted last:border-b-0 sm:text-[9px]"
            style={{ gridTemplateColumns }}
          >
            <div className="flex min-h-8 items-center break-words border-r border-line px-3 py-1.5 font-semibold text-ink">
              {item.title}
            </div>
            {sectionHalves.map((half) => (
              <div key={`${item.title}-${half}`} className="min-h-8 border-r border-line last:border-r-0" />
            ))}
            <div
              aria-label={`${item.title}：${item.status}`}
              className={`z-10 mx-0.5 my-1.5 rounded shadow-sm ${ganttStatusStyles[item.status]}`}
              style={{ gridColumn: item.gridColumn, gridRow: 1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
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
          <p className="text-[10px] font-semibold leading-5 text-muted sm:text-[11px]">期間：2026/04～2027/10</p>
        </div>

        <details className="group rounded-lg border border-line bg-surface shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-bold text-ink">
            <span>計画</span>
            <span className="text-xs text-muted transition group-open:rotate-180" aria-hidden="true">
              ▼
            </span>
          </summary>

          <div className="space-y-3 border-t border-line p-3 sm:p-4">
            {ganttSections.map((section) => (
              <GanttChart key={section.title} months={section.months} title={section.title} />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
