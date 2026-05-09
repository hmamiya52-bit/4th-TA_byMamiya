"use client";

import { useEffect, useState } from "react";
import type { Material } from "@/data/materials";

const previewStyles: Record<Material["type"], { frame: string; bar: string; label: string }> = {
  スライド: {
    frame: "border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/30",
    bar: "bg-sky-500",
    label: "スライド",
  },
  PDF: {
    frame: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/30",
    bar: "bg-rose-500",
    label: "PDF",
  },
  Webアプリ: {
    frame: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-950/30",
    bar: "bg-teal-500",
    label: "アプリ",
  },
  動画: {
    frame: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30",
    bar: "bg-amber-500",
    label: "動画",
  },
  申請フォーム: {
    frame: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/30",
    bar: "bg-violet-500",
    label: "申請",
  },
  アンケート: {
    frame: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/30",
    bar: "bg-indigo-500",
    label: "回答",
  },
};

type MaterialPreviewProps = {
  material: Material;
  compact?: boolean;
};

export function MaterialPreview({ material, compact = false }: MaterialPreviewProps) {
  const style = previewStyles[material.type];
  const thumbnails = Array.isArray(material.thumbnail) ? material.thumbnail : material.thumbnail ? [material.thumbnail] : [];
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  useEffect(() => {
    if (thumbnails.length > 1) {
      setThumbnailIndex(Math.floor(Math.random() * thumbnails.length));
    }
  }, [thumbnails.length]);

  if (thumbnails.length > 0) {
    const thumbnail = thumbnails[thumbnailIndex] ?? thumbnails[0];

    return (
      <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
        <div className="aspect-video bg-preview">
          <img src={thumbnail} alt={`${material.title}のプレビュー`} className="h-full w-full object-contain" loading="lazy" />
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-lg border ${style.frame} p-3`}>
      <div className="rounded-md border border-line bg-surface shadow-sm">
        <div className={`h-2 rounded-t-md ${style.bar}`} />
        <div className={compact ? "p-3" : "p-4"}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-badge px-2.5 py-1 text-[11px] font-bold text-badgeText">{style.label}</span>
            {material.recommended ? <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-surface">おすすめ</span> : null}
          </div>
          <p className={`${compact ? "text-xs" : "text-sm"} font-bold leading-6 text-ink`}>{material.title}</p>
          <div className="mt-3 space-y-2">
            <span className="block h-2 rounded-full bg-line" />
            <span className="block h-2 w-5/6 rounded-full bg-line" />
            <span className="block h-2 w-2/3 rounded-full bg-line" />
          </div>
        </div>
      </div>
    </div>
  );
}
