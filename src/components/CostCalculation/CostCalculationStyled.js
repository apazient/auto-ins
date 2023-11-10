import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { FormContainer, YellowButton } from "../../style/Global.styled";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export const FormContainerS = styled(FormContainer)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },

  "& span": { color: theme.palette.primary.main },
  "& .wrapContent": {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  "&.costCalc": {
    overflow: "visible",
  },
}));

export const StackS = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  padding: "16px 0",
  textAlign: "center",
  color: theme.palette.primary.main,

  [theme.breakpoints.up("lg")]: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  "&.MuiPaper-root": {
    padding: "8px 12px",
    textAlign: "center",
    borderRadius: "50px",
    boxShadow: "none",
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const YellowButtonS = styled(YellowButton)(({ theme }) => ({
  width: "100%",
  height: "56px",
  [theme.breakpoints.up("sm")]: {
    width: "236px",
    height: "59px",
    padding: "16px 0",
    fontSize: "18px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "258px",
  },
}));
//Datetime
export const StyledDatatimeWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "&.rdtPicker": {
    width: "280px",
    border: "none",
    borderRadius: "8px",
    background:
      "linear-gradient(360deg, rgba(83,61,186,1) 0%, rgba(80,48,154,1) 35.94%, rgba(106,70,165,1) 61.04%, rgba(133,93,175,1) 100%)",
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
  },
  "& .rdtPicker td.rdtActive, .rdtPicker td.rdtActive:hover": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
  },
  "& .rdtPicker td.rdtToday:before": {
    display: "none",
  },
  "& td.rdtActive.rdtToday:before": {
    display: "none",
  },
  "& .rdtPicker td:hover": {
    background:
      "linear-gradient(96.76deg, #FFC727 -16.42%, #9E40BA 97.04%, #7000FF 150.71%)",
    textShadow: "0 -1px 0 rgba (0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
  "&.rdtPicker thead tr:first-of-type th:hover": {
    background: "transparent",
  },
}));

export const StyledDatetime = styled(Datetime)(({ theme }) => ({
  "& input": {
    width: "280px",
    fontSize: "18px",
    border: "none",

    [theme.breakpoints.up("sm")]: {
      width: "181px",
    },
    "&:focus": { outline: "none" },
    "&::placeholder": { backgroundColor: "transparent" },
  },
}));
