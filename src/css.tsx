import * as pkg from "@css-hooks/react";

const { createHooks } = pkg;

const hooks = {
  "&:hover": "&:hover",
  "&:active": "&:active",
  "&:focus": "&:focus-visible",
  "&:intent": "&:hover, &:focus-visible",
  "&:disabled": "&:disabled",
  ".group:hover &": ".group:hover &",
  ".group:active &": ".group:active &",
  ".group:focus &": ".group:focus-visible &",
  ".group:intent &": ".group:hover &, .group:focus-visible &",
  ".group:disabled &": ".group:disabled &",
  "@screen sm": "@media (min-width: 640px)",
  "@screen md": "@media (min-width: 768px)",
  "@screen lg": "@media (min-width: 1024px)",
  "@screen xl": "@media (min-width: 1280px)",
  "@screen 2xl": "@media (min-width: 1536px)",
  "@media (prefers-color-scheme: light)": "@media (prefers-color-scheme: light)",
  "@media (prefers-color-scheme: dark)": "@media (prefers-color-scheme: dark)"
} as const;

export type Hooks = typeof hooks;

export const { styleSheet, css } = createHooks({
  hooks: hooks as Hooks,
  debug: import.meta.env.DEV
});
