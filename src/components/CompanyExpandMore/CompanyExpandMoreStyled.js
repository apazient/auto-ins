import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ExpandIconBox = styled(Box)(({ theme }) => ({
  stroke: theme.palette.primary.main,
  fill: theme.palette.primary.yellow,
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.yellow,

  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
