import { Box, IconButton, ListItemButton, ListItemText } from "@mui/material";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SpriteSVG } from "../../images/SpriteSVG";

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

  // const onNavClick = (event) => {
  //   event.preventDefault();
  //   const id = event.target.textContent.toLowerCase();
  //   console.log(id);
  //   let element = document.getElementById(id);
  //   element.scrollIntoView({ behavior: "smooth" });
  //   setOpen(false);
  // };
  const onNavClick = () => {
    event.preventDefault();
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
        <Box sx={{ height: "100%", flexDirection: "column" }}>
          <HeaderMenu>
            <LogoBoxS>
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
                <SpriteSVG name={"icon-x"} />{" "}
              </BoxImg>
            </IconButton>
          </HeaderMenu>

          <BodyMenu>
            <ListItemButton onClick={onNavClick} sx={{ p: "0" }}>
              <ListItemText primary="Переваги" sx={{ m: 0 }} />
            </ListItemButton>
            <DividerStyled />
            <ListItemButton onClick={onNavClick} sx={{ p: "0" }}>
              <ListItemText primary="Партнери" sx={{ m: 0 }} />
            </ListItemButton>
            <DividerStyled />
            <ListItemButton
              // component={Link}
              // to="/"
              onClick={onNavClick}
              sx={{ p: "0" }}
            >
              <ListItemText primary="Питання-відповіді" sx={{ m: 0 }} />
            </ListItemButton>
            <DividerStyled />
          </BodyMenu>

          <UlListS className="centered">
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              onClick={toggleDrawer(false)}
            >
              <LiItemS disablePadding={true} className="liSocialIcon">
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-instagram"} />
                </BoxIconS>
              </LiItemS>
            </Link>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LiItemS disablePadding={true} className="liSocialIcon">
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-facebook"} />
                </BoxIconS>
              </LiItemS>
            </Link>
            <Link
              to="https://web.telegram.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LiItemS disablePadding={true} className="liSocialIcon">
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-telegram-send"} />
                </BoxIconS>
              </LiItemS>
            </Link>
            <Link
              to="mailto:example@mail.ua"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LiItemS disablePadding={true} className="liSocialIcon">
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-mail"} />
                </BoxIconS>
              </LiItemS>
            </Link>
          </UlListS>
        </Box>
      </MenuContainer>
    </>
  );
};

export default BurgerMenu;
