import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { FormContainer, WhiteButton } from "../../style/Global.styled";
import { NavLink } from "react-router-dom";

export const FormContainerS = styled(FormContainer)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("lg")]: { width: "766px" },
  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
  },
}));
export const BoxImgS = styled(Box)(({ theme }) => ({
  width: "120px",
  height: "120px",
  marginBottom: "8px",
  marginLeft: "auto",
  marginRight: "auto",

  stroke: theme.palette.primary.green,
  fill: theme.palette.primary.white,

  [theme.breakpoints.up("sm")]: {
    width: "154px",
    height: "154px",
    marginBottom: "16px",
  },
}));

export const ButtonS = styled(NavLink)(({ theme }) => ({
  backgroundColor: theme.palette.primary.yellow,
  textDecoration: "none",
  textAlign: "center",
  padding: "16px 38px",
  width: "100%",
  borderRadius: "50px",
  fontSize: "16px",
  fontFamily: "Open Sans",
  lineHeight: "1.5em",
  [theme.breakpoints.up("sm")]: { width: "178px", fontSize: "18px" },
  "&:hover, &:active, &:visited": {
    backgroundColor: theme.palette.primary.tertiaryYellow,
    color: theme.palette.primary.main,
  },
}));
