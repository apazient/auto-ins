import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import { ContainerSection } from "../../style/Global.styled";

export const MainText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "32px",

  [theme.breakpoints.up("sm")]: {
    marginBottom: "56px",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "72px",
  },
}));
export const Accordions = styled(Accordion)(({ theme }) => ({
  "&.MuiAccordion-root": {
    borderBottom: `1px solid ${theme.palette.primary.white}`,
    borderRadius: "0",
  },
  backgroundColor: theme.palette.primary.main,
}));

export const AccordionsSummary = styled(AccordionSummary)(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    [theme.breakpoints.up("xs")]: {
      margin: "16px 0",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "24px 0",
    },
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    [theme.breakpoints.up("xs")]: {
      margin: "16px 0",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "24px 0",
    },
  },
  "&.MuiAccordionSummary-root": {
    padding: 0,
  },
}));

export const AccordionsDetails = styled(AccordionDetails)(({ theme }) => ({
  "&.MuiAccordionDetails-root": {
    padding: "0 0 16px 0",
    [theme.breakpoints.up("sm")]: {
      padding: "0 0 24px 0",
    },
  },
}));

export const ContAccordion = styled(ContainerSection)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("lg")]: {
    maxWidth: "1006px",
  },
}));
