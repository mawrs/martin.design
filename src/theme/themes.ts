import { primitives } from "./primitives";

export type ThemeId = "light" | "dark";

export interface Theme {
  id: ThemeId;
  color: {
    bg: string;
    primaryText: string;
    secondaryText: string;
    disabledText: string;
    accent: string;
    surfaceSubtle: string;
    border: string;
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
      bg: c.ivoryLight,
      primaryText: c.slateDark,
      secondaryText: c.arsenic,
      disabledText: c.stone,
      accent: c.blue500,
      surfaceSubtle: c.blackA4,
      border: c.oat,
      divider: c.oat,
      dividerStrong: c.oat,
      selectionBg: c.slateDark,
      selectionFg: c.ivoryLight,
    },
    font: {
      body: font.regular,
      emphasis: font.medium,
    },
    meta: {
      themeColor: c.ivoryLight,
    },
  },
  dark: {
    id: "dark",
    color: {
      bg: c.slateDark,
      primaryText: c.ivoryLight,
      secondaryText: c.smoke,
      disabledText: c.cloudDark,
      accent: c.blue400,
      surfaceSubtle: c.whiteA4,
      border: c.slateMedium,
      divider: c.slateMedium,
      dividerStrong: c.slateMedium,
      selectionBg: c.ivoryLight,
      selectionFg: c.slateDark,
    },
    font: {
      body: font.regular,
      emphasis: font.medium,
    },
    meta: {
      themeColor: c.slateDark,
    },
  },
};

export const THEME_STORAGE_KEY = "theme";

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
