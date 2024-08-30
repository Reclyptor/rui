import Card, { CardProps } from "./index";
import { useFixtureInput } from "react-cosmos/client";

export default () => {
  const [flip] = useFixtureInput<CardProps["flip"]>("flip", false);
  const [solid] = useFixtureInput<CardProps["solid"]>("solid", false);
  const [variant] = useFixtureInput<CardProps["variant"]>("variant", "primary");

  return (
    <Card
      flip={ flip }
      solid={ solid }
      variant={ variant }
      style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}
      front="Front"
      back="Back"
    />
  );
};