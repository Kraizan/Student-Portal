import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React, { useState } from "react";

function HyperlinkButton({ link, setData }) {
  const colorTheme = useTheme().palette;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Button
        variant="text"
        size="large"
        style={{
          color: isHovered
            ? colorTheme.btnColor2.dark
            : colorTheme.btnColor2.main,
          fontWeight: "bold",
          textTransform: "none",
          padding: "0",
          overflowWrap: "anywhere",
        }}
        onMouseEnter={() => {
          setIsHovered(!isHovered);
        }}
        onMouseLeave={() => {
          setIsHovered(!isHovered);
        }}
      >
        {link}
      </Button>
    </div>
  );
}

export default HyperlinkButton;
