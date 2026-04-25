import type { Material } from "@/data/materials";

const previewStyles: Record<Material["type"], { frame: string; bar: string; label: string }> = {
  PowerPoint: {
    frame: "border-sky-200 bg-sky-50",
    bar: "bg-sky-500",
    label: "SLIDE",
  },
  PDF: {
    frame: "border-rose-200 bg-rose-50",
    bar: "bg-rose-500",
    label: "PDF",
  },
  Webアプリ: {
    frame: "border-teal-200 bg-teal-50",
    bar: "bg-teal-500",
    label: "APP",
  },
  動画: {
    frame: "border-amber-200 bg-amber-50",
    bar: "bg-amber-500",
    label: "VIDEO",
  },
  申請フォーム: {
    frame: "border-violet-200 bg-violet-50",
    bar: "bg-violet-500",
    label: "FORM",
  },
};

type MaterialPreviewProps = {
  material: Material;
  compact?: boolean;
};

export function MaterialPreview({ material, compact = false }: MaterialPreviewProps) {
  const style = previewStyles[material.type];

  if (material.thumbnail) {
    return (
      <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
        <div className="aspect-video bg-slate-100">
          <img src={material.thumbnail} alt={`${material.title}のプレビュー`} className="h-full w-full object-contain" loading="lazy" />
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-lg border ${style.frame} p-3`}>
      <div className="rounded-md border border-white/80 bg-white shadow-sm">
        <div className={`h-2 rounded-t-md ${style.bar}`} />
        <div className={compact ? "p-3" : "p-4"}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700">{style.label}</span>
            {material.recommended ? <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white">おすすめ</span> : null}
          </div>
          <p className={`${compact ? "text-xs" : "text-sm"} font-bold leading-6 text-ink`}>{material.title}</p>
          <div className="mt-3 space-y-2">
            <span className="block h-2 rounded-full bg-slate-200" />
            <span className="block h-2 w-5/6 rounded-full bg-slate-200" />
            <span className="block h-2 w-2/3 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
