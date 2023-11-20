import { OutlinedInput, styled } from "@mui/material";

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
    outline: "none",
    border:'none',
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
    outline: "none",
    border:'none',
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
  },
  [theme.breakpoints.up("lg")]: {
    width: 864,
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
