import { Box, OutlinedInput, Select, styled } from "@mui/material";

export const InputContStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    gap: 16,
  },
}));
export const InputStyled = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  height: 56,
  padding: 16,
  borderRadius: 50,
  backgroundColor: theme.palette.primary.lightBlue2,
  border: `none`,
  outline: `none`,
  "&:hover, &:focus": {
    border: `none`,
    outline: `none`,
  },
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    lineHeight: "150%" /* 24px */,
    border: `none`,
    outline: `none`,
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
    border: `1px solid ${theme.palette.primary.white}`,
    outline: `none`,
    "&:hover, &:focus": {
      border: `none`,
    },
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
  },
}));
export const SelectStyled = styled(Select)(({ theme }) => ({
  "&.MuiButtonBase-root.MuiMenuItem-root": {
    padding: 12,
  },
  "& .MuiPaper-root": {
    borderRadius: 25,
  },

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: 187,
  },
  [theme.breakpoints.up("lg")]: {
    width: 272,
  },
}));

const ITEM_HEIGHT = 59;
const ITEM_PADDING_TOP = 0;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 187,
    },
  },
};
