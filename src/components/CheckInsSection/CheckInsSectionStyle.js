import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { BlueButton } from "../../style/Global.styled";

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
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));

export const ContainerSection = styled(Container)(({ theme }) => ({
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
