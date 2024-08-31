import React, { useRef, useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { styleButton, styleIcon, styleTypography } from "./style.tsx";
import Typography from "../Typography";
import dayjs from "dayjs"

export type DatePickerProps = {
  value?: Date;
  solid?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary"; // Default 'primary'
};

const DatePicker = (props: DatePickerProps) => {
  const { current: now } = useRef(dayjs());
  const [open, setOpen] = useState<boolean>(true);
  const [value, setValue] = useState<Date | undefined>(props.value);

  return (
    <>
      <button onClick={ () => setOpen(!open) } style={ styleButton(props) } className="group">
        <CalendarIcon size={ 16 } style={ styleIcon(props) } className="group" />
        <Typography size={ props.size } style={ styleTypography(props) }>
          { value ? dayjs(value).format("YYYY-MM-DD") : "Select Date" }
        </Typography>
      </button>
    </>
  );
};

export default DatePicker;
