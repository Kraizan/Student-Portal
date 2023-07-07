import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

function RenderProjects({ displayType, data }) {
  if (displayType !== "projects") return null;
  const projects = data.reduce((acc, student) => {
    return [...acc, ...student.projects];
  }, []);
  const sortedProjects = projects.sort((a, b) => {
    return new Date(a.startedOn) - new Date(b.startedOn);
  });
  return sortedProjects.map((project) => (
    <Card
      key={project.title}
      style={{ width: "60%", margin: "15px auto", padding: "10px" }}
    >
      <CardHeader
        title={<div>{project.title}</div>}
        style={{ paddingBottom: "0" }}
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            color="GrayText"
            gutterBottom
            style={{ display: "flex", width: "70%" }}
          >
            Techstack Used: {project.techStack.join(", ")}
          </Typography>
          <Typography
            variant="subtitle1"
            color="GrayText"
            gutterBottom
            style={{ textAlign: "right" }}
          >
            Date: {project.startedOn}
          </Typography>
        </div>
        <Typography variant="body1" gutterBottom>
          {project.description}
        </Typography>
      </CardContent>
      <CardContent style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            borderRadius: "50px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          href={project.link}
          target="_blank"
          rel="noopener"
        >
          Open Project
        </Button>
      </CardContent>
    </Card>
  ));
}

export default RenderProjects;
