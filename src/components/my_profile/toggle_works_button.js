import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React, { useState } from "react";

function ToggleWorksButton({ data, showAll, setShowAll }) {
  const colorTheme = useTheme().palette;
  const [isHovered, setIsHovered] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div style={{}}>
      {data.length > 1 && (
        <Button
          variant="contained"
          color="btnColor"
          size="large"
          style={{
            color: isHovered
              ? colorTheme.btnColor.main
              : colorTheme.btnColor.dark,
            borderRadius: "50px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onMouseEnter={() => {
            setIsHovered(!isHovered);
          }}
          onMouseLeave={() => {
            setIsHovered(!isHovered);
          }}
          onClick={toggleShowAll}
        >
          {showAll ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
}

export default ToggleWorksButton;
