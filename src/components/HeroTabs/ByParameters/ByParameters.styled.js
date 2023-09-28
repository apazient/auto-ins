import { InputBase, styled } from "@mui/material";
import Select from "react-select";
import { BlueButton } from "../../../style/Global.styled";

export const SelectStyled = styled(Select)(({ theme }) => ({
  "& .customSelect__control": {
    width: "100%",
    padding: 16,
    borderRadius: 50,
    backgroundColor: "#FEFEFF",
    marginTop: 8,
    marginBottom: 8,
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
  // "& .customSelect__value-container": { height: 24 },
  // "& .customSelect__value-container": { height: 24 },
}));
export const InputStyled = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: 16,
  marginTop: 8,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
  "& #location-input": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    lineHeight: 1.5 /* 24px */,
  },
}));
export const SubmitButton = styled(BlueButton)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}));
export const LableStyled = styled("lable")(({ theme }) => ({
  color: `${theme.palette.primary.white}`,
  fontFamily: "OpenSans-SemiBold",
  fontSize: 14,
  fontWeight: "400",
  lineHeight: "150%" /* 21px */,
}));
