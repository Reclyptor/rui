import { CSSProperties } from "react";
import { Rule } from "@css-hooks/core";
import { css, Hooks } from "../../css.tsx";
import * as theme from "../../theme.tsx";
import clsx from "clsx";
import { DatePickerProps } from "./index.tsx";

export type DatePickerStyleProps = Pick<DatePickerProps, "solid" | "size" | "variant">;

export const style = (style?: Rule<keyof Hooks, CSSProperties>) => css({
}, style);

export const styleButton = (props: DatePickerStyleProps, style?: Rule<keyof Hooks, CSSProperties>) => css({
  all: "unset",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 8px",
  gap: "8px",
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
  color: clsx({
    [theme.surface]: props.solid,
    [theme.primary]: !props.solid && (props.variant === "primary" || !props.variant),
    [theme.secondary]: !props.solid && props.variant === "secondary",
    [theme.tertiary]: !props.solid && props.variant === "tertiary"
  }),
  fontSize: "16px",
  outline: "none",
  background: clsx({
    [theme.surface]: !props.solid,
    [theme.primary]: props.solid && (props.variant === "primary" || !props.variant),
    [theme.secondary]: props.solid && props.variant === "secondary",
    [theme.tertiary]: props.solid && props.variant === "tertiary"
  }),
  border: clsx({
    [`solid transparent 2px`]: props.solid,
    [`solid ${theme.primary} 2px`]: !props.solid && (props.variant === "primary" || !props.variant),
    [`solid ${theme.secondary} 2px`]: !props.solid && props.variant === "secondary",
    [`solid ${theme.tertiary} 2px`]: !props.solid && props.variant === "tertiary"
  }),
  borderRadius: "8px",
  on: ($) => [
    $("&:intent", {
      background: clsx({
        [theme.surface]: !props.solid,
        [theme.primaryIntent]: props.solid && (props.variant === "primary" || !props.variant),
        [theme.secondaryIntent]: props.solid && props.variant === "secondary",
        [theme.tertiaryIntent]: props.solid && props.variant === "tertiary"
      }),
      border: clsx({
        [`solid transparent 2px`]: props.solid,
        [`solid ${theme.primaryIntent} 2px`]: !props.solid && (props.variant === "primary" || !props.variant),
        [`solid ${theme.secondaryIntent} 2px`]: !props.solid && props.variant === "secondary",
        [`solid ${theme.tertiaryIntent} 2px`]: !props.solid && props.variant === "tertiary"
      })
    }),
    $("&:active", {
      background: clsx({
        [theme.surface]: !props.solid,
        [theme.primaryAccent]: props.solid && (props.variant === "primary" || !props.variant),
        [theme.secondaryAccent]: props.solid && props.variant === "secondary",
        [theme.tertiaryAccent]: props.solid && props.variant === "tertiary"
      }),
      border: clsx({
        [`solid transparent 2px`]: props.solid,
        [`solid ${theme.primaryAccent} 2px`]: !props.solid && (props.variant === "primary" || !props.variant),
        [`solid ${theme.secondaryAccent} 2px`]: !props.solid && props.variant === "secondary",
        [`solid ${theme.tertiaryAccent} 2px`]: !props.solid && props.variant === "tertiary"
      })
    })
  ]
}, style);

export const styleIcon = (props: DatePickerStyleProps) => css({
  marginBottom: "2px",
  color: clsx({
    [theme.surface]: props.solid,
    [theme.primary]: !props.solid && (props.variant === "primary" || !props.variant),
    [theme.secondary]: !props.solid && props.variant === "secondary",
    [theme.tertiary]: !props.solid && props.variant === "tertiary"
  }),
  on: ($) => [
    $(".group:intent &", {
      color: clsx({
        [theme.surface]: props.solid,
        [theme.primaryIntent]: !props.solid && (props.variant === "primary" || !props.variant),
        [theme.secondaryIntent]: !props.solid && props.variant === "secondary",
        [theme.tertiaryIntent]: !props.solid && props.variant === "tertiary"
      })
    }),
    $(".group:active &", {
      color: clsx({
        [theme.surface]: props.solid,
        [theme.primaryAccent]: !props.solid && (props.variant === "primary" || !props.variant),
        [theme.secondaryAccent]: !props.solid && props.variant === "secondary",
        [theme.tertiaryAccent]: !props.solid && props.variant === "tertiary"
      })
    })
  ]
});

export const styleTypography = (props: DatePickerStyleProps) => css({
  color: clsx({
    [theme.surface]: props.solid,
    [theme.primary]: !props.solid && (props.variant === "primary" || !props.variant),
    [theme.secondary]: !props.solid && props.variant === "secondary",
    [theme.tertiary]: !props.solid && props.variant === "tertiary"
  }),
  on: ($) => [
    $(".group:intent &", {
      color: clsx({
        [theme.surface]: props.solid,
        [theme.primaryIntent]: !props.solid && (props.variant === "primary" || !props.variant),
        [theme.secondaryIntent]: !props.solid && props.variant === "secondary",
        [theme.tertiaryIntent]: !props.solid && props.variant === "tertiary"
      })
    }),
    $(".group:active &", {
      color: clsx({
        [theme.surface]: props.solid,
        [theme.primaryAccent]: !props.solid && (props.variant === "primary" || !props.variant),
        [theme.secondaryAccent]: !props.solid && props.variant === "secondary",
        [theme.tertiaryAccent]: !props.solid && props.variant === "tertiary"
      })
    })
  ]
});