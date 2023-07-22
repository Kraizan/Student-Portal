import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function RenderProjects({ displayType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [displayType]);

  const fetchData = async () => {
    try {
      let response1 = await axios.get(
        "http://localhost:8000/api/students/projects"
      );
      let response2 = await axios.get(
        "http://localhost:8000/api/faculties/projects"
      );
      response1 = response1.data;
      response2 = response2.data;
      const response = response1.concat(response2);

      if (displayType !== "projects") return null;

      const sortedProjects = response.sort((a, b) => {
        return new Date(a.startedOn) - new Date(b.startedOn);
      });
      setData(sortedProjects);
    } catch (error) {
      console.error(error);
    }
  };

  return data.map((project, index) => (
    <Card
      key={index}
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
