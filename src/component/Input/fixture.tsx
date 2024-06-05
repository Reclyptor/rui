/* @prettier */

import { useFixtureInput } from "react-cosmos/client";
import Input, { InputProps } from "./index";

export default () => {
  const [size] = useFixtureInput<InputProps["size"]>("size", "md");
  const [variant] = useFixtureInput<InputProps["variant"]>("variant", "primary");

  return <Input size={size} variant={variant} />;
};
