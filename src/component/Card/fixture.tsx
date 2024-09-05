import Card, { CardProps } from "./index";
import { useFixtureInput } from "react-cosmos/client";
import Typography from "../Typography";

export default () => {
  const [solid] = useFixtureInput<CardProps["solid"]>("solid", false);
  const [variant] = useFixtureInput<CardProps["variant"]>("variant", "primary");

  return (
    <Card
      solid={ solid }
      variant={ variant }
      style={{ width: "128px", height: "128px", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant={ solid ? "baseline" : variant }>Card</Typography>
    </Card>
  );
};