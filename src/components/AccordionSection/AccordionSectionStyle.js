import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";

import { ContainerSection } from "../../style/Global.styled";

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

  "& .subtitle": {
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Open Sans",
      fontSize: "18px",
      lineHeight: "1.5",
      fontWeight: "bold",
    },
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
    padding: "120px 317px",
  },
}));
