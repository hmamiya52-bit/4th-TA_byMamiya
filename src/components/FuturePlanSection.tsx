const ganttWeeks = ["5/1-5/10", "5/11-5/20", "5/21-5/31"];

export function FuturePlanSection() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-brand">Roadmap</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">今後の予定</h2>
          </div>
          <p className="text-[10px] font-semibold leading-5 text-muted sm:text-[11px]">期間：2026/05～2026/05</p>
        </div>

        <details className="group rounded-lg border border-line bg-surface shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-bold text-ink">
            <span>ガントチャート本体</span>
            <span className="text-xs text-muted transition group-open:rotate-180" aria-hidden="true">
              ▼
            </span>
          </summary>

          <div className="border-t border-line p-5">
            <div className="overflow-x-auto">
              <div className="min-w-[640px] rounded-lg border border-line bg-paper">
                <div className="grid grid-cols-[12rem_repeat(3,1fr)] border-b border-line text-[10px] font-bold text-muted sm:text-[11px]">
                  <div className="border-r border-line px-4 py-3 text-ink">予定</div>
                  {ganttWeeks.map((week) => (
                    <div key={week} className="border-r border-line px-4 py-3 text-center last:border-r-0">
                      {week}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-[12rem_repeat(3,1fr)] text-[10px] leading-5 text-muted sm:text-[11px]">
                  <div className="border-r border-line px-4 py-4 font-semibold text-ink">予定枠</div>
                  {ganttWeeks.map((week) => (
                    <div key={`empty-${week}`} className="min-h-14 border-r border-line px-4 py-4 last:border-r-0" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
