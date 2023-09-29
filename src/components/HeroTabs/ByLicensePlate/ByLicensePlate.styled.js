import { InputBase, styled } from "@mui/material";

export const InputStyled = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: 16,
  marginTop: 8,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
  "& #license-plate": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    lineHeight: 1.5 /* 24px */,
  },
}));
