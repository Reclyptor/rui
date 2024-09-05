import Card from "./Card";
import Typography from "./Typography";
import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";

export default () => {
  return (
    <Card style={ {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "56px",
      rowGap: "32px",
      padding: "16px"
    } }>
      <div
        style={ { display: "flex", flexDirection: "column", width: "100%", gap: "8px" } }>
        <Typography variant="primary">First Name</Typography>
        <Input size="md" variant="primary"/>
      </div>
      <div
        style={ { display: "flex", flexDirection: "column", width: "100%", gap: "8px" } }>
        <Typography variant="primary">Last Name</Typography>
        <Input size="md" variant="primary"/>
      </div>
      <div
        style={ { display: "flex", flexDirection: "column", width: "100%", gap: "8px" } }>
        <Typography variant="primary">Birthdate</Typography>
        <DatePicker variant="primary" />
      </div>
      <div
        style={ { display: "flex", alignItems: "center", width: "100%", gap: "8px", gridColumn: "1 / 3" } }>
        <Checkbox variant="primary"/>
        <Typography variant="primary">Remember Me</Typography>
      </div>
      <div style={ { display: "flex", justifyContent: "end", width: "100%", gap: "8px", gridColumn: "2" } }>
        <Button size="md" variant="primary"><Typography size="sm" variant="primary">Submit</Typography></Button>
      </div>
    </Card>
  );
};