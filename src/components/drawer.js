import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const DrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <List style={{ width: "20vw" }}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>

      <button
        onClick={toggleDrawer(true)}
        style={{
          backgroundColor: "transparent",
          border: "0",
          fontSize: "2rem",
        }}
      >
        ☰
      </button>
    </>
  );
};

export default DrawerNavigation;
