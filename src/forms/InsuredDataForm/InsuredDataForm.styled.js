import { Box, styled } from "@mui/material";
import { WhiteButton, YellowButton } from "../../style/Global.styled";

export const FormStyled = styled(Box)(({ theme }) => ({
  background: "white",
  display: "flex",
  flexDirection: "column",
  gap: 24,
  padding: 16,
  borderRadius: 50,
  backgroundColor: theme.palette.primary.white,
  [theme.breakpoints.up("sm")]: {
    padding: 24,
    width: 680,
    gap: 28,
  },
  [theme.breakpoints.up("lg")]: {
    gap: 48,
    width: 765,
    padding: 32,
  },
}));
export const InputContBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    marginTop: 4,
  },
  [theme.breakpoints.up("lg")]: {
    gap: 24,
    marginTop: 8,
  },
  "& .select-container": {
    "& .MuiTypography-root.MuiTypography-body1": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "0.875rem",
        fontFamily: "OpenSans-SemiBold, sans-serif",
        fontWeight: 600,
        color: theme.palette.primary.main,
        lineHeight: 1.5,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
    },
    "& .customSelect__": {
      "&control": {
        [theme.breakpoints.up("lg")]: {
          width: "100%",
        },
      },
    },
  },
}));

export const DocInputsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    "& div:nth-of-type(n)": {
      width: 308,
    },
  },
  [theme.breakpoints.up("lg")]: {
    gap: 24,
    "& div:nth-of-type(n)": {
      width: 338,
    },
  },
}));
export const ButtonContainerStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
export const YellowButtonStyled = styled(YellowButton)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: 192,
    order: 1,
  },
}));
export const WhiteButtonStyled = styled(WhiteButton)(({ theme }) => ({
  width: "100%",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    width: 163,
  },
}));
export const WhiteButtonSVGStyled = styled(Box)(({ theme }) => ({
  width: 24,
  height: 24,
  stroke: theme.palette.primary.main,
  fill: "transparent",
}));
