import { primitives } from "./primitives";

export type ThemeId = "light" | "dark";

export interface Theme {
  id: ThemeId;
  color: {
    bg: string;
    fg: string;
    accent: string;
    surfaceSubtle: string;
    divider: string;
    dividerStrong: string;
    selectionBg: string;
    selectionFg: string;
  };
  font: {
    body: string;
    emphasis: string;
  };
  meta: {
    themeColor: string;
  };
}

const { color: c, font } = primitives;

export const themes: Record<ThemeId, Theme> = {
  light: {
    id: "light",
    color: {
      bg: c.gray50,
      fg: c.gray900,
      accent: c.blue500,
      surfaceSubtle: c.blackA4,
      divider: c.blackA8,
      dividerStrong: c.blackA20,
      selectionBg: c.gray900,
      selectionFg: c.gray50,
    },
    font: {
      body: font.regular,
      emphasis: font.medium,
    },
    meta: {
      themeColor: c.gray50,
    },
  },
  dark: {
    id: "dark",
    color: {
      bg: c.gray900,
      fg: c.gray50,
      accent: c.blue400,
      surfaceSubtle: c.whiteA4,
      divider: c.whiteA8,
      dividerStrong: c.whiteA20,
      selectionBg: c.gray50,
      selectionFg: c.gray900,
    },
    font: {
      body: font.regular,
      emphasis: font.medium,
    },
    meta: {
      themeColor: c.gray900,
    },
  },
};

export const THEME_STORAGE_KEY = "theme";

export function getTheme(id: ThemeId): Theme {
  return themes[id];
}

export function applyTheme(id: ThemeId) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", id);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
}

export function readStoredTheme(): ThemeId | null {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function resolveInitialTheme(): ThemeId {
  return readStoredTheme() ?? "light";
}
