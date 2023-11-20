import { Box, OutlinedInput, Typography, styled } from "@mui/material";

export const InputContStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  [theme.breakpoints.up("sm")]: {
    gap: 16,
  },
}));

export const InputStyled = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  height: 56,
  padding: 16,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
  outline: `none`,

  "&.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.Mui-focused":
    { outline: `none`, border: "none" },
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "Open Sans",
    fontSize: 16,
    lineHeight: "150%" /* 24px */,
    "&:-webkit-autofill": {
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: theme.palette.primary.main,
    },
    "&:-webkit-autofill:focus": {
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },

  "& fieldset.MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
  },
}));
export const LableStyled = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& .errorMessages": {
    color: theme.palette.primary.red,
    textAlign: "end",
  },
}));
