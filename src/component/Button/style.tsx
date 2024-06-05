/* @prettier */

import clsx from "clsx";
import { css } from "../../css.tsx";
import * as theme from "../../theme.tsx";
import { ButtonProps } from "./index.tsx";

export type ButtonStyleProps = Pick<ButtonProps, "solid" | "size" | "variant" | "style">;

export const style = (props: ButtonStyleProps) =>
  css({
    cursor: "pointer",
    background: clsx({
      [theme.surface]: !props.solid,
      [theme.primary]: props.solid && (props.variant === "primary" || !props.variant),
      [theme.secondary]: props.solid && props.variant === "secondary",
      [theme.tertiary]: props.solid && props.variant === "tertiary"
    }),
    borderRadius: "8px",
    border: clsx({
      [`solid transparent 2px`]: props.solid,
      [`solid ${theme.primary} 2px`]: !props.solid && (props.variant === "primary" || !props.variant),
      [`solid ${theme.secondary} 2px`]: !props.solid && props.variant === "secondary",
      [`solid ${theme.tertiary} 2px`]: !props.solid && props.variant === "tertiary"
    }),
    outline: "none",
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
    ],
    ...props.style
  });

export const typographyStyle = (props: ButtonStyleProps) =>
  css({
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
