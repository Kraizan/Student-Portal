import React from "react";
import { useState } from "react";
import { Button, useTheme } from "@mui/material";
import LandingFeatures from "./landing_features";
import { Link } from "react-router-dom";

function LandingPage() {
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
        margin: "5px 0",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-image.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        padding: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: "3.5em",
          fontWeight: "500",
          color: colorTheme.primary.main,
          textAlign: "center",
        }}
      >
        One platform to define your entire journey.
        <br />
        Join now!
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="btnColor"
          style={{
            height: "60px",
            width: "200px",
            color: isHovered
              ? colorTheme.primary.main
              : colorTheme.primary.dark,
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "600",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          LinkComponent={Link}
          to="/signup"
        >
          Get Started
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <LandingFeatures
          img="allaccounts.jpg"
          text="All your programming accounts at one place."
          alt="accounts"
        />
        <LandingFeatures
          img="projectshow.jpg"
          text="Showcase your projets to the world."
          alt="projects"
        />
        <LandingFeatures
          img="connect.jpg"
          text="Connect with students having similar interests."
          alt="connect"
        />
        <LandingFeatures
          img="findjobs.jpg"
          text="Find recruiters on the basis of your relevant skills."
          alt="recruiters"
        />
      </div>
    </div>
  );
}

export default LandingPage;
