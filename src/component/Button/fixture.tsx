/* @prettier */

import { useFixtureInput } from "react-cosmos/client";
import Button, { ButtonProps } from "./index";

export default () => {
  const [solid] = useFixtureInput<ButtonProps["solid"]>("solid", false);
  const [size] = useFixtureInput<ButtonProps["size"]>("size", "md");
  const [variant] = useFixtureInput<ButtonProps["variant"]>("variant", "primary");

  return (
    <Button solid={solid} size={size} variant={variant}>
      Button
    </Button>
  );
};
