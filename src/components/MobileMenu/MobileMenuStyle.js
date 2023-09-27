import styled from "@emotion/styled";
import { Drawer } from "@mui/material";
import { Box } from "@mui/system";

export const BoxImg = styled(Box)(({ theme }) => ({
  stroke: theme.palette.primary.white,
  [theme.breakpoints.up("xs")]: {
    width: "32px",
    height: "32px",
  },
  [theme.breakpoints.up("sm")]: {},
}));

export const Menu = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    top: "80px",
  },
}));

export const BoxMenu = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
  color: theme.palette.primary.main,
  padding: "44px 24px 20px 24px",
  height: "100%",
}));
