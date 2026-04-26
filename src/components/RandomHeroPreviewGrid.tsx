"use client";

import { useEffect, useState } from "react";

type PreviewGroup = {
  title: string;
  alt: string;
  images: string[];
};

type SelectedPreview = PreviewGroup & {
  src: string;
};

const previewGroups: PreviewGroup[] = [
  {
    title: "陸技　無線工学A教材",
    alt: "陸技 無線工学A教材のプレビュー",
    images: ["/materials/pre-a-1.png", "/materials/pre-a-2.png", "/materials/pre-a-3.png"],
  },
  {
    title: "陸技　無線工学B教材",
    alt: "陸技 無線工学B教材のプレビュー",
    images: ["/materials/pre-b-1.png", "/materials/pre-b-2.png", "/materials/pre-b-3.png"],
  },
  {
    title: "基本情報技術者教材",
    alt: "基本情報技術者教材のプレビュー",
    images: ["/materials/pre-fe-1.png", "/materials/pre-fe-2.png", "/materials/pre-fe-3.png"],
  },
  {
    title: "ネットワークスペシャリスト学習アプリ",
    alt: "ネットワークスペシャリスト学習アプリのプレビュー",
    images: ["/materials/pre-nw-1.png", "/materials/pre-nw-2.png", "/materials/pre-nw-3.png"],
  },
];

function pickRandomImages() {
  return previewGroups.map((group) => {
    const index = Math.floor(Math.random() * group.images.length);
    return { ...group, src: group.images[index] };
  });
}

let pageSelectedPreviews: SelectedPreview[] | null = null;

export function RandomHeroPreviewGrid() {
  const [previews, setPreviews] = useState<SelectedPreview[]>(() =>
    previewGroups.map((group) => ({ ...group, src: group.images[0] })),
  );

  useEffect(() => {
    pageSelectedPreviews ??= pickRandomImages();
    setPreviews(pageSelectedPreviews);
  }, []);

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {previews.map((image) => (
        <div key={image.title} className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
          <div className="aspect-[4/3] bg-preview">
            <img src={image.src} alt={image.alt} className="h-full w-full object-contain" loading="eager" />
          </div>
          <p className="px-3 py-2 text-center text-xs font-bold leading-5 text-muted">{image.title}</p>
        </div>
      ))}
    </div>
  );
}
