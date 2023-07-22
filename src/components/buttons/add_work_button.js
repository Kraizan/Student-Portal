import { useTheme } from "@emotion/react";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function AddWorkButton({ onClick }) {
  const colorTheme = useTheme().palette;
  return (
    <Button
      variant="outlined"
      color="primary"
      size="large"
      style={{
        color: colorTheme.btnColor.dark,
        borderRadius: "50px",
        fontWeight: "bold",
        textTransform: "none",
      }}
      startIcon={<Add />}
      onClick={onClick}
    >
      Add New
    </Button>
  );
}

export default AddWorkButton;
