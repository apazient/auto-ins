import { Box, styled } from "@mui/material";
import Select from "react-select";

export const SelectStyled = styled(Select)(({ theme }) => ({
  "& .customSelect__": {
    "&control": {
      color: theme.palette.primary.main,
      fontFamily: "OpenSans-SemiBold",
      fontSize: 16,
      fontWeight: "600",
      lineHeight: "150%" /* 24px */,
      width: "100%",
      padding: 16,
      height: 56,
      borderRadius: 50,
      backgroundColor: "#FEFEFF",
      borderColor: theme.palette.primary.white,
      boxShadow: "0 0 0 0",
      "&:hover": {
        borderColor: theme.palette.primary.white,
      },
      "& svg": {
        transition: "transform 200ms ease-in-out",
      },
      "&--menu-is-open": {
        "& svg": {
          transform: "rotateX(180deg)",
        },
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
      },
      [theme.breakpoints.up("lg")]: {
        width: 272,
      },
    },
    "&value-container": { height: 24, padding: 0 },
    "&indicators": {
      height: 24,
      padding: 0,
      "& svg": {
        width: 24,
        height: 24,
      },
    },
    "&input-container": {
      height: 24,
      margin: 0,
      padding: 0,
    },
    "&indicator-separator": {
      display: "none",
    },
    "&dropdown-indicator": {
      padding: 0,
      "& svg": {
        width: 24,
        height: 24,
      },
    },
    "&menu": {
      marginTop: 0,
      borderRadius: 25,
      color: theme.palette.primary.main,
      fontFamily: "OpenSans-SemiBold",
      fontSize: 16,
      fontWeight: "600",
      lineHeight: "150%" /* 24px */,
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
      },
    },
    "&menu-list": {
      padding: 4,
    },
    "&option:first-of-type": {
      borderRadius: "25px 25px 0px 0px",
    },
    "&option:last-of-type": {
      borderRadius: "0px 0px 25px 25px",
    },
    "&option": {
      cursor: "pointer",
      color: theme.palette.primary.main,
      "&--is-focused, &:active, &--is-selected": {
        backgroundColor: theme.palette.primary.lightBlue2,
      },
    },
    "&indicator": {
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.up("sm")]: {
      "&control": {
        height: 59,
      },
    },
  },
}));
export const InputContStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    gap: 16,
  },
}));
