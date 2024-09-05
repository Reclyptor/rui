import { WithStandardProps } from "../../util/types.ts";
import { style } from "./style.tsx";

export type CardProps = WithStandardProps<
  "div",
  {
    solid?: boolean;
    variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
  }
>;

const Card = (props: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { solid: _solid, variant: _variant, ...rest } = props;
  return (
    <div { ...rest } style={ style(props) } />
  );
};

export default Card;