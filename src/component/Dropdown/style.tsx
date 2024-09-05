import { DropdownProps } from "./index.tsx";
import { css } from "../../css.tsx";
import * as theme from "../../theme.tsx";
import clsx from "clsx";

export type DropdownStyleProps = Pick<DropdownProps<unknown>, "size" | "variant" | "style">;

export const style = (props: DropdownStyleProps) => css({
  cursor: "pointer",
  padding: "0 8px",
  gap: "2px",
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  background: theme.surface,
  borderRadius: "8px",
  border: clsx({
    [`solid ${theme.primary} 2px`]: props.variant === "primary" || !props.variant,
    [`solid ${theme.secondary} 2px`]: props.variant === "secondary",
    [`solid ${theme.tertiary} 2px`]: props.variant === "tertiary"
  }),
  outline: "none",
  color: clsx({
    [theme.primary]: props.variant === "primary" || !props.variant,
    [theme.secondary]: props.variant === "secondary",
    [theme.tertiary]: props.variant === "tertiary"
  }),
  fontSize: clsx({
    "0.875rem": props.size === "sm",
    "1rem": props.size === "md" || !props.size,
    "1.125rem": props.size === "lg",
  }),
  minWidth: clsx({
    "fit-content": !props.size,
    "24px": props.size === "sm",
    "32px": props.size === "md",
    "40px": props.size === "lg"
  }),
  height: clsx({
    "fit-content": !props.size,
    "24px": props.size === "sm",
    "32px": props.size === "md",
    "40px": props.size === "lg"
  }),
  on: ($) => [
    $("&:intent", {
      border: clsx({
        [`solid ${theme.primaryIntent} 2px`]: props.variant === "primary" || !props.variant,
        [`solid ${theme.secondaryIntent} 2px`]: props.variant === "secondary",
        [`solid ${theme.tertiaryIntent} 2px`]: props.variant === "tertiary"
      })
    }),
    $("&:active", {
      border: clsx({
        [`solid ${theme.primaryAccent} 2px`]: props.variant === "primary" || !props.variant,
        [`solid ${theme.secondaryAccent} 2px`]: props.variant === "secondary",
        [`solid ${theme.tertiaryAccent} 2px`]: props.variant === "tertiary"
      })
    }),
  ]
}, props.style);

export const styleIcon = (props: DropdownStyleProps) => css({
  marginBottom: "2px",
  color: clsx({
    [theme.primary]: props.variant === "primary" || !props.variant,
    [theme.secondary]: props.variant === "secondary",
    [theme.tertiary]: props.variant === "tertiary"
  }),
  on: ($) => [
    $(".group:intent &", {
      color: clsx({
        [theme.primaryIntent]: props.variant === "primary" || !props.variant,
        [theme.secondaryIntent]: props.variant === "secondary",
        [theme.tertiaryIntent]: props.variant === "tertiary"
      })
    }),
    $(".group:active &", {
      color: clsx({
        [theme.primaryAccent]: props.variant === "primary" || !props.variant,
        [theme.secondaryAccent]: props.variant === "secondary",
        [theme.tertiaryAccent]: props.variant === "tertiary"
      })
    })
  ]
});

export const styleTypography = (props: DropdownStyleProps) =>
  css({
    color: clsx({
      [theme.primary]: props.variant === "primary" || !props.variant,
      [theme.secondary]: props.variant === "secondary",
      [theme.tertiary]: props.variant === "tertiary"
    }),
    on: ($) => [
      $(".group:intent &", {
        color: clsx({
          [theme.primaryIntent]: props.variant === "primary" || !props.variant,
          [theme.secondaryIntent]: props.variant === "secondary",
          [theme.tertiaryIntent]: props.variant === "tertiary"
        })
      }),
      $(".group:active &", {
        color: clsx({
          [theme.primaryAccent]: props.variant === "primary" || !props.variant,
          [theme.secondaryAccent]: props.variant === "secondary",
          [theme.tertiaryAccent]: props.variant === "tertiary"
        })
      })
    ]
  });