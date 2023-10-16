import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SpriteSVG } from "../../images/SpriteSVG";
import { socialMedia } from "../../assets/utils/socialMedia";

import {
  BodyMenu,
  BoxIconS,
  BoxImg,
  DividerStyled,
  HeaderMenu,
  LiItemS,
  MenuContainer,
  UlListS,
} from "./BurgerMenuStyled";
import { BoxIconHS, LogoBoxS, LogoTextHS } from "../Header/HeaderStyled";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const onNavClick = (event) => {
    navigate("/", { state: { id: event.target.textContent.toLowerCase() } });
    setOpen(false);
  };
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{ padding: "0px" }}
      >
        <BoxImg>
          <SpriteSVG name={"icon-burger"} />
        </BoxImg>
      </IconButton>
      <MenuContainer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ height: "100%" }}>
          <HeaderMenu>
            <LogoBoxS sx={{ display: { sm: "none", lg: "none" } }}>
              <BoxIconHS className="logoIcon">
                <SpriteSVG name={"icon-logo"} />
              </BoxIconHS>
              <LogoTextHS>AUTO-INS</LogoTextHS>
            </LogoBoxS>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close drawer"
              onClick={toggleDrawer(false)}
            >
              <BoxImg>
                <SpriteSVG name={"icon-x"} />
              </BoxImg>
            </IconButton>
          </HeaderMenu>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "calc(100% - 80px)",
            }}
          >
            <BodyMenu>
              {["Переваги", "Партнери", "Питання-відповіді"].map(
                (text, index) => {
                  return (
                    <Fragment key={text + index}>
                      <ListItemButton
                        key={text + index}
                        onClick={onNavClick}
                        sx={{ p: "0" }}
                      >
                        <ListItemText primary={text} sx={{ m: 0 }} />
                      </ListItemButton>
                      <DividerStyled />
                    </Fragment>
                  );
                }
              )}
            </BodyMenu>
            <UlListS className="centered">
              {socialMedia.map(({ icon, path }, index) => {
                return (
                  <LiItemS
                    key={index}
                    disablePadding={true}
                    className="liSocialIcon"
                  >
                    <Link
                      to={path}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={toggleDrawer(false)}
                    >
                      <BoxIconS className="socialIconBox">
                        <SpriteSVG name={icon} />
                      </BoxIconS>
                    </Link>
                  </LiItemS>
                );
              })}
            </UlListS>
          </Box>
        </Box>
      </MenuContainer>
    </>
  );
};

export default BurgerMenu;
