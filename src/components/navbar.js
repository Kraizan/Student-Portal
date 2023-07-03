import { React, useState } from "react";
import { useTheme } from "@mui/material/styles";
import DrawerNavigation from "./drawer";
import { Button, IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  const colorTheme = useTheme().palette;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
      <div>
        {isLoggedIn ? (
          <IconButton color="inherit">
            <AccountCircle style={{ backgroundColor: "black" }} />
          </IconButton>
        ) : (
          <Link to="/signup">
            <Button
              variant="contained"
              color="btnColor"
              style={{
                backgroundColor: isHovered
                  ? colorTheme.btnColor2.dark
                  : colorTheme.btnColor2.main,
                height: "50px",
                width: "120px",
                color: colorTheme.primary.main,
                borderRadius: "30px",
                fontSize: "15px",
                fontWeight: "600",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Sign In
            </Button>
          </Link>
        )}
      </div>
      {/* <DrawerNavigation /> */}
    </nav>
  );
}

export default Navbar;
