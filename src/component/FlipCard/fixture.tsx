import FlipCard, { FlipCardProps } from "./index";
import { useFixtureInput } from "react-cosmos/client";

export default () => {
  const [flip] = useFixtureInput<FlipCardProps["flip"]>("flip", false);
  const [solid] = useFixtureInput<FlipCardProps["solid"]>("solid", false);
  const [variant] = useFixtureInput<FlipCardProps["variant"]>("variant", "primary");

  return (
    <FlipCard
      flip={ flip }
      solid={ solid }
      variant={ variant }
      style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px" }}
      front="Front"
      back="Back"
    />
  );
};