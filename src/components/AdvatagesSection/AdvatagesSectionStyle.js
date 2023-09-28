import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const GridContainer = styled(Grid)(({ theme }) => ({
  gap: "16px",
  [theme.breakpoints.up("sm")]: {
    gap: "24px",
  },
}));
export const ItemS = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
}));

export const TextContainerS = styled(Box)(({ theme }) => ({
  // width: "81%",
  // [theme.breakpoints.up("sm")]: {
  //   width: "242px",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   width: "267px",
  // },
}));
export const BoxImgS = styled(Box)(({ theme }) => ({
  fill: theme.palette.primary.white,
  [theme.breakpoints.up("xs")]: {
    width: "64px",
    height: "64px",
    margin: "0 auto",
    padding: "10px 9px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "78px",
    height: "78px",
    padding: "12px ",
    flexShrink: "0",
  },
  [theme.breakpoints.up("lg")]: {
    width: "96px",
    height: "96px",
    padding: "15px ",
  },
}));
