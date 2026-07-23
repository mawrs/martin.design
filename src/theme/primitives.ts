/**
 * JS mirror of CSS primitives — keep in sync with styles/primitives.css.
 * Use for runtime logic; styles still come from CSS themes.
 */

export const primitives = {
  color: {
    white: "#ffffff",
    gray50: "#f8f8f8",
    gray900: "#101010",
    gray950: "#000000",
    blue400: "#3b82f6",
    blue500: "#0070f3",
    blackA4: "rgba(0, 0, 0, 0.04)",
    blackA8: "rgba(0, 0, 0, 0.08)",
    blackA20: "rgba(0, 0, 0, 0.2)",
    whiteA4: "rgba(255, 255, 255, 0.04)",
    whiteA8: "rgba(255, 255, 255, 0.08)",
    whiteA20: "rgba(255, 255, 255, 0.2)",
  },
  font: {
    regular:
      '"Octave Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    medium:
      '"Octave Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  text: {
    xs: "12px",
    sm: "16px",
    md: "20px",
  },
  leading: {
    tight: "22px",
    base: "28px",
  },
  space: {
    1: "3px",
    2: "9px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "40px",
    7: "64px",
    8: "120px",
  },
  layout: {
    max: "1280px",
    colText: "368px",
    proseMax: "600px",
    bpMd: 1024,
  },
  radius: {
    sm: "6px",
  },
  motion: {
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "0.2s",
    base: "0.25s",
  },
} as const;

export type PrimitiveColor = keyof typeof primitives.color;
export type PrimitiveSpace = keyof typeof primitives.space;
