import { Button, styled } from "@mui/material";

export const BlueButton = styled(Button)(({ theme }) => ({
  padding: "16px 38px",
  borderRadius: "50px",
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

export const WhiteButton = styled(Button)(({ theme }) => ({
  padding: "16px 38px",
  borderRadius: "50px",
  background: theme.palette.primary.white,
  color: theme.palette.primary.main,
  "&:hover": {
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
  borderRadius: "50px",
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
