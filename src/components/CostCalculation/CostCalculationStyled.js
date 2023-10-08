import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { FormContainer } from "../../style/Global.styled";

export const FormContainerS = styled(FormContainer)(({ theme }) => ({
  "& span": { color: theme.palette.primary.main },
}));

export const StackS = styled(Stack)(({ theme }) => ({
  padding: "16px",
  textAlign: "center",
  color: theme.palette.primary.main,
}));

export const Item = styled(Paper)(({ theme }) => ({
  "&.MuiPaper-root": {
    padding: "16px",
    textAlign: "center",
    borderRadius: "50px",
    boxShadow: "none",
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));
