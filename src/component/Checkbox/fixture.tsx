import Checkbox, { CheckboxProps } from "./index";
import { useFixtureInput } from "react-cosmos/client";

export default () => {
  const [variant] = useFixtureInput<CheckboxProps["variant"]>("variant", "primary");

  return <Checkbox variant={ variant } />;
};
