import { Box, Button, ListItemButton, ListItemText, Menu } from "@mui/material";
import { useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import { BoxImg, BoxMenu } from "./MobileMenuStyle";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <Box>
      <Button
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
      >
        <BoxImg>
          <SpriteSVG name={"icon-burger"} />
        </BoxImg>
      </Button>
      <Menu
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ top: "80px" }}
      >
        {/* The inside of the drawer */}
        <Box
          sx={{
            p: 2,
            height: 1,
            backgroundColor: "#dbc8ff",
          }}
        >
          <Button
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(false)}
            sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
          >
            <BoxImg>
              <SpriteSVG name={"icon-x"} />{" "}
            </BoxImg>
          </Button>

          <Box sx={{ mb: 2 }}>
            <ListItemButton>
              <ListItemText primary="Переваги" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Партнери" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Питання-відповіді" />
            </ListItemButton>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};
