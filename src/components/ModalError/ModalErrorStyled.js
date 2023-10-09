import { Box, Dialog, styled } from "@mui/material";

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
    [theme.breakpoints.up("sm")]: {
      padding: "56px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "60px",
    },
  },
  "& .MuiDialogContent-root": {
    padding: "12px 0 16px 0",
    [theme.breakpoints.up("sm")]: { padding: "24px 0 32px 0" },
    [theme.breakpoints.up("lg")]: { padding: "24px 0 48px 0" },
  },
  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
    textAlign: "center",
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
export const BoxImg = styled(Box)(({ theme }) => ({
  width: "56px",
  height: "56px",
  stroke: theme.palette.primary.yellow,
  fill: theme.palette.primary.white,
}));
