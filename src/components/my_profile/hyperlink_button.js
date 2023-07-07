import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React, { useState } from "react";

function HyperlinkButton({ link }) {
  const colorTheme = useTheme().palette;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Button
        variant="text"
        size="large"
        style={{
          color: isHovered
            ? colorTheme.secondary.dark
            : colorTheme.primary.main,
          fontWeight: "bold",
          textTransform: "none",
          padding: "0",
          overflowWrap: "anywhere",
          minWidth: "0",
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
