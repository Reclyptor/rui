import { useRef, useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  styleButton,
  styleCard,
  styleContent, styleFooter,
  styleHeader,
  styleIcon,
  styleTypography
} from "./style.tsx";
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
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<Date | undefined>(props.value);

  return (
    <>
      <button onClick={ () => setOpen(!open) } style={ styleButton(props) } className="group">
        <CalendarIcon size={ 16 } style={ styleIcon(props) } className="group" />
        <Typography size={ props.size } style={ styleTypography(props) }>
          { value ? dayjs(value).format("YYYY-MM-DD") : "Select Date" }
        </Typography>
      </button>
      { open &&
        <div style={ styleCard(props) }>
          <div style={ styleHeader(props) }>

          </div>

          <div style={ styleContent(props) }>
          </div>

          <div style={ styleFooter(props) }>
          </div>
        </div>
      }
    </>
  );
};

export default DatePicker;