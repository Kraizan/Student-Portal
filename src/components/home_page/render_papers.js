import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function RenderPapers({ displayType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [displayType]);

  const fetchData = async () => {
    try {
      let response1 = await axios.get(
        "http://localhost:8000/api/students/papers"
      );
      let response2 = await axios.get(
        "http://localhost:8000/api/faculties/papers"
      );
      response1 = response1.data;
      response2 = response2.data;
      const response = response1.concat(response2);

      if (displayType !== "researchPapers") return null;

      const sortedResearchPapers = response.sort((a, b) => {
        return new Date(a.publishedOn) - new Date(b.publishedOn);
      });
      setData(sortedResearchPapers);
    } catch (error) {
      console.error(error);
    }
  };

  return data.map((paper, index) => (
    <Card
      key={index}
      style={{ width: "60%", margin: "15px auto", padding: "10px" }}
    >
      <CardHeader
        title={<div>{paper.title}</div>}
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
            {paper.publisher}
          </Typography>
          <Typography
            variant="subtitle1"
            color="GrayText"
            gutterBottom
            style={{ textAlign: "right" }}
          >
            Date: {paper.publishedOn}
          </Typography>
        </div>
        <Typography variant="body1" gutterBottom>
          {paper.abstract}
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
          href={paper.link}
          target="_blank"
          rel="noopener"
        >
          Open Project
        </Button>
      </CardContent>
    </Card>
  ));
}

export default RenderPapers;
