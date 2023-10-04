import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const NavStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "16px 16px 0 16px",
  gap: "4px",
  [theme.breakpoints.up("sm")]: {
    padding: "16px 24px 0 24px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "16px 120px 0 120px",
  },
}));
export const BoxImgRotate = styled(Box)(({ theme }) => ({
  rotate: "-90deg",
  width: "24px",
  height: "24px",
  fill: theme.palette.primary.lightBlue2,
  stroke: theme.palette.primary.main,
}));

export const BoxImg = styled(BoxImgRotate)(({ theme }) => ({
  rotate: "none",
}));
