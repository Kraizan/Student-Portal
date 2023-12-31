import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteWorkButton from "../buttons/delete_work_button";

function ResearchPaperCard({ paper, setData }) {
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
          {paper.title}
        </Typography>
        <div>
          <DeleteWorkButton data={paper} setData={setData} />
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
          style={{ width: "70%", overflowWrap: "break-word", display: "flex" }}
        >
          Publisher: {<div style={{ margin: "0 3px" }}>{paper.publisher}</div>}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          color="GrayText"
          style={{ textAlign: "center" }}
        >
          Published on: {paper.publishedOn}
        </Typography>
      </div>
      <Typography variant="body1" gutterBottom>
        {paper.abstract}
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
            color: isHovered ? colorTheme.text.main : colorTheme.text.dark,
            borderRadius: "50px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={paper.docLink}
          target="_blank"
          rel="noopener"
        >
          Read Paper
        </Button>
      </div>
    </div>
  );
}

export default ResearchPaperCard;
