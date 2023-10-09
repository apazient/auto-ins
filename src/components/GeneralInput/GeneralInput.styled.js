import { Box, OutlinedInput, styled } from "@mui/material";

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
  "&:hover, &:focus": {
    border: `1px solid ${theme.palette.primary.darkBlue}`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.darkBlue}!important`,
      // border: `none!important`,
    },
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
  },
}));
