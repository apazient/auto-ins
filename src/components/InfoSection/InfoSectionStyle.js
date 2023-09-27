import { List } from "@mui/material";
import { styled } from "@mui/system";
import { ContainerSection } from "../../style/Global.styled";

export const InfoSectionContainer = styled(ContainerSection)(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
}));

export const ListText = styled(List)(({ theme }) => ({
  display: "block",
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
