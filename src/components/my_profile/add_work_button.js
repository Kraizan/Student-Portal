import { useTheme } from "@emotion/react";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function AddWorkButton({ onClick }) {
  const colorTheme = useTheme().palette;
  return (
    <Button
      variant="contained"
      color="btnColor2"
      size="large"
      style={{
        color: colorTheme.btnColor.main,
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
