import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const CardStyled = styled(Card)(({ theme }) => ({
  "&.MuiCard-root": {
    width: "100%",
    padding: "16px",
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.main,
    borderRadius: "50px",
    marginBottom: "16px",
    listStyle: "none",
    [theme.breakpoints.up("sm")]: {
      padding: "24px",
      maxWidth: "680px",
      marginBottom: "24px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "32px",
      maxWidth: "1160px",
      ":not(:last-child)": { marginBottom: "32px" },
    },
  },
}));

export const WrapperStyled = styled(Box)(({ theme }) => ({
  "&.MuiBox-root": {
    "& .MuiTypography-root": {
      backgroundColor: theme.palette.primary.white,
      color: theme.palette.primary.main,
    },
  },
  "&.wrapper": {
    marginBottom: "16px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      gap: "16px",
      marginBottom: "24px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "24px",
      marginBottom: "40px",
    },
  },
  "& .gridContainer": {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "125px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "256px",
    },
  },
  // "& .footer": {
  //   width: "100%",
  // },
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-root": {
    "& .MuiTypography-root": {
      backgroundColor: theme.palette.primary.white,
      color: theme.palette.primary.main,
    },
  },
  marginBottom: "8px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const GridContainerImg = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-root": {
    marginBottom: "8px",
    textAlign: "-webkit-right",

    "& img": {
      width: "125px!important",
    },
  },
  [theme.breakpoints.up("sm")]: {
    "&.MuiGrid-root": { marginBottom: "16px", textAlign: "center" },
  },
}));

export const RaitingStyled = styled(Rating)(({ theme }) => ({
  "&.MuiRating-root": {
    fontSize: "21px",
    color: theme.palette.primary.yellow,
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
    },
  },
}));

export const GridContainerRaiting = styled(Grid)(({ theme }) => ({
  textAlign: "end",
  [theme.breakpoints.up("lg")]: {
    textAlign: "start",
  },
}));

export const BoxContent = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginBottom: "0px",
  },
  "& .title": {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginBottom: "20px",
      lineHeight: "1.5em",
    },
    [theme.breakpoints.up("lg")]: { marginBottom: "32px", fontSize: "22px" },
  },
  "& .content": {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
}));
export const BoxFooter = styled(Box)(({ theme }) => ({
  marginBottom: "16px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.up("sm")]: {
    width: "165px",
    flexDirection: "column",
    gap: "8px",
  },
  "& .price": {
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "22px",
    },
  },
}));

export const BoxSelect = styled(Box)(({ theme }) => ({
  marginBottom: "16px",
  "& .select-container": {
    gap: "4px",
  },
  "& .customSelect__": {
    "&control": {
      width: "100%",
      borderColor: theme.palette.primary.main,
      [theme.breakpoints.up("lg")]: {
        width: "304px",
      },
      "&:hover": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  [theme.breakpoints.up("sm")]: {
    width: "308px",
  },
  "& .franchise": {
    marginBottom: "8px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "12px",
    },
  },
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  padding: "16px 38px",
  fontSize: "1rem",
  borderRadius: "50px",
  fontFamily: "OpenSans-SemiBold",
  fontWeight: 600,
  lineHeight: "1.5",
  textTransform: "none",
  textDecoration: "none",
  background: theme.palette.primary.yellow,
  color: theme.palette.primary.main,
  textAlign: "center",
  display: "block",
  width: "100%",
  "&:hover, &:focus": {
    background: theme.palette.primary.secondaryYellow,
  },
  "&:active": {
    background: theme.palette.primary.tertiaryYellow,
  },
  [theme.breakpoints.up("sm")]: {
    width: "165px",
  },
}));
