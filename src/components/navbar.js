import { React, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const colorTheme = useTheme().palette;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const profile = localStorage.getItem("profile");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, [profile]);

  const [anchorEl, setAnchorEl] = useState(null);

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
      <Link
        to="/home"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          letterSpacing: "0.04em",
          color: colorTheme.text.dark,
          fontWeight: "500",
        }}
      >
        Student Portal
      </Link>
      <div>
        {isLoggedIn ? (
          <Button
            color="inherit"
            style={{
              borderRadius: "50px",
            }}
          >
            <Avatar
              src={profile}
              onClick={handleMenuOpen}
              sx={{
                bgcolor: "grey",
                width: "55px",
                height: "55px",
              }}
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
              color="info"
              style={{
                height: "50px",
                width: "120px",
                color: colorTheme.text.main,
                borderRadius: "30px",
                fontSize: "15px",
                fontWeight: "600",
              }}
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
