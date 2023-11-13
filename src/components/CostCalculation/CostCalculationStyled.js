import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { FormContainer, YellowButton } from "../../style/Global.styled";
import Datetime from "react-datetime";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/material";

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
  position: "relative",
  textAlign: "left",

  "& input": {
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: "50px",
    border: `1px solid ${theme.palette.primary.main}`,
    fontFamily: "OpenSans-SemiBold",
    fontSize: "18px",
    fontWeight: "600",
  },
  "& input:hover, & input:focus-visible": {
    color: theme.palette.primary.blue,
    borderColor: theme.palette.primary.darkBlue,
    outline: "none",
  },

  "& .rdtPicker": {
    // width: "280px",
    border: "none",
    borderRadius: "8px",
    background: theme.palette.primary.white,
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
  },
  "& .rdtPicker td.rdtDay td.rdtNew td.rdtDisabled": {
    color: theme.palette.primary.tertiaryDark,
  },
  "& .rdtPicker td.rdtNew": {
    color: theme.palette.primary.main,
  },

  "& .rdtPicker td.rdtActive, .rdtPicker td.rdtActive:hover": {
    backgroundColor: theme.palette.primary.blue,
    borderRadius: "20px",
  },
  "& .rdtPicker td.rdtToday:before": {
    display: "none",
  },
  "& td.rdtActive.rdtToday:before": {
    display: "none",
  },
  "& .rdtPicker td:hover": {
    backgroundColor: theme.palette.primary.blue,
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
export const BoxImg = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "5px",
  right: "15px",
  pointerEvents: "none",
  width: "32px",
  height: "32px",
  fill: theme.palette.primary.main,
  padding: "0",

  [theme.breakpoints.up("sm")]: {},
}));
