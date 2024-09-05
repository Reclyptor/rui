import { TypographyProps } from "./index.tsx";
import { css } from "../../css.tsx";
import * as theme from "../../theme.tsx";
import clsx from "clsx";

export type TypographyStyleProps = Pick<TypographyProps, "size" | "weight" | "variant" | "style">;

export const style = (props: TypographyStyleProps) => css({
  display: "inline-block",
  fontFamily: "'Nunito Sans', sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: clsx({
    100: props.weight === "thin" || props.weight === "thin-italic",
    300: props.weight === "light" || props.weight === "light-italic",
    400: props.weight === "regular" || props.weight === "regular-italic" || !props.weight,
    500: props.weight === "medium" || props.weight === "medium-italic",
    700: props.weight === "bold" || props.weight === "bold-italic",
    900: props.weight === "black" || props.weight === "black-italic"
  }),
  fontSize: clsx({
    "0.75rem": props.size === "xs",
    "0.875rem": props.size === "sm",
    "1rem": props.size === "md" || !props.size,
    "1.125rem": props.size === "lg",
    "1.25rem": props.size === "xl",
    "1.5rem": props.size === "2xl",
    "1.875rem": props.size === "3xl",
    "2.25rem": props.size === "4xl",
    "3rem": props.size === "5xl",
    "3.75rem": props.size === "6xl",
    "4.5rem": props.size === "7xl",
    "6rem": props.size === "8xl",
    "8rem": props.size === "9xl"
  }),
  fontStyle: clsx({
    normal: !props.weight || !props.weight.includes("italic"),
    italic: props.weight?.includes("italic")
  }),
  color: clsx({
    [theme.surface]: props.variant === "baseline" || !props.variant,
    [theme.primary]: props.variant === "primary",
    [theme.secondary]: props.variant === "secondary",
    [theme.tertiary]: props.variant === "tertiary"
  }),
  fontVariationSettings: "'wdth' 100, 'YTLC' 500"
}, props.style);