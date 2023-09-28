import { Tabs, Tab, styled, Typography } from "@mui/material";

export const TabStyled = styled(Tab)(({ theme }) => ({
  fontFamily: "OpenSans-SemiBold",
  fontSize: 16,
  fontWeight: 700,
  textTransform: "none",
  border: `1px solid ${theme.palette.primary.main}`,
  color: "rgba(254, 254, 255, 0.60)",
  padding: 0,
  width: 163,
  textAlign: "left",
  justifyContent: "start",
  "&.Mui-selected": {
    color: "#FEFEFF",
  },
}));
export const TabsStyled = styled(Tabs)(({ theme }) => ({
  width: "100%",
  paddingTop: 8,
  paddingBottom: 8,
  marginBottom: 16,
  alignItems: "flex-start",
  alignSelf: "stretch",
  height: 64,
  borderBottom: `1px solid ${theme.palette.primary.secondaryWhite}`,
  "& .MuiTabs-flexContainer": {
    gap: 16,
    justifyContent: "spase-betwen",
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
export const TypographyStyled = styled(Typography)(() => ({
  "& h1.MuiTypography-root.MuiTypography-h1.MuiTypography-alignCenter": {
    color: " #FEFEFF",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: "150%" /* 36px */,
    width: "fit-content",
    marginBottom: "24px",
  },
}));
