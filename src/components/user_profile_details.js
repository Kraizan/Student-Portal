import React from "react";
import { Avatar, Button } from "@mui/material";
import { Devices, GitHub, LinkedIn } from "@mui/icons-material";

function UserProfileDetails({ tempData }) {
  const openResume = () => {
    window.open(tempData.resume);
  };

  return (
    <div
      style={{
        width: "30%",
      }}
    >
      <div>
        <Avatar
          src={tempData.profileImage}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div
        style={{
          fontSize: "2rem",
        }}
      >
        {tempData.fullName}
      </div>
      <div>{tempData.email}</div>
      <div>{tempData.contact}</div>
      <div>
        <Button variant="contained" onClick={openResume}>
          Open Resume
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <Devices />
        </div>
        <div style={{ marginLeft: "5px" }}>
          {tempData.hyperlinks.portfolioWebsite}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <LinkedIn />
        </div>
        <div style={{ marginLeft: "5px" }}>{tempData.hyperlinks.linkedIn}</div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <GitHub />
        </div>
        <div style={{ marginLeft: "5px" }}>{tempData.hyperlinks.github}</div>
      </div>
      <div>
        {tempData.hyperlinks.other.map((link, index) => {
          return (
            <div key={index} style={{}}>
              {link}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserProfileDetails;
