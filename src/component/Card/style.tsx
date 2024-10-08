import { CardProps } from "./index.tsx";
import { css } from "../../css.tsx";
import * as theme from "../../theme.tsx";
import clsx from "clsx";

export type CardStyleProps = Pick<CardProps, "solid" | "variant" | "style">;

export const style = (props: CardStyleProps) => css({
  borderRadius: "8px",
  border: clsx({
    "solid transparent 2px": props.solid,
    [`solid ${theme.primary} 2px`]: !props.solid && (props.variant === "primary" || !props.variant),
    [`solid ${theme.secondary} 2px`]: !props.solid && props.variant === "secondary",
    [`solid ${theme.tertiary} 2px`]: !props.solid && props.variant === "tertiary"
  }),
  background: clsx({
    [theme.foreground]: !props.solid,
    [theme.primary]: props.solid && (props.variant === "primary" || !props.variant),
    [theme.secondary]: props.solid && props.variant === "secondary",
    [theme.tertiary]: props.solid && props.variant === "tertiary"
  }),
  color: clsx({
    [theme.surface]: props.solid,
    [theme.primary]: !props.solid && (props.variant === "primary" || !props.variant),
    [theme.secondary]: !props.solid && props.variant === "secondary",
    [theme.tertiary]: !props.solid && props.variant === "tertiary"
  }),
}, props.style);