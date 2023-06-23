import React from "react";
import { useTheme } from "@mui/material/styles";
import DrawerNavigation from "./drawer";
import Avatar from "@mui/material/Avatar";

function NavBar() {
  const colorTheme = useTheme().palette;
  return (
    <nav
      style={{
        height: "5vh",
        padding: "2.5vh 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid lightgrey",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          letterSpacing: "0.04em",
          color: colorTheme.secondary.main,
          fontWeight: "500",
        }}
      >
        Student Portal
      </div>
      <div
        style={{
          padding: "5px",
          backgroundColor: "lightgrey",
          borderRadius: "30px",
        }}
      >
        <Avatar
          alt="Random User"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
          sx={{
            borderRadius: "30px",
          }}
        />
      </div>
      {/* <DrawerNavigation /> */}
    </nav>
  );
}

export default NavBar;
