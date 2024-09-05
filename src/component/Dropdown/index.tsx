import { WithStandardProps } from "../../util/types.ts";
import { style, styleTypography } from "./style.tsx";
import { useMemo, useState } from "react";
import { ChevronRight as ChevronRightIcon } from "lucide-react";
import { styleIcon } from "../DatePicker/style.tsx";

export type DropdownProps<T> = WithStandardProps<
  "button",
  {
    value?: T;
    items?: T[];
    itemKey?: keyof T | ((_: T) => string | number);
    itemLabel?: keyof T | ((_: T) => string | number);
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
  }
>;

const Dropdown = <T,>(props: DropdownProps<T>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value: _value, items: _items, itemKey: _itemKey, itemLabel: _itemLabel, size: _size, variant: _variant, ...rest } = props;
  const [value, setValue] = useState<T | undefined>(props.value);
  const [open, setOpen] = useState<boolean>(false);

  const label = useMemo(() => {
    if (!value) {
      return "";
    } else if (!props.itemLabel) {
      return String(value);
    } else if (typeof props.itemLabel === "function") {
      return props.itemLabel(value);
    } else {
      return String(value[props.itemLabel as keyof T]);
    }
  }, [value, props]);

  return (
    <button { ...rest } onClick={ () => setOpen(!open) } style={ style(props) } className="group">
      <ChevronRightIcon size={ 16 } style={ styleIcon(props, open) } className="group" />
      <span style={ styleTypography(props) }>{ label }</span>
    </button>
  );
};

export default Dropdown;