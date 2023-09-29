import { InputBase, styled } from "@mui/material";
import Select from "react-select";
import { BlueButton } from "../../../style/Global.styled";

export const SelectStyled = styled(Select)(({ theme }) => ({
  "& .customSelect__control": {
    width: "100%",
    padding: 16,
    height: 56,
    borderRadius: 50,
    backgroundColor: "#FEFEFF",
  },
  "& .customSelect__value-container": { height: 24, padding: 0 },
  "& .customSelect__indicators": {
    height: 24,
    padding: 0,
    "& svg": {
      width: 24,
      height: 24,
    },
  },
  "& .customSelect__input-container": {
    height: 24,
    color: "#030303",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "150%" /* 24px */,
    margin: 0,
    padding: 0,
  },
  "& .customSelect__indicator-separator": {
    display: "none",
  },
  "& .customSelect__dropdown-indicator": {
    padding: 0,
    "& svg": {
      width: 24,
      height: 24,
    },
  },
  "& .customSelect__menu": { marginTop: 0, borderRadius: 50 },
  // "& .customSelect__value-container": { height: 24 },
  [theme.breakpoints.up("sm")]: {
    "& .customSelect__control": {
      height: 59,
    },
  },
}));
export const InputStyled = styled(InputBase)(({ theme }) => ({
  width: "100%",
  height: 56,
  padding: 16,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
  "& #location-input": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    lineHeight: 1.5 /* 24px */,
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
    // fontSize: "2.375rem",
    // lineHeight: "3.562rem",
  },
}));
export const SubmitButton = styled(BlueButton)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("sm")]: {
    marginTop: 8,
  },
}));
export const InputContStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    gap: 16,
  },
}));
export const AllInputContStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));
export const FormStyled = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
}));
export const CheckboxContStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
