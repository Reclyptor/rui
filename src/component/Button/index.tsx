/* @prettier */

import React from "react";
import { WithStandardProps } from "../../util/types.ts";
import Typography from "../Typography";
import { style, typographyStyle } from "./style.tsx";

export type ButtonProps = WithStandardProps<
  "button",
  {
    solid?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
  }
>;

const Button = (props: ButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { solid, size, variant, ...rest } = props;
  return (
    <button {...rest} style={style(props)} className="group">
      {props.children &&
        (React.isValidElement(props.children) ? (
          props.children
        ) : (
          <Typography size={props.size} style={typographyStyle(props)}>
            {props.children}
          </Typography>
        ))}
    </button>
  );
};

export default Button;
