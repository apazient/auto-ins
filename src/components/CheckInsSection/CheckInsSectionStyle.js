import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { BlueButton, ContainerSection } from "../../style/Global.styled";

export const BoxImg = styled(Box)(({ theme }) => ({
  fill: theme.palette.primary.white,
  [theme.breakpoints.up("xs")]: {
    width: "97px",
    height: "110px",
    margin: "0 auto",
    padding: "18px 9px ",
  },
  [theme.breakpoints.up("sm")]: {
    width: "158px",
    height: "180px",
    padding: "30px 15px ",
    flexShrink: "0",
  },
  [theme.breakpoints.up("lg")]: {
    width: "145px",
    height: "166px",
    padding: "28px 14px ",
  },
}));

export const Button = styled(BlueButton)(({ theme }) => ({
  marginTop: "24px",
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    marginTop: "32px",
    width: "42%",
  },
}));
export const ContCheck = styled(Container)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.white}`,
  borderRadius: "45px",
  padding: "16px ",

  [theme.breakpoints.up("sm")]: {
    padding: "24px ",
    display: "flex",
    gap: "24px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));

export const ContainerSectionS = styled(ContainerSection)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: "0 16px 56px 16px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "0 32px 72px 32px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 120px 120px 120px",
  },
}));
