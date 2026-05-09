import { examNotes, exams, materials, type Material } from "@/data/materials";
import { FuturePlanSection } from "@/components/FuturePlanSection";
import { HeroSection } from "@/components/HeroSection";
import { HistorySection } from "@/components/HistorySection";
import { MaterialPreview } from "@/components/MaterialPreview";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ThemeToggle } from "@/components/ThemeToggle";

export const dynamic = "force-static";

const siteName = "第４術科協会（旧間宮塾）";

const typeStyles: Record<Material["type"], string> = {
  スライド: "bg-sky-50 text-sky-800 ring-sky-200 dark:bg-sky-950/70 dark:text-sky-200 dark:ring-sky-800",
  PDF: "bg-rose-50 text-rose-800 ring-rose-200 dark:bg-rose-950/70 dark:text-rose-200 dark:ring-rose-800",
  Webアプリ: "bg-teal-50 text-teal-800 ring-teal-200 dark:bg-teal-950/70 dark:text-teal-200 dark:ring-teal-800",
  動画: "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-950/70 dark:text-amber-200 dark:ring-amber-800",
  申請フォーム: "bg-violet-50 text-violet-800 ring-violet-200 dark:bg-violet-950/70 dark:text-violet-200 dark:ring-violet-800",
  アンケート: "bg-indigo-50 text-indigo-800 ring-indigo-200 dark:bg-indigo-950/70 dark:text-indigo-200 dark:ring-indigo-800",
};

const actionLabels: Record<Material["type"], string> = {
  スライド: "資料を開く",
  PDF: "資料を開く",
  Webアプリ: "アプリを開く",
  動画: "動画を開く",
  申請フォーム: "申請する",
  アンケート: "回答する",
};

const examSectionIds: Record<string, string> = {
  第一級陸上無線技術士: "radio-engineer",
  基本情報技術者試験: "fe",
  ネットワークスペシャリスト: "network-specialist",
  応用情報技術者試験: "ap",
  プロジェクトマネージャ: "project-manager",
};

const examDisplayNames: Record<string, string> = {
  第一級陸上無線技術士: "第一級陸上無線技術士（陸技）",
  基本情報技術者試験: "基本情報技術者試験（ＦＥ）",
  ネットワークスペシャリスト: "ネットワークスペシャリスト（ネスペ）",
  応用情報技術者試験: "応用情報技術者試験 （ＡＰ）",
  プロジェクトマネージャ: "プロジェクトマネージャ（PM）",
};

const compactMaterialExams = new Set(["第一級陸上無線技術士", "応用情報技術者試験"]);

