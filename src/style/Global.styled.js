import { Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const BlueButton = styled(Button)(({ theme }) => ({
  padding: "16px 32px",
  borderRadius: "50px",
  fontFamily: "OpenSans-SemiBold",
  fontSize: "18px",
  fontWeight: 600,
  textTransform: "none",
  background: theme.palette.primary.blue,
  color: theme.palette.primary.white,
  "&:hover": {
    background: theme.palette.primary.secondaryBlue,
    color: theme.palette.primary.white,
  },
  "&:active": {
    background: theme.palette.primary.tertiaryBlue,
    color: theme.palette.primary.white,
  },
  "&.Mui-disabled": {
    background: theme.palette.primary.lightBlue,
    color: theme.palette.primary.white,
  },
}));

export const WhiteButton = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  width: "163px",
  padding: "16px 38px",

  borderRadius: "50px",
  fontFamily: "OpenSans-SemiBold",
  fontWeight: 600,
  textTransform: "none",
  border: `1px solid ${theme.palette.primary.main}`,
  background: theme.palette.primary.white,
  color: theme.palette.primary.main,
  "&:hover": {
    "& div": {
      fill: theme.palette.primary.blue,
    },

    background: theme.palette.primary.blue,
    color: theme.palette.primary.white,
  },
  "&:active": {
    background: theme.palette.primary.tertiaryBlue,
    color: theme.palette.primary.white,
  },
  "&.Mui-disabled": {
    background: theme.palette.primary.white,
    color: theme.palette.primary.tertiaryDark,
    border: "1px solid theme.palette.primary.tertiaryDark",
  },
}));

export const YellowButton = styled(Button)(({ theme }) => ({
  padding: "16px 38px",
  fontSize: "1rem",
  borderRadius: "50px",
  fontFamily: "OpenSans-SemiBold",
  fontWeight: 600,
  textTransform: "none",
  background: theme.palette.primary.yellow,
  color: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary.secondaryYellow,
  },
  "&:active": {
    background: theme.palette.primary.tertiaryYellow,
  },
  "&.Mui-disabled": {
    background: theme.palette.primary.lightYellow,
    color: theme.palette.primary.tertiaryDark,
    border: "1px solid theme.palette.primary.lightYellow",
  },
}));

export const ContainerSection = styled(Container)(({ theme }) => ({
  width: "100%",
  oveflow: "hidden",
  [theme.breakpoints.up("xs")]: {
    padding: "56px 16px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "72px 32px",
    width: "744px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "120px 120px",
    width: "1400px",
  },
}));

export const ContainerSectionPage = styled(ContainerSection)(({ theme }) => ({
  "&.MuiContainer-root": { paddingTop: "16px" },
}));
export const PageContainerS = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.primary.lightBlue2,
  color: theme.palette.primary.main,
}));
export const FormContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  oveflow: "hidden",
  backgroundColor: theme.palette.primary.white,
  padding: "16px",
  borderRadius: "35px",
  color: theme.palette.primary.main,

  [theme.breakpoints.up("sm")]: {
    padding: "24px",
    borderRadius: "50px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "32px",
  },
}));
