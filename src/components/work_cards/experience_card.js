import { Typography } from "@mui/material";
import React from "react";
import DeleteWorkButton from "../buttons/delete_work_button";

function WorkExperienceCard({ data, setData }) {
  return (
    <div
      style={{
        paddingBottom: "20px",
        marginBottom: "20px",
        borderBottom: "1px solid lightgray",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" gutterBottom>
            {data.company}
          </Typography>
          <div>
            <DeleteWorkButton data={data} setData={setData} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" gutterBottom color="GrayText">
            {data.position}
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="GrayText">
            {data.from} - {data.to}
          </Typography>
        </div>
      </div>
      <Typography variant="body1" gutterBottom>
        {data.description}
      </Typography>
    </div>
  );
}

export default WorkExperienceCard;
