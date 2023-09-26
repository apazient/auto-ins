import { Tabs, Tab, styled } from "@mui/material";

export const TabStyled = styled(Tab)(({ theme }) => ({
  fontFamily: "OpenSans-SemiBold",
  fontSize: 16,
  fontWeight: 700,
  textTransform: "none",
  border: `1px solid ${theme.palette.primary.main}`,
  color: "rgba(254, 254, 255, 0.60)",
  "&.Mui-selected": {
    color: "#FEFEFF",
  },
  "& .MuiTabs-flexContainer button": {
    maxWidth: 163,
    //   wordBreak: "break-word",
  },
}));
export const TabsStyled = styled(Tabs)(({ theme }) => ({
  width: "100%",
  paddingTop: 8,
  paddingBottom: 8,
  justifyContent: "center",
  alignItems: "flex-start",
  alignSelf: "stretch",
  borderBottom: `1px solid ${theme.palette.primary.secondaryWhite}`,
  "& .MuiTabs-flexContainer": {
    gap: 16,
  },
}));
export const TabsContainer = styled("div")(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.secondaryDark}`,
  maxWidth: 375,
  paddingLeft: 16,
  paddingRight: 16,
  marginLeft: "auto",
  marginRight: "auto",
}));
