import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const CardStyled = styled(Card)(({ theme }) => ({
  "&.MuiCard-root": {
    width: "100%",
    height: "495px",
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      height: "377px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "324px",
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
