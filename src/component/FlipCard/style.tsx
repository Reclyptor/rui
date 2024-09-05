import { FlipCardProps } from "./index.tsx";
import { css } from "../../css.tsx";
import * as theme from "../../theme.tsx";
import clsx from "clsx";

export type FlipCardStyleProps = Pick<FlipCardProps, "flip" | "solid" | "variant" | "style">;

export const style = (props: FlipCardStyleProps) => css({
  position: "relative",
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
  transition: "transform 500ms ease-in-out",
  transformStyle: "preserve-3d",
  transform: clsx({ "rotateY(180deg)": props.flip }),
  backfaceVisibility: "visible"
}, props.style);

export const styleInner = (props: FlipCardStyleProps) => css({
  position: "absolute",
  boxSizing: "border-box",
  borderRadius: "inherit",
  border: "none",
  background: "inherit",
  color: "inherit",
  transition: "transform 500ms ease-in-out",
  transformStyle: "preserve-3d",
  transform: clsx({ "rotateY(180deg)": props.flip }),
  backfaceVisibility: "hidden",
  width: "inherit",
  height: "inherit",
});