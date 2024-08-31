import DatePicker, { DatePickerProps } from "./index";
import { useFixtureInput } from "react-cosmos/client";

export default () => {
  const [solid] = useFixtureInput<DatePickerProps["solid"]>("solid", false);
  const [size] = useFixtureInput<DatePickerProps["size"]>("size", "md");
  const [variant] = useFixtureInput<DatePickerProps["variant"]>("variant", "primary");

  return <DatePicker solid={ solid } size={ size } variant={ variant } />;
};