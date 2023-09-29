import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

export const GridContainer = styled(Grid)(({ theme }) => ({
  gap: "16px",
  "& .MuiGrid2-root": {},
  [theme.breakpoints.up("sm")]: {
    gap: "24px",
  },
}));
export const ItemS = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
}));

export const TextContainerS = styled(Box)(({ theme }) => ({
  width: "343px",
  [theme.breakpoints.up("sm")]: {
    width: "242px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "266px",
  },
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
  },
  [theme.breakpoints.up("lg")]: {
    width: "96px",
    height: "96px",
    padding: "15px ",
  },
}));
