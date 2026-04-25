import { examNotes, exams, materials, type Material } from "@/data/materials";

export const dynamic = "force-static";

const siteName = "第４術科協会（旧間宮塾）";

const typeStyles: Record<Material["type"], string> = {
  PowerPoint: "bg-sky-50 text-sky-800 ring-sky-200",
  PDF: "bg-rose-50 text-rose-800 ring-rose-200",
  Webアプリ: "bg-teal-50 text-teal-800 ring-teal-200",
  動画: "bg-amber-50 text-amber-800 ring-amber-200",
  申請フォーム: "bg-violet-50 text-violet-800 ring-violet-200",
};

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
      <header className="border-b border-line/80 bg-white/88 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-base font-bold text-ink sm:text-lg">
            {siteName}
          </a>
          <nav aria-label="主要ナビゲーション" className="flex items-center gap-4 text-sm font-medium text-muted">
            <a className="transition hover:text-accent" href="#materials">
              教材
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold text-teal">オリジナル教材</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
              <span className="block">試験対策を、</span>
              <span className="block">わかりやすく、</span>
              <span className="block">続けやすく。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              このサイトでは、資格試験の学習を支援するために作成したオリジナル教材を公開しています。
              重要ポイントの整理、問題演習、知識の定着を助ける資料やアプリを、資格ごとにまとめています。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#materials"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-blue-700"
              >
                教材を見る
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
            <dl className="grid grid-cols-2 gap-5">
              <div>
                <dt className="text-sm text-muted">掲載教材</dt>
                <dd className="mt-2 text-3xl font-bold text-ink">{materials.length}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">対象資格</dt>
                <dd className="mt-2 text-3xl font-bold text-ink">{exams.length}</dd>
              </div>
              <div className="col-span-2 border-t border-line pt-5">
                <dt className="text-sm text-muted">構成</dt>
                <dd className="mt-2 text-base font-bold text-ink">講義資料・PDF・Webアプリ・動画</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="materials" className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-teal">Materials</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">無料教材一覧</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">対象資格ごとに教材を整理しています。</p>
        </div>

        <div className="space-y-12">
          {exams.map((exam) => {
            const examMaterials = materials.filter((material) => material.exam === exam);
            const note = examNotes[exam];

            return (
              <section key={exam} aria-labelledby={`${exam}-heading`}>
                <div className="mb-5">
                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-line" />
                    <h3 id={`${exam}-heading`} className="text-lg font-bold text-ink sm:text-xl">
                      {exam}
                    </h3>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  {note ? <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-6 text-muted">{note}</p> : null}
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {examMaterials.map((material) => (
                    <article
                      key={material.title}
                      className={`flex min-h-72 flex-col rounded-lg border p-5 transition hover:-translate-y-0.5 hover:shadow-soft ${
                        material.recommended
                          ? "border-accent bg-blue-50/45 shadow-soft ring-1 ring-accent/20"
                          : "border-line bg-white shadow-sm"
                      }`}
                    >
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        {material.recommended ? (
                          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                            おすすめ
                          </span>
                        ) : null}
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                          {material.exam}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${typeStyles[material.type]}`}>
                          {material.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold leading-7 text-ink">{material.title}</h4>
                      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{material.description}</p>
                      <a
                        href={material.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-accent"
                        aria-label={`${material.title}を新しいタブで開く`}
                      >
                        開く
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-bold text-teal">Install</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">インストール手順（読まなくてもOK、簡単）</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              学習Webアプリは、スマホやPCのホーム画面に追加して使えます。基本情報技術者試験とネットワークスペシャリストの学習アプリで利用できます。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {installGuides.map((guide) => (
              <section key={guide.title} className="rounded-lg border border-line bg-paper p-5">
                <h3 className="text-base font-bold text-ink">{guide.title}</h3>
                <ol className="mt-4 space-y-3 text-sm leading-7 text-muted">
                  {guide.steps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-accent ring-1 ring-line">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-medium text-ink">{siteName}</p>
        </div>
      </footer>
    </main>
  );
}
