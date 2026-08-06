"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import {
  applyTheme,
  resolveInitialTheme,
  type ThemeId,
} from "@/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeId>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = resolveInitialTheme();
    applyTheme(initial);
    setTheme(initial);
    setReady(true);
  }, []);

  const toggle = () => {
    const next: ThemeId = theme === "light" ? "dark" : "light";
    applyTheme(next);
    setTheme(next);
    posthog.capture("theme_changed", { theme: next });
  };

  if (!ready) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme" type="button" />
    );
  }

  return (
    <button
      className="theme-toggle"
      aria-label="Toggle theme"
      type="button"
      onClick={toggle}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 0.889C4.079 0.889 0.889 4.079 0.889 8S4.079 15.111 8 15.111 15.111 11.921 15.111 8 11.921 0.889 8 0.889Zm5.52 8.817A6.2 6.2 0 0 1 11.778 10a5.56 5.56 0 0 1-3.393-1.111h5.316a6.7 6.7 0 0 1-.182 1.817ZM7.066 7.556a5.7 5.7 0 0 1-.516-.889h7.066c.068.289.115.585.138.889H7.066Zm6.054-2.223H6.109a5.9 5.9 0 0 1-.099-.889h6.534c.218.277.411.574.576.889ZM11.065 3.111H6.118c.043-.212.108-.422.175-.631.54-.167 1.113-.258 1.707-.258a5.56 5.56 0 0 1 3.065.889Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
