import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
// import { Devices, GitHub, LinkedIn } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import HyperlinkButton from "../buttons/hyperlink_button";
import LinkForm from "../forms/link_form";
import DeleteWorkButton from "../buttons/delete_work_button";
import { LinkedIn } from "@mui/icons-material";

function UserProfileDetails({ tempData, setData }) {
  const colorTheme = useTheme().palette;

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
        <Typography variant="h6">{tempData.currentInstitution}</Typography>
      </CardContent>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LinkedIn style={{ color: "black", marginRight: "5px" }} />
          <Typography variant="h6">LinkedIn</Typography>
        </div>
        <HyperlinkButton link={tempData.linkedIn} />
      </CardContent>
      <CardContent>
        <Typography variant="h6">Hyperlinks</Typography>
        {tempData.hyperlinks.map((hyperlink, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1">{hyperlink.title}</Typography>
                <DeleteWorkButton data={hyperlink} setData={setData} />
              </div>
              <HyperlinkButton link={hyperlink.link} />
            </div>
          );
        })}
      </CardContent>

      <CardContent>
        <div>
          <LinkForm setData={setData} />
        </div>
      </CardContent>
    </Card>
  );
}

export default UserProfileDetails;
