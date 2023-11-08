import {
  Box,
  Checkbox,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { BlueButton } from "../../style/Global.styled";

export const InputStyled = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  height: 56,
  padding: 16,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
  outline: `none`,
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    lineHeight: "150%" /* 24px */,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
  },
  [theme.breakpoints.up("lg")]: {
    width: 272,
  },
}));

export const DateInputS = styled(DatePicker)(({ theme }) => ({
  width: "100%",
  height: 56,
  padding: 16,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
  outline: `none`,
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    lineHeight: "150%" /* 24px */,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
  },
  [theme.breakpoints.up("lg")]: {
    width: 272,
  },
}));

export const InputSerchIcon = styled(InputAdornment)(({ theme }) => ({
  width: 24,
  height: 24,
  display: "block",
  stroke: theme.palette.primary.main,
  fill: "none",
}));
export const SubmitButton = styled(BlueButton)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: 16,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginTop: 8,
    fontSize: 18,
  },
  [theme.breakpoints.up("lg")]: {
    height: 59,
    marginTop: "auto",
    width: 272,
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

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 24,
  },
}));
export const FormStyled = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
  },
}));
export const AllCheckboxContStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    order: 1,
    width: 557,
  },
}));
export const CheckboxStyled = styled(Checkbox)(({ theme }) => ({
  "& svg": {
    height: 24,
    width: 24,
    stroke: theme.palette.primary.white,
  },
}));
export const CheckboxContainerStyled = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  stroke: theme.palette.primary.white,
  order: 1,
  "& .MuiFormControlLabel-root": {
    marginRight: 0,
    width: "fit-content",
  },
  "& .MuiButtonBase-root": {
    "&svg": {
      height: 16,
      width: 16,
    },
  },
}));
