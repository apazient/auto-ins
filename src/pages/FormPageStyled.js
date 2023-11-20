import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    gap: "24px",
  },
}));
