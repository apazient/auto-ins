import { Box, styled } from "@mui/material";
import { FormContainer } from "../../style/Global.styled";

export const FormContainerS = styled(FormContainer)(({ theme }) => ({
  gap: "8px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
  height: "fit-content",
  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.up("sm")]: {
    gap: "16px",
    width: "328px",
    marginBottom: "32px",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "0",
    width: "371px",
  },
  "& .title": {
    marginBottom: "8px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "4px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "8px",
    },
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
    "&.leightText": {
      color: theme.palette.primary.secondaryDark,
    },
  },
  [theme.breakpoints.up("lg")]: { width: "307px" },

  "& img": {
    [theme.breakpoints.up("xs")]: { width: "115px!important" },
    [theme.breakpoints.up("md")]: { width: "125px!important" },
  },
  "&.line": {
    backgroundColor: theme.palette.primary.main,
    height: "1px",
    width: "100%",
  },

  "& .boldText": {
    fontFamily: "Open Sans",
    [theme.breakpoints.up("sm")]: { fontSize: "22px", lineHeight: "1.5em" },
  },
}));
