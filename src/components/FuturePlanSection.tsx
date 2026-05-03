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
            <div className="rounded-lg border border-line bg-paper">
              <div className="grid grid-cols-[4.75rem_repeat(26,minmax(0,1fr))] border-b border-line text-[8px] font-bold leading-4 text-muted sm:grid-cols-[6rem_repeat(26,minmax(0,1fr))] sm:text-[9px]">
                <div className="row-span-2 flex items-center border-r border-line px-2 py-2 text-ink sm:px-3">予定</div>
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

              <div className="grid grid-cols-[4.75rem_repeat(26,minmax(0,1fr))] text-[8px] leading-4 text-muted sm:grid-cols-[6rem_repeat(26,minmax(0,1fr))] sm:text-[9px]">
                <div className="border-r border-line px-2 py-3 font-semibold text-ink sm:px-3">予定枠</div>
                {ganttHalves.map((half) => (
                  <div key={`empty-${half}`} className="min-h-10 border-r border-line px-0.5 py-3 last:border-r-0" />
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
