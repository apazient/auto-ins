import { Box, styled } from "@mui/material";
import { WhiteButton } from "../../style/Global.styled";

export const WhiteButtonS = styled(WhiteButton)(({ theme }) => ({
  
  border: `1px solid transparent`,
  fontSize: "16px",
  lineHeight: "1.5",
  [theme.breakpoints.up("sm")]: {
    border: `1px solid ${theme.palette.primary.main}`,
    fontSize: "18px",
  },
}));

export const BoxIconS = styled(Box)(({theme})=>({
  width: '24px',  
  height: '24px',
  stroke: theme.palette.primary.main,
  fill: theme.palette.primary.white,
  // "&:hover": {
  //   fill: theme.palette.primary.blue,
  //   background: theme.palette.primary.blue,
  // },
  // "&:active": {
  //   fill: theme.palette.primary.tertiaryBlue,    
  // },
}));
