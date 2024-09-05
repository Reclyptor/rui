import Dropdown, { DropdownProps } from "./index";
import { useFixtureInput } from "react-cosmos/client";

export default () => {
  const [size] = useFixtureInput<DropdownProps<string>["size"]>("size", "md");
  const [variant] = useFixtureInput<DropdownProps<string>["variant"]>("variant", "primary");

  return <Dropdown size={ size } variant={ variant } value="One" items={["One", "Two", "Three", "Four", "Five"]} />;
};