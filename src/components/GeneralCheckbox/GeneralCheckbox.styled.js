import { Box, Checkbox, styled } from "@mui/material";

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
