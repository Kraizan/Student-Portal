import { React, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const colorTheme = useTheme().palette;
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const profile = localStorage.getItem("profile");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      console.log(user);
      setIsLoggedIn(true);
    }
  }, [profile]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (route) => {
    handleMenuClose();
    navigate(route);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
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
          <Button color="inherit">
            <Avatar
              src={profile}
              onClick={handleMenuOpen}
              sx={{ bgcolor: "grey", width: "55px", height: "55px" }}
            ></Avatar>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleMenuClick("/student-profile")}>
                My Profile
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/edit-profile")}>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogOut}>Log out</MenuItem>
            </Menu>
          </Button>
        ) : (
          <Link to="/login">
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
    </nav>
  );
}

export default Navbar;
