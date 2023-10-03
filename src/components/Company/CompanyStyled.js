import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Rating } from "@mui/material";

export const CardStyled = styled(Card)(({ theme }) => ({
  "&.MuiCard-root": {
    width: "100%",
    height: "495px",
    padding: "16px",
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.main,
    borderRadius: "50px",
    [theme.breakpoints.up("sm")]: {
      height: "377px",
      padding: "24px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "324px",
      padding: "32px",
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
    gapRow: "8px",
    "& .MuiTypography-root": {
      backgroundColor: theme.palette.primary.white,
      color: theme.palette.primary.main,
    },
  },
}));

export const GridContainerImg = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-root": {
    textAlign: "-webkit-right",

    "& img": {
      width: "125px!important",
      padding: "7px",
    },
  },
}));

export const RaitingStyled = styled(Rating)(({ theme }) => ({
  "&.MuiRating-root": {
    fontSize: "21px",
  },
}));

export const GridContainerRaiting = styled(Grid)(({ theme }) => ({
  textAlign: "end",
}));

export const BoxFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
