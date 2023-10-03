import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const CardStyled = styled(Card)(({ theme }) => ({
  "&.MuiCard-root": {
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.primary.main,
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