const installGuides = [
  {
    title: "iPhoneの方（Safari）",
    steps: ["Safariで学習アプリのURLを開く。", "画面下の「共有ボタン（四角に↑）」を押す。", "「ホーム画面に追加」を選ぶ。"],
  },
  {
    title: "Androidの方（Chrome）",
    steps: [
      "Chromeで学習アプリのURLを開く。",
      "画面に出てくる「ホーム画面に〜〜を追加」というバナーをタップする。",
      "表示されない場合は、右上のメニューから「アプリをインストール」を選ぶ。",
    ],
  },
  {
    title: "PCの方（Chrome / Edge）",
    steps: [
      "対象ブラウザは Google Chrome または Microsoft Edge です。",
      "ブラウザで学習アプリのURLを開く。",
      "アドレスバー右側のインストールアイコンをクリックする。",
      "表示されたポップアップで「インストール」を選ぶ。",
      "デスクトップやタスクバーにアイコンが表示され、次回から直接起動できます。",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-line/80 bg-surface/88 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-base font-bold text-ink sm:text-lg">
            {siteName}
          </a>
          <nav aria-label="主要ナビゲーション" className="flex items-center text-sm font-medium text-muted">
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-0.5 px-5 py-2 text-[10px] leading-5 text-muted sm:px-6 sm:text-[11px] lg:px-8">
          <p className="font-semibold">最終更新日：2026/05/09</p>
          <p className="font-semibold">お知らせ：ネスペ学習アプリを大型アップデートしました。不具合修正以外は、ひとまずこれで完成とします。</p>
          <p className="font-semibold">応用情報と一陸技の過去資料・動画の一部を追加しました。</p>
          <p className="font-semibold">今後の予定は、ページ下部に予定表を作成中・・・</p>
        </div>
      </section>

      <HeroSection />

      <section id="materials" className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-brand">Materials</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">教材一覧</h2>
          </div>
        </div>

        <div className="space-y-12">
          {exams.map((exam) => {
            const examMaterials = materials.filter((material) => material.exam === exam);
            const note = examNotes[exam];
            const sectionId = examSectionIds[exam];
            const displayName = examDisplayNames[exam] ?? exam;
            const isCompactExam = compactMaterialExams.has(exam);
            const gridClass = isCompactExam
              ? "grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-4"
              : "grid gap-5 md:grid-cols-2 lg:grid-cols-3";
            const cardSizeClass = isCompactExam ? "min-h-0 p-3 md:min-h-72 md:p-5 lg:min-h-64 lg:p-4" : "min-h-72 p-5";

            return (
              <section key={exam} id={sectionId} aria-labelledby={`${exam}-heading`}>
                <div className="mb-5">
                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-line" />
                    <h3 id={`${exam}-heading`} className="text-xl font-extrabold text-ink sm:text-2xl">
                      {displayName}
                    </h3>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  {note ? <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-6 text-muted">{note}</p> : null}
                </div>
                <div className={gridClass}>
                  {examMaterials.map((material) => (
                    <article
                      key={material.title}
                      className={`flex flex-col rounded-lg border transition hover:-translate-y-0.5 hover:shadow-soft ${cardSizeClass} ${
                        material.recommended
                          ? "border-accent bg-blue-50/45 shadow-soft ring-1 ring-accent/20 dark:bg-blue-950/30"
                          : "border-line bg-surface shadow-sm"
                      }`}
                    >
                      <div className={isCompactExam ? "mb-3 md:mb-5 lg:mb-4" : "mb-5"}>
                        <MaterialPreview material={material} />
                      </div>
                      <div className={isCompactExam ? "mb-3 flex flex-wrap items-center gap-1.5 md:mb-4 md:gap-2 lg:mb-3 lg:gap-1.5" : "mb-4 flex flex-wrap items-center gap-2"}>
                        {material.recommended ? (
                          <span className={isCompactExam ? "rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-surface md:px-3 md:py-1 md:text-xs lg:px-2.5 lg:text-[11px]" : "rounded-full bg-accent px-3 py-1 text-xs font-bold text-surface"}>
                            おすすめ
                          </span>
                        ) : null}
                        <span className={isCompactExam ? "hidden rounded-full bg-badge px-3 py-1 text-xs font-bold text-badgeText md:inline-flex lg:px-2.5 lg:text-[11px]" : "rounded-full bg-badge px-3 py-1 text-xs font-bold text-badgeText"}>
                          {material.exam}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ring-1 md:px-3 md:py-1 md:text-xs ${isCompactExam ? "lg:px-2.5 lg:text-[11px]" : ""} ${typeStyles[material.type]}`}>
                          {material.type}
                        </span>
                      </div>
                      <h4 className={isCompactExam ? "text-sm font-bold leading-5 text-ink md:text-lg md:leading-7 lg:text-base lg:leading-6" : "text-lg font-bold leading-7 text-ink"}>{material.title}</h4>
                      <p className={isCompactExam ? "mt-2 flex-1 overflow-hidden text-[11px] leading-5 text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] md:mt-3 md:text-sm md:leading-7 md:[display:block] lg:mt-2 lg:text-xs lg:leading-6" : "mt-3 flex-1 text-sm leading-7 text-muted"}>{material.description}</p>
                      <div className={isCompactExam ? "mt-3 grid gap-1.5 md:mt-6 md:gap-2 lg:mt-4" : "mt-6 grid gap-2"}>
                        {(material.links ?? [{ label: actionLabels[material.type], url: material.url }]).map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={isCompactExam ? "inline-flex min-h-9 items-center justify-center rounded-md bg-ink px-2 py-1.5 text-center text-[11px] font-bold leading-4 text-surface transition hover:bg-accent md:min-h-11 md:px-4 md:py-2 md:text-sm lg:min-h-10 lg:px-3 lg:text-xs" : "inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-bold text-surface transition hover:bg-accent"}
                            aria-label={`${material.title}の${link.label}を新しいタブで開く`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-bold text-brand">Install</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">インストール手順</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              <span className="block">読まなくてもOK、簡単です。</span>
              <span className="block">学習Webアプリは、スマホやPCのホーム画面に追加して使えます。</span>
              <span className="block">基本情報技術者試験とネットワークスペシャリストの学習アプリで利用できます。</span>
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {installGuides.map((guide) => (
              <details key={guide.title} className="group rounded-lg border border-line bg-paper">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-bold text-ink">
                  <span>{guide.title}</span>
                  <span className="text-xs text-muted transition group-open:rotate-180" aria-hidden="true">
                    ▼
                  </span>
                </summary>
                <ol className="space-y-3 border-t border-line px-5 py-4 text-sm leading-7 text-muted">
                  {guide.steps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-bold text-accent ring-1 ring-line">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <HistorySection />

      <FuturePlanSection />

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-medium text-ink">{siteName}</p>
        </div>
      </footer>
    </main>
  );
}
