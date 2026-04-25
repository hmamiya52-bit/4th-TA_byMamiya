"use client";

import { useMemo, useState } from "react";
import type { Material } from "@/data/materials";

type HeroDesignPreviewProps = {
  materials: Material[];
  examCount: number;
};

const typeStyles: Record<Material["type"], string> = {
  PowerPoint: "bg-sky-50 text-sky-800 ring-sky-200",
  PDF: "bg-rose-50 text-rose-800 ring-rose-200",
  Webアプリ: "bg-teal-50 text-teal-800 ring-teal-200",
  動画: "bg-amber-50 text-amber-800 ring-amber-200",
  申請フォーム: "bg-violet-50 text-violet-800 ring-violet-200",
};

export function HeroDesignPreview({ materials, examCount }: HeroDesignPreviewProps) {
  const [variant, setVariant] = useState<"dashboard" | "featured">("dashboard");

  const recommendedMaterials = useMemo(() => materials.filter((material) => material.recommended).slice(0, 2), [materials]);
  const previewMaterials = useMemo(() => {
    const nonRecommended = materials.filter((material) => !material.recommended);
    return [...recommendedMaterials, ...nonRecommended].slice(0, 3);
  }, [materials, recommendedMaterials]);
  const webAppCount = materials.filter((material) => material.type === "Webアプリ").length;

  return (
    <section id="top" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-teal">Design Preview</p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
              採用前の比較用です。トップの見せ方だけを切り替えて確認できます。
            </p>
          </div>
          <div className="inline-flex rounded-lg border border-line bg-white p-1 shadow-sm" role="tablist" aria-label="ヒーローデザイン切り替え">
            <button
              type="button"
              className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                variant === "dashboard" ? "bg-ink text-white" : "text-muted hover:bg-slate-100 hover:text-ink"
              }`}
              aria-pressed={variant === "dashboard"}
              onClick={() => setVariant("dashboard")}
            >
              パターンA
            </button>
            <button
              type="button"
              className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                variant === "featured" ? "bg-ink text-white" : "text-muted hover:bg-slate-100 hover:text-ink"
              }`}
              aria-pressed={variant === "featured"}
              onClick={() => setVariant("featured")}
            >
              パターンB
            </button>
          </div>
        </div>

        {variant === "dashboard" ? (
          <DashboardHero materials={materials} examCount={examCount} webAppCount={webAppCount} />
        ) : (
          <FeaturedHero previewMaterials={previewMaterials} recommendedMaterials={recommendedMaterials} />
        )}
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
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
  );
}

function DashboardHero({
  materials,
  examCount,
  webAppCount,
}: {
  materials: Material[];
  examCount: number;
  webAppCount: number;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <HeroCopy />
      <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
        <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
          <div>
            <p className="text-sm font-bold text-ink">学習ダッシュボード</p>
            <p className="mt-1 text-xs text-muted">教材の全体像をすぐ確認</p>
          </div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal ring-1 ring-teal/20">公開中</span>
        </div>
        <dl className="grid grid-cols-2 gap-4">
          <Metric label="掲載教材" value={`${materials.length}`} />
          <Metric label="対象資格" value={`${examCount}`} />
          <Metric label="Webアプリ" value={`${webAppCount}`} />
          <Metric label="おすすめ" value={`${materials.filter((material) => material.recommended).length}`} />
        </dl>
        <div className="mt-5 rounded-md border border-line bg-paper p-4">
          <p className="text-xs font-bold text-muted">教材構成</p>
          <p className="mt-2 text-sm font-bold leading-6 text-ink">講義資料・PDF・Webアプリ・動画・申請フォーム</p>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-paper p-4">
      <dt className="text-xs font-bold text-muted">{label}</dt>
      <dd className="mt-2 text-3xl font-bold text-ink">{value}</dd>
    </div>
  );
}

function FeaturedHero({
  previewMaterials,
  recommendedMaterials,
}: {
  previewMaterials: Material[];
  recommendedMaterials: Material[];
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <HeroCopy />
      <div className="space-y-5">
        <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
          <p className="text-sm font-bold text-ink">教材プレビュー</p>
          <div className="mt-4 space-y-3">
            {previewMaterials.map((material) => (
              <article key={material.title} className="rounded-md border border-line bg-paper p-4">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {material.recommended ? <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">おすすめ</span> : null}
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${typeStyles[material.type]}`}>{material.type}</span>
                </div>
                <h2 className="text-base font-bold leading-6 text-ink">{material.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{material.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {recommendedMaterials.map((material) => (
            <a
              key={material.title}
              href={material.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-accent/35 bg-blue-50/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="text-xs font-bold text-accent">おすすめ教材</span>
              <p className="mt-2 text-sm font-bold leading-6 text-ink">{material.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
