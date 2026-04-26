"use client";

import { useEffect, useState } from "react";

type ThemeMode = "system" | "light" | "dark";

const storageKey = "theme-mode";

const options: { label: string; value: ThemeMode }[] = [
  { label: "自動", value: "system" },
  { label: "明", value: "light" },
  { label: "暗", value: "dark" },
];

function getResolvedTheme(mode: ThemeMode) {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return mode;
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  root.dataset.themeMode = mode;
  root.dataset.theme = getResolvedTheme(mode);
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    const savedMode = window.localStorage.getItem(storageKey) as ThemeMode | null;
    const nextMode = savedMode === "light" || savedMode === "dark" || savedMode === "system" ? savedMode : "system";
    setMode(nextMode);
    applyTheme(nextMode);
  }, []);

  useEffect(() => {
    if (mode !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  const handleChange = (nextMode: ThemeMode) => {
    setMode(nextMode);
    window.localStorage.setItem(storageKey, nextMode);
    applyTheme(nextMode);
  };

  return (
    <div
      className="inline-flex rounded-full border border-line bg-paper p-0.5 text-[10px] font-bold text-muted"
      aria-label="表示テーマ"
      role="group"
    >
      {options.map((option) => {
        const isActive = mode === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            className={`rounded-full px-1.5 py-0.5 transition ${
              isActive ? "bg-ink text-surface shadow-sm" : "hover:bg-badge hover:text-ink"
            }`}
            onClick={() => handleChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
