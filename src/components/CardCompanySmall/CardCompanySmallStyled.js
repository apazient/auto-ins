import { styled } from "@mui/material";
import { FormContainer } from "../../style/Global.styled";

export const FormContainerS = styled(FormContainer)(({ theme }) => ({
  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
  },
}));
