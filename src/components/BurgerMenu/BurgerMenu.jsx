import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
import { display } from "@mui/system";

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
                <SpriteSVG name={"icon-x"} />{" "}
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
              <ListItemButton onClick={onNavClick} sx={{ p: "0" }}>
                <ListItemText primary="Переваги" sx={{ m: 0 }} />
              </ListItemButton>
              <DividerStyled />
              <ListItemButton onClick={onNavClick} sx={{ p: "0" }}>
                <ListItemText primary="Партнери" sx={{ m: 0 }} />
              </ListItemButton>
              <DividerStyled />
              <ListItemButton onClick={onNavClick} sx={{ p: "0" }}>
                <ListItemText primary="Питання-відповіді" sx={{ m: 0 }} />
              </ListItemButton>
              <DividerStyled />
            </BodyMenu>

            <UlListS className="centered">
              <LiItemS disablePadding={true} className="liSocialIcon">
                <Link
                  to="https://instagram.com/autoins_info?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={toggleDrawer(false)}
                >
                  <BoxIconS className="socialIconBox">
                    <SpriteSVG name={"icon-instagram"} />
                  </BoxIconS>
                </Link>
              </LiItemS>
              <LiItemS disablePadding={true} className="liSocialIcon">
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BoxIconS className="socialIconBox">
                    <SpriteSVG name={"icon-facebook"} />
                  </BoxIconS>
                </Link>
              </LiItemS>
              <LiItemS disablePadding={true} className="liSocialIcon">
                <Link
                  to="https://t.me/@auto_ins_ua"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BoxIconS className="socialIconBox">
                    <SpriteSVG name={"icon-telegram-send"} />
                  </BoxIconS>
                </Link>
              </LiItemS>

              <LiItemS disablePadding={true} className="liSocialIcon">
                <Link
                  to="mailto:help.autoins@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BoxIconS className="socialIconBox">
                    <SpriteSVG name={"icon-mail"} />
                  </BoxIconS>
                </Link>
              </LiItemS>
            </UlListS>
          </Box>
        </Box>
      </MenuContainer>
    </>
  );
};

export default BurgerMenu;
