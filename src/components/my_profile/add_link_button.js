import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function AddLinkButton({ onClick }) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Button
        color="btnColor2"
        variant="outlined"
        style={{ borderRadius: "50px", width: "100%" }}
        onClick={onClick}
      >
        <Add />
      </Button>
    </div>
  );
}

export default AddLinkButton;
