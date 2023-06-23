import React from "react";
import { useTheme } from "@mui/material";

function Footer() {
  const colorTheme = useTheme().palette;
  return (
    <footer
      style={{
        height: "15vh",
        borderTop: "2px solid lightgrey",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ color: colorTheme.secondary.main }}>Footer</div>
    </footer>
  );
}

export default Footer;
