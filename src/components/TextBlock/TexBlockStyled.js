import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const AbsatzS = styled(Typography)(({ theme }) => ({
  "&.MuiTypography-caption": {
    textAlign: "justify",
    margin: "1em 0",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    whiteSpace: "pre-wrap",
    overflow: "hidden",
  },
}));

export const WrapperS = styled(Box)(({ theme }) => ({
  overflow: "hidden",
}));
