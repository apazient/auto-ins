import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { FormContainer, YellowButton } from "../../style/Global.styled";

export const FormContainerS = styled(FormContainer)(({ theme }) => ({
  "& span": { color: theme.palette.primary.main },
}));

export const StackS = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "9px", // по макету должно быть 8px
  padding: "16px 0",
  textAlign: "center",
  color: theme.palette.primary.main,
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
    width: "237px", // по макету должно біть 236 px
  },
  [theme.breakpoints.up("lg")]: {
    width: "258px",
  },
}));
