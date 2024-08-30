import { ComponentPropsWithoutRef } from "react";
import { style } from "./style.tsx";

type WithStandardProps<T> = T & Omit<ComponentPropsWithoutRef<"span">, keyof T>;

export type TypographyProps = WithStandardProps<{
  variant?: "baseline" | "primary" | "secondary" | "tertiary"; // Default 'baseline'
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"; // Default 'md'
  weight?:
    | "thin"
    | "light"
    | "regular"
    | "medium"
    | "bold"
    | "black"
    | "thin-italic"
    | "light-italic"
    | "regular-italic"
    | "medium-italic"
    | "bold-italic"
    | "black-italic"; // Default 'regular'
}>;

const Typography = (props: TypographyProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _variant, size: _size, weight: _weight, ...rest } = props;
  return <span { ...rest } style={ style(props) } />;
};

export default Typography;
