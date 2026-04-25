import type { Material } from "@/data/materials";
import { MaterialPreview } from "@/components/MaterialPreview";

type HeroSectionProps = {
  materials: Material[];
};

export function HeroSection({ materials }: HeroSectionProps) {
  const previewMaterials = materials.slice(0, 4);

  return (
    <section id="top" className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-5 text-sm font-bold text-teal">オリジナル教材</p>
          <h1 className="hero-heading max-w-3xl text-5xl leading-[1.12] text-ink sm:text-6xl">
            <span className="block">試験対策を、</span>
            <span className="block">わかりやすく、</span>
            <span className="block">続けやすく。</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            このサイトでは、資格試験の学習を支援するために作成したオリジナル教材を公開しています。
            重要ポイントの整理、問題演習、知識の定着を助ける資料やアプリを、資格ごとにまとめています。
          </p>
          <div className="mt-8">
            <a
              href="#materials"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-accent"
            >
              教材を見る
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-paper p-4 shadow-soft sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-ink">教材プレビュー</p>
              <p className="mt-1 text-xs leading-5 text-muted">掲載教材の雰囲気を一覧前に確認できます。</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-teal ring-1 ring-line">
              {materials.length}件
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {previewMaterials.map((material) => (
              <MaterialPreview key={material.title} material={material} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
