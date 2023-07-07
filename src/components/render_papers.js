import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

function RenderPapers({ displayType, data }) {
  if (displayType !== "researchPapers") return null;
  const researchPapers = data.reduce((acc, student) => {
    return [...acc, ...student.researchPapers];
  }, []);
  const sortedResearchPapers = researchPapers.sort((a, b) => {
    return new Date(a.publishedOn) - new Date(b.publishedOn);
  });
  return sortedResearchPapers.map((paper) => (
    <Card
      key={paper.title}
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
