import { Box, styled } from "@mui/material";

export const BoxIconS = styled(Box)(({theme})=>({
  width: '24px',  
  height: '24px',
  stroke: theme.palette.primary.main,
  fill: theme.palette.primary.white,
  // display: 'flex',
  // alignItems: 'flex-end',  
}));
