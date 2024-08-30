import Input, { InputProps } from "./index";
import { useFixtureInput } from "react-cosmos/client";

export default () => {
  const [size] = useFixtureInput<InputProps["size"]>("size", "md");
  const [variant] = useFixtureInput<InputProps["variant"]>("variant", "primary");

  return <Input size={ size } variant={ variant } />;
};
