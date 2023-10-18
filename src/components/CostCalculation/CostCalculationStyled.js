import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { FormContainer, YellowButton } from "../../style/Global.styled";

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
    },
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
  [theme.breakpoints.up("sm")]: {
    width: "236px",
    padding: "16px 0",
    fontSize: "18px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "258px",
  },
}));
