import { WithStandardProps } from "../../util/types.ts";
import { style } from "./style.tsx";

export type CheckboxProps = WithStandardProps<
  "input",
  {
    variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
  }
>;

const Checkbox = (props: CheckboxProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size: _size, variant: _variant, ...rest } = props;
  return <input { ...rest } type="checkbox" style={ style(props) } />;
};

export default Checkbox;
