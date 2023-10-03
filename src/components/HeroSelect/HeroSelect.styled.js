import { Box, styled } from "@mui/material";
import Select from "react-select";

export const SelectStyled = styled(Select)(({ theme }) => ({
  "& .customSelect__": {
    "&control": {
      width: "100%",
      padding: 16,
      height: 56,
      borderRadius: 50,
      backgroundColor: "#FEFEFF",
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
      color: "#030303",
      fontFamily: "OpenSans-SemiBold",
      fontSize: 16,
      fontWeight: "600",
      lineHeight: "150%" /* 24px */,
      margin: 0,
      padding: 0,
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
      },
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

    [theme.breakpoints.up("sm")]: {
      "&control": {
        height: 59,
      },
    },
  },
  //   "& .customSelect__control": {
  //     width: "100%",
  //     padding: 16,
  //     height: 56,
  //     borderRadius: 50,
  //     backgroundColor: "#FEFEFF",
  //     [theme.breakpoints.up("lg")]: {
  //       width: 272,
  //     },
  //   },
  //   "& .customSelect__value-container": { height: 24, padding: 0 },
  //   "& .customSelect__indicators": {
  //     height: 24,
  //     padding: 0,
  //     "& svg": {
  //       width: 24,
  //       height: 24,
  //     },
  //   },
  //   "& .customSelect__input-container": {
  //     height: 24,
  //     color: "#030303",
  //     fontFamily: "OpenSans-SemiBold",
  //     fontSize: 16,
  //     fontWeight: "600",
  //     lineHeight: "150%" /* 24px */,
  //     margin: 0,
  //     padding: 0,
  //     [theme.breakpoints.up("sm")]: {
  //       fontSize: 18,
  //     },
  //   },
  //   "& .customSelect__indicator-separator": {
  //     display: "none",
  //   },
  //   "& .customSelect__dropdown-indicator": {
  //     padding: 0,
  //     "& svg": {
  //       width: 24,
  //       height: 24,
  //     },
  //   },
  //   "& .customSelect__menu": { marginTop: 0, borderRadius: 50 },
  //   [theme.breakpoints.up("sm")]: {
  //     "& .customSelect__control": {
  //       height: 59,
  //     },
  //   },
}));
export const InputContStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    gap: 16,
  },
}));
