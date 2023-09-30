import { Box, List, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/system";
import { ContainerSection } from "../../style/Global.styled";

export const ItemS = styled(List)(({ theme }) => ({
  color: theme.palette.primary.main,
  listStyle: "decimal",
  padding: "0 0 0 2em",
}));
export const AbsatzS = styled(Typography)(({ theme }) => ({
  "&.MuiTypography-caption": {
    textAlign: "justify",
    margin: "1em 0",
  },
}));

export const WrapperS = styled(Box)(({ theme }) => ({
  // overflow: "hidden",
}));
export const CollapseContainer = styled(Collapse)(({ theme }) => ({}));
export const InfoSectionContainer = styled(ContainerSection)(({ theme }) => ({
  display: "block",
  backgroundColor: theme.palette.primary.white,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const ListText = styled(Box)(({ theme }) => ({
  display: "block",

  textAlign: "justify",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    height: "200px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "750px",
  },
}));
