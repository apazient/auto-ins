import { Box, List, styled, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";

import { ContainerSection } from "../../style/Global.styled";

export const ItemS = styled(List)(({ theme }) => ({
  color: theme.palette.primary.main,
  listStyle: "decimal",
  padding: "0 0 0 2em",
}));
export const AbsatzS = styled(Typography)({
  "&.MuiTypography-caption": {
    textAlign: "justify",
    margin: "1.5em 0",
    "&:last-child": {
      marginBottom: 0,
    },
    "&:first-of-type": {
      marginTop: 0,
    },
  },
});

export const CollapseContainer = styled(Collapse)(({ theme }) => ({
  "& .MuiCollapse-vertical": {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    whiteSpace: "pre-wrap",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      WebkitLineClamp: 6,
    },
    [theme.breakpoints.up("lg")]: {
      WebkitLineClamp: 22,
    },
  },
  "&.MuiCollapse-entered": {
    "& .MuiCollapse-vertical": {
      display: "block",
      whiteSpace: "normal",
    },
  },
}));
export const WrapperS = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    gap: "24px",
  },
}));

export const InfoSectionContainer = styled(ContainerSection)(({ theme }) => ({
  display: "block",
  backgroundColor: theme.palette.primary.white,
  [theme.breakpoints.up("lg")]: {
    padding: "120px 0 120px 120px ",
  },
}));

export const ListText = styled(Box)({
  display: "block",
});
