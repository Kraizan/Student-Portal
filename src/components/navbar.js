import { React, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const colorTheme = useTheme().palette;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const type = localStorage.getItem("type");
  const [profile, setProfilePicture] = useState("");

  useEffect(() => {
    const storedProfilePicture = localStorage.getItem("profile");
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    }
    if (user) {
      setIsLoggedIn(true);
    }
  }, [profile, user]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (route) => {
    handleMenuClose();
    if (route === "profile") {
      console.log(type);
      if (type === "student") {
        navigate("/student-profile");
      } else {
        navigate("/faculty-profile");
      }
    } else if (route === "settings") {
      if (type === "student") {
        navigate("/edit-student-profile");
      } else {
        navigate("/edit-faculty-profile");
      }
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
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
              <MenuItem onClick={() => handleMenuClick("profile")}>
                My Profile
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("settings")}>
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
