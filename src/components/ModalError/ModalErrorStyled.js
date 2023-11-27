import { Box, Button, Dialog, styled } from "@mui/material";

export const DialogStyled = styled(Dialog)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiDialog-paper": {
    backgroundColor: theme.palette.primary.white,
    padding: "40px",
    borderRadius: "50px",
    color: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: "16px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "56px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "935px",
      padding: "60px",
    },
  },
  "& .MuiDialogContent-root": {
    padding: "12px 0 16px 0",
    overflowY: "clip",
    [theme.breakpoints.up("sm")]: { padding: "24px 0 32px 0" },
    [theme.breakpoints.up("lg")]: { padding: "24px 0 48px 0" },
  },
  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
  "& .MuiDialogActions-root": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
  },
  "& .buttonDesktop": {
    [theme.breakpoints.up("lg")]: { width: "334px" },
  },

  "& .closeIcon": {
    position: "absolute",
    top: "24px",
    right: "24px",
    display: "block",
    padding: "0",
    cursor: "pointer",
    backgroundColor: "inherit",
    border: "none",
    width: "24px",
    height: "24px",
    stroke: theme.palette.primary.main,
    "&:hover, &:focus": {
      stroke: theme.palette.primary.blue,
    },
  },
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: "4px",
  [theme.breakpoints.up("sm")]: {
    gap: "8px",
  },
  "& .title": {
    color: theme.palette.primary.main,
  },
}));
export const BoxImgYellow = styled(Box)(({ theme }) => ({
  width: "56px",
  height: "56px",
  stroke: theme.palette.primary.yellow,
  fill: theme.palette.primary.white,
}));

export const ButtonCancel = styled(Button)(({ theme }) => ({
  width: "100%",
  margin: "0",
  padding: "16px 38px",
  textDecoration: "none",
  borderRadius: "50px",
  fontFamily: "Open Sans",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "1.5em",
  textTransform: "none",
  border: `1px solid transparent`,
  background: theme.palette.primary.white,
  color: theme.palette.primary.main,
  transition: "background 350ms linear",
  [theme.breakpoints.up("sm")]: {
    border: `1px solid ${theme.palette.primary.main}`,
    fontSize: "18px",
  },
  "&:hover": {
    background: theme.palette.primary.blue,
    color: theme.palette.primary.white,
  },
  "&:active": {
    background: theme.palette.primary.tertiaryBlue,
  },
}));
