import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import RenderProjects from "./render_projects";
import RenderPapers from "./render_papers";

const ExploreSection = () => {
  const [data, setData] = useState([]);
  const [displayType, setDisplayType] = useState("projects");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/students");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
      <RenderProjects displayType={displayType} data={data} />
      <RenderPapers displayType={displayType} data={data} />
    </div>
  );
};
export default ExploreSection;
