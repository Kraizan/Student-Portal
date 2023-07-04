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

function ResearchPaperCard({ data }) {
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
              <div>{data.publisher}</div>
              <div>{data.publishedOn}</div>
            </div>
          </div>
        }
      />
      <CardContent>{data.abstract}</CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link to={data.docLink} style={{ marginRight: "20px" }}>
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
            Read Paper
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ResearchPaperCard;
