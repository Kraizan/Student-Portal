import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";

function ToggleWorksButton({ data, showAll, setShowAll }) {
  const colorTheme = useTheme().palette;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div style={{}}>
      {data.length > 1 && (
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
          onClick={toggleShowAll}
        >
          {showAll ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
}

export default ToggleWorksButton;
