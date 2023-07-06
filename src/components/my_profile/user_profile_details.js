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
import DeleteWorkButton from "./delete_work_button";
import LinkForm from "./link_form";

function UserProfileDetails({ tempData, setData }) {
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
        <HyperlinkButton link={tempData.portfolioWebsite} />
      </CardContent>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LinkedIn style={{ color: "black", marginRight: "5px" }} />
          <Typography variant="h6">LinkedIn</Typography>
        </div>
        <HyperlinkButton link={tempData.linkedIn} />
      </CardContent>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <GitHub style={{ color: "black", marginRight: "5px" }} />
          <Typography variant="h6">GitHub</Typography>
        </div>
        <HyperlinkButton link={tempData.github} />
      </CardContent>
      <CardContent>
        <Typography variant="h6">Other Links</Typography>
      </CardContent>
      {tempData.hyperlinks.map((hyperlink, index) => {
        return (
          <CardContent key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">{hyperlink.title}</Typography>
              <DeleteWorkButton data={hyperlink} setData={setData} />
            </div>
            <HyperlinkButton link={hyperlink.link} />
          </CardContent>
        );
      })}
      <CardContent>
        <div>
          <LinkForm setData={setData} />
        </div>
      </CardContent>
    </Card>
  );
}

export default UserProfileDetails;
