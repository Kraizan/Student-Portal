import React from "react";
import { TextField, useTheme } from "@mui/material";

function TextInputField(props) {
  const colorTheme = useTheme().palette;
  return (
    <TextField
      label={props.label}
      InputLabelProps={{ style: { color: colorTheme.primary.main } }}
      inputProps={{
        style: { color: colorTheme.primary.main },
        draggable: "false",
        placeholder: props.placeholder,
      }}
      variant="filled"
      fullWidth
      required
      type={props.type}
      style={{
        marginTop: "20px",
        border: "1px solid lightgrey",
      }}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default TextInputField;
