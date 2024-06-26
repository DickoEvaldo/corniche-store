import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";

export default function DrawerExample() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to="/store">
          <ListItem disablePadding style={{ marginTop: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <CheckroomIcon></CheckroomIcon>
              </ListItemIcon>
              <ListItemText primary="Catalogues" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/profile">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineIcon></PersonOutlineIcon>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div className="text-black">
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          color: "black",
          fontFamily: "inter, system-ui, Avenir, Helvetica, Arial, sans-serif;",
        }}
      >
        <MenuIcon className="mr-6"></MenuIcon>
        <span className="hidden sm:inline">Menu</span>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
