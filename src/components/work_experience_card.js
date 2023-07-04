import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

function WorkExperienceCard({ data }) {
  return (
    <Card style={{ padding: "20px", margin: "10px 0" }}>
      <CardHeader
        title={data.company}
        subheader={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{data.position}</div>
            <div>
              {data.from} - {data.to}
            </div>
          </div>
        }
      />
      <CardContent>{data.description}</CardContent>
    </Card>
  );
}

export default WorkExperienceCard;
