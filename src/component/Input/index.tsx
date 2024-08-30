import { WithStandardProps } from "../../util/types.ts";
import { style } from "./style.tsx";

export type InputProps = WithStandardProps<
  "input",
  {
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
  }
>;

const Input = (props: InputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size: _size, variant: _variant, ...rest } = props;
  return <input { ...rest } style={ style(props) } />;
};

export default Input;
