import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

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
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-root": {
    "& .MuiTypography-root": {
      backgroundColor: theme.palette.primary.white,
      color: theme.palette.primary.main,
    },
  },
}));

export const GridContainerImg = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-root": {
    marginBottom: "8px",
    textAlign: "-webkit-right",

    "& img": {
      width: "125px!important",
      padding: "7px",
      borderRadius: "16px",
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
}));

export const ButtonStyled = styled(Link)(({ theme }) => ({
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
