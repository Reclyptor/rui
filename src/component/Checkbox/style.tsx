import { CheckboxProps } from "./index.tsx";
import { css } from "../../css.tsx";
import * as theme from "../../theme.tsx";
import clsx from "clsx";

export type CheckboxStyleProps = Pick<CheckboxProps, "size" | "variant" | "style">;

export const style = (props: CheckboxStyleProps) => css({
  accentColor: clsx({
    [theme.primaryIntent]: props.variant === "primary" || !props.variant,
    [theme.secondaryIntent]: props.variant === "secondary",
    [theme.tertiaryIntent]: props.variant === "tertiary",
  })
}, props.style);