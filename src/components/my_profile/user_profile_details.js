import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Devices, GitHub, LinkedIn } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import HyperlinkButton from "./hyperlink_button";

function UserProfileDetails({ tempData }) {
  const colorTheme = useTheme().palette;

  const openResume = () => {
    window.open(tempData.resume);
  };

  return (
    <Card
      style={{
        width: "28%",
        padding: "20px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={tempData.profileImage}
            style={{ height: "100px", width: "100px" }}
          />
        }
        title={
          <div
            style={{
              fontSize: "2rem",
            }}
          >
            {tempData.fullName}
          </div>
        }
        subheader={
          <div>
            <Typography variant="body1">{tempData.email}</Typography>
            <Typography variant="body1">{tempData.contact}</Typography>
          </div>
        }
      />
      <CardContent>
        <Button
          variant="contained"
          color="btnGreen"
          size="large"
          style={{
            color: colorTheme.btnColor.main,
            borderRadius: "50px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={openResume}
        >
          Resume
        </Button>
      </CardContent>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Devices style={{ color: "black", marginRight: "5px" }} />
          <Typography variant="h6">Portfolio</Typography>
        </div>
        <HyperlinkButton link={tempData.hyperlinks.portfolioWebsite} />
      </CardContent>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LinkedIn style={{ color: "black", marginRight: "5px" }} />
          <Typography variant="h6">LinkedIn</Typography>
        </div>
        <HyperlinkButton link={tempData.hyperlinks.linkedIn} />
      </CardContent>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <GitHub style={{ color: "black", marginRight: "5px" }} />
          <Typography variant="h6">GitHub</Typography>
        </div>
        <HyperlinkButton link={tempData.hyperlinks.github} />
      </CardContent>
      <CardContent>
        <Typography variant="h6">Other Links</Typography>
        <div>
          {tempData.hyperlinks.other.map((link, index) => {
            return <HyperlinkButton key={index} link={link} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default UserProfileDetails;
