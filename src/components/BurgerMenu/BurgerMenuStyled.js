import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoxImg = styled(Box)(({ theme }) => ({
  stroke: theme.palette.primary.white,
  width: "32px",
  height: "32px",
  padding: "0",
}));

export const HeaderMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  padding: "8px 16px",
  alignIitems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    padding: "16px",
    justifyContent: "flex-end",
  },
}));
export const MenuContainer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paperAnchorRight": {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "48%",
    },
  },
  "& .MuiBackdrop-root": {
    top: "80px",
  },
  "& .menuBodyWrapper": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100% - 80px)",
  },
}));

export const BodyMenu = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
  height: "100%",
  padding: " 32px 16px 16px 16px",
  [theme.breakpoints.up("sm")]: {
    padding: "40px 16px 16px 16px",
  },

  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
    fontSize: "1.375rem",
    padding: "16px 0",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 800,
    lineHeight: "1.5rem",

    [theme.breakpoints.up("sm")]: {
      padding: "24px 0",
      lineHeight: "2.06rem",
    },
  },
}));

export const DividerStyled = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
}));

export const UlListS = styled(List)(({ theme }) => ({
  width: "100%",
  padding: "0 16px 16px 16px",
  margin: "0px",
  display: "flex",
  alignItems: "center",

  "&.centered": {
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      gap: "17px",
    },
    [theme.breakpoints.up("sm")]: {
      gap: "16px",
      padding: "0 24px 20px 24px",
    },
  },
}));

export const LiItemS = styled(ListItem)(({ theme }) => ({
  "&.liSocialIcon": {
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.primary.main,
    justifyContent: "center",
    borderRadius: "50%",
    stroke: theme.palette.primary.white,
    fill: "none",
    transition: "stroke 250ms linear",
    "&:hover": {
      stroke: theme.palette.primary.blue,
    },
  },
}));

export const BoxIconS = styled(Box)(({ theme }) => ({
  "&.logoIcon": {
    width: "110px",
    height: "52px",
    [theme.breakpoints.up("sm")]: {
      width: "117px",
      height: "55px",
    },
  },
  "&.socialIconBox": {
    width: "24px",
    height: "24px",
  },
}));
