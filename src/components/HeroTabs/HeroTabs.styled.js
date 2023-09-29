import {
  Tabs,
  Tab,
  styled,
  Typography,
  autocompleteClasses,
} from "@mui/material";

export const TabStyled = styled(Tab)(({ theme }) => ({
  fontFamily: "OpenSans-SemiBold",
  fontSize: "1rem",
  fontWeight: 700,
  textTransform: "none",
  border: `1px solid ${theme.palette.primary.main}`,
  color: "rgba(254, 254, 255, 0.60)",
  padding: 0,
  maxWidth: 160,
  textAlign: "left",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flex: "1 1 0%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
    justifyContent: "center",
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "center",
  },
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
    // [theme.breakpoints.up("sm")]: {
    //   gap: 16,
    //   justifyContent: "spase-betwen",
    // },
  },
}));
export const TabsContainer = styled("div")(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.secondaryDark}`,

  paddingTop: 24,
  paddingLeft: 16,
  paddingRight: 16,
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("sm")]: {
    paddingTop: 64,
    paddingLeft: 32,
    paddingRight: 32,
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: 104,
    paddingLeft: 120,
    paddingRight: 120,
    maxWidth: "1160px",
  },
}));

export const TitleStaled = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "24px",

  [theme.breakpoints.up("sm")]: {
    marginBottom: "48px",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "80px",
  },
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
