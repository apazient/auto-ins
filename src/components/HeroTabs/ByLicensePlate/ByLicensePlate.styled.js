import { InputBase, styled } from "@mui/material";

export const InputStyled = styled(InputBase)(({ theme }) => ({
  width: "100%",
  height: 56,
  padding: 16,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
  "& #license-plate": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    lineHeight: 1.5 /* 24px */,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
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
