/* @prettier */

import React, { ReactNode } from "react";
import { WithStandardProps } from "../../util/types.ts";
import Typography from "../Typography";
import { innerStyle, style } from "./style.tsx";

export type CardProps = WithStandardProps<
  "div",
  {
    flip?: boolean;
    solid?: boolean;
    variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
    front?: ReactNode;
    back?: ReactNode;
  }
>;

const Card = (props: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { flip, solid, variant, front, back, ...rest } = props;
  return (
    <div {...rest} style={style(props)}>
      {props.front && (
        <div style={innerStyle({ flip: false })}>
          {React.isValidElement(props.front) ? (
            props.front
          ) : (
            <Typography variant={props.solid ? "baseline" : props.variant}>{props.front}</Typography>
          )}
        </div>
      )}
      {props.back && (
        <div style={innerStyle({ flip: true })}>
          {React.isValidElement(props.back) ? (
            props.back
          ) : (
            <Typography variant={props.solid ? "baseline" : props.variant}>{props.back}</Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
