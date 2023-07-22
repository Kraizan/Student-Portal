import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import RenderProjects from "./render_projects";
import RenderPapers from "./render_papers";

const ExploreSection = () => {
  const [displayType, setDisplayType] = useState("projects");

  const handleDisplayType = (type) => {
    setDisplayType(type);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <div
        style={{
          margin: "auto",
          border: "1px solid lightgrey",
          borderRadius: "7px",
          padding: "4px",
        }}
      >
        <Button
          variant="contained"
          color={displayType === "projects" ? "primary" : "btnGrey"}
          style={{
            marginRight: "5px",
            // fontWeight: "600",
          }}
          onClick={() => handleDisplayType("projects")}
        >
          <Typography letterSpacing="0.5px" fontSize="0.9rem">
            Projects
          </Typography>
        </Button>
        <Button
          variant="contained"
          color={displayType === "researchPapers" ? "primary" : "btnGrey"}
          style={{
            marginLeft: "5px",
          }}
          onClick={() => handleDisplayType("researchPapers")}
        >
          <Typography letterSpacing="0.5px" fontSize="0.9rem">
            Research Papers
          </Typography>
        </Button>
      </div>
      {displayType === "projects" ? (
        <RenderProjects displayType={displayType} />
      ) : (
        <RenderPapers displayType={displayType} />
      )}
    </div>
  );
};
export default ExploreSection;
