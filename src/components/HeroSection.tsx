const heroPreviewImages = [
  { src: "/materials/hero-preview-1.png", alt: "陸技 無線工学A教材のプレビュー", title: "陸技　無線工学A教材" },
  { src: "/materials/hero-preview-2.png", alt: "陸技 無線工学B教材のプレビュー", title: "陸技　無線工学B教材" },
  { src: "/materials/hero-preview-3.png", alt: "基本情報技術者教材のプレビュー", title: "基本情報技術者教材" },
  {
    src: "/materials/hero-preview-4.png",
    alt: "ネットワークスペシャリスト学習アプリのプレビュー",
    title: "ネットワークスペシャリスト学習アプリ",
  },
];

const mobileMaterialLinks = [
  { href: "#radio-engineer", label: "第一級陸上無線技術士の教材を見る" },
  { href: "#fe", label: "基本情報技術者試験の教材を見る" },
  { href: "#network-specialist", label: "ネットワークスペシャリスト学習アプリを見る" },
];

function PreviewGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {heroPreviewImages.map((image) => (
        <div key={image.src} className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
          <div className="aspect-[4/3] bg-preview">
            <img src={image.src} alt={image.alt} className="h-full w-full object-contain" loading="eager" />
          </div>
          <p className="px-3 py-2 text-center text-xs font-bold leading-5 text-muted">{image.title}</p>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-5 text-sm font-bold text-brand">オリジナル教材</p>
          <h1 className="hero-heading max-w-3xl text-5xl leading-[1.12] text-ink sm:text-6xl">
            <span className="block">試験対策を、</span>
            <span className="block">わかりやすく、</span>
            <span className="block">続けやすく。</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            このサイトでは、資格試験の学習を支援するために作成したオリジナル教材を公開しています。
            重要ポイントの整理、問題演習、知識の定着を助ける資料やアプリを、資格ごとにまとめています。
          </p>
          <div className="mt-8 hidden lg:block">
            <a
              href="#materials"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-bold text-surface shadow-soft transition hover:bg-accent"
            >
              教材を見る
            </a>
          </div>
          <div className="mt-8 grid gap-3 lg:hidden">
            {mobileMaterialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-4 py-3 text-center text-sm font-bold leading-5 text-surface shadow-soft transition hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <details className="rounded-lg border border-line bg-paper p-4 shadow-soft sm:p-5 lg:hidden">
          <summary className="cursor-pointer list-none text-sm font-bold text-ink marker:hidden">
            教材の雰囲気
          </summary>
          <div className="mt-4">
            <PreviewGrid />
          </div>
        </details>

        <div className="hidden rounded-lg border border-line bg-paper p-4 shadow-soft sm:p-5 lg:block">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-ink">教材の雰囲気</p>
            </div>
          </div>
          <PreviewGrid />
        </div>
      </div>
    </section>
  );
}
