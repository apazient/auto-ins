import { styled } from "@mui/material";
import Select from "react-select";
import { BlueButton } from "../../../style/Global.styled";

export const SelectStyled = styled(Select)(() => ({
  width: "100%",
}));
export const InputStyled = styled("input")(({ theme }) => ({
  width: "100%",
  padding: 16,
  fontFamily: "OpenSans-SemiBold",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: 1.5 /* 24px */,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
}));
export const SubmitButton = styled(BlueButton)(() => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
}));
