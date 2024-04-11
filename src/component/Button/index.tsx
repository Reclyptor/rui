/* @prettier */

import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import { css } from "../../css.tsx";
import theme from "../../theme.tsx";
import Typography, { TypographyProps } from "../Typography";

type WithStandardProps<T> = T & Omit<ComponentPropsWithoutRef<"button">, keyof T>;

export type ButtonProps = WithStandardProps<{
  solid?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
}>;

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="group"
      style={css({
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
          }),
          $("&:focus", {
            outline: "none"
          })
        ],
        ...props.style
      })}
    >
      {React.isValidElement(props.children) ? (
        props.children
      ) : (
        <div
          style={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            color: clsx({
              [theme.surface]: props.solid,
              [theme.primary]: !props.solid && (props.variant === "primary" || !props.variant),
              [theme.secondary]: !props.solid && props.variant === "secondary",
              [theme.tertiary]: !props.solid && props.variant === "tertiary"
            })
          })}
        >
          <Typography
            size={
              clsx({
                sm: props.size === "sm" || !props.size,
                md: props.size === "md",
                lg: props.size === "lg"
              }) as TypographyProps["size"]
            }
            variant={
              clsx({
                primary: !props.solid && (props.variant === "primary" || !props.variant),
                secondary: !props.solid && props.variant === "secondary",
                tertiary: !props.solid && props.variant === "tertiary"
              }) as TypographyProps["variant"]
            }
            style={css({
              width: "fit-content",
              height: "fit-content",
              on: ($) => [
                $(".group:intent &", {
                  color: clsx({
                    [theme.primaryIntent]: !props.solid && (props.variant === "primary" || !props.variant),
                    [theme.secondaryIntent]: !props.solid && props.variant === "secondary",
                    [theme.tertiaryIntent]: !props.solid && props.variant === "tertiary"
                  })
                }),
                $(".group:active &", {
                  color: clsx({
                    [theme.primaryAccent]: !props.solid && (props.variant === "primary" || !props.variant),
                    [theme.secondaryAccent]: !props.solid && props.variant === "secondary",
                    [theme.tertiaryAccent]: !props.solid && props.variant === "tertiary"
                  })
                })
              ]
            })}
          >
            {props.children}
          </Typography>
        </div>
      )}
    </button>
  );
};

export default Button;
