import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

export const CheckboxContainerStyled = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  //   stroke: theme.palette.primary.white,
  order: 1,
  "& .MuiFormControlLabel-root": {
    marginRight: 8,
    width: "fit-content",
  },
  "& .MuiButtonBase-root": {
    "&svg": {
      height: 16,
      width: 16,
    },
  },
}));
export const CheckboxStyled = styled(Checkbox)(({ theme }) => ({
  "& svg": {
    height: 24,
    width: 24,
    // stroke: theme.palette.primary.white,
  },
}));
