import { Box, Typography, styled } from "@mui/material";

export const InputBoxS = styled(Box)(({ theme }) => ({
  marginBottom: "24px",
  [theme.breakpoints.up("md")]: {
    marginBottom: "28px",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "48px",
  },
}));

export const SpanS = styled(Typography)`
  display: block;
`;

