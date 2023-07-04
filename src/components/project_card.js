import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ data }) {
  const colorTheme = useTheme().palette;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card style={{ padding: "20px", margin: "10px 0" }}>
      <CardHeader
        title={data.title}
        subheader={
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex" }}>
                {data.techStack.map((tech, index) => {
                  return (
                    <div key={index} style={{ marginRight: "5px" }}>
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div>{data.startedOn}</div>
            </div>
          </div>
        }
      />
      <CardContent>{data.description}</CardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to={data.link} style={{ marginRight: "20px" }}>
          <Button
            variant="contained"
            color="btnColor"
            size="large"
            style={{
              color: isHovered
                ? colorTheme.primary.main
                : colorTheme.primary.dark,
              borderRadius: "50px",
              fontWeight: "600",
              textTransform: "none",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Open Project
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
