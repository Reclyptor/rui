import { ReactNode } from "react";
import { WithStandardProps } from "../../util/types.ts";
import { styleInner, style } from "./style.tsx";

export type FlipCardProps = WithStandardProps<
  "div",
  {
    flip?: boolean;
    solid?: boolean;
    variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
    front?: ReactNode;
    back?: ReactNode;
  }
>;

const Card = (props: FlipCardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { flip: _flip, solid: _solid, variant: _variant, front: _front, back: _back, ...rest } = props;
  return (
    <div { ...rest } style={ style(props) }>
      { props.front && <div style={ styleInner({ flip: false }) }>{ props.front }</div> }
      { props.back && <div style={ styleInner({ flip: true }) }>{ props.back }</div> }
    </div>
  );
};

export default Card;