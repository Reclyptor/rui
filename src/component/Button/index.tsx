import React from "react";
import Typography from "../Typography";
import { WithStandardProps } from "../../util/types.ts";
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
  const { solid: _solid, size: _size, variant: _variant, ...rest } = props;
  return (
    <button { ...rest } style={ style(props) } className="group">
      { props.children && React.isValidElement(props.children) ?
        props.children :
        <Typography size={props.size} style={typographyStyle(props)}>
          {props.children}
        </Typography>
      }
    </button>
  );
};

export default Button;