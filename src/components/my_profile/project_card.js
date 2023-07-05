import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteWorkButton from "./delete_work_button";

function ProjectCard({ project, setData }) {
  const colorTheme = useTheme().palette;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        paddingBottom: "20px",
        marginBottom: "20px",
        borderBottom: "1px solid lightgray",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" gutterBottom>
          {project.title}
        </Typography>
        <div>
          <DeleteWorkButton data={project} setData={setData} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          color="GrayText"
          style={{ display: "flex", width: "70%" }}
        >
          Techstack Used:{" "}
          {
            <div style={{ width: "80%" }}>
              {project.techStack.map((tech, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: "inline-grid", margin: "0 3px" }}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          }
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          color="GrayText"
          style={{ textAlign: "center" }}
        >
          Date: {project.startedOn}
        </Typography>
      </div>
      <Typography variant="body1" gutterBottom>
        {project.description}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          color="btnColor"
          size="large"
          style={{
            color: isHovered
              ? colorTheme.primary.main
              : colorTheme.primary.dark,
            borderRadius: "50px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={project.link}
          target="_blank"
          rel="noopener"
        >
          Open Project
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
