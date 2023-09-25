import { createTheme } from "@mui/material";
import {
  openSansBold,
  openSansExtraBold,
  openSansRegular,
  openSansSemiBold,
} from "./assets/fonts/fonts";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#030303",
      secondaryDark: "rgba(3, 3, 3, 0.6)",
      tertiaryDark: "rgba(3, 3, 3, 0.3)",
      grey: "#D9D9D9",
      white: "#FEFEFF",
      secondaryWhite: "rgba(254, 254, 255, 0.6)",
      darkBlue: "#052A74",
      secondaryBlue: "#113FE3",
      tertiaryBlue: "#133FDA",
      blue: "#1547F8",
      lightBlue: "#6082F8",
      lightBlue2: "#BCC3E7",
      background: "#F7F8FF",
      yellow: "#FCD922",
      secondaryYellow: "#F4D220",
      tertiaryYellow: "#E8C71A",
      lightYellow: "#FBEA92",
      red: "#E04040",
      green: "#439450",
    },

    error: {
      main: "#E04040",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily:
      "OpenSans-Regular, OpenSans-Bold, OpenSans-ExtraBold, OpenSans-SemiBold, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: [
          { "@font-face": openSansRegular },
          { "@font-face": openSansBold },
          { "@font-face": openSansExtraBold },
          { "@font-face": openSansSemiBold },
        ],
        body: {
          backgroundColor: "#030303",
        },
      },
    },
  },
});

//font-size: 24px/16px;
theme.typography.h1 = {
  [theme.breakpoints.up("xs")]: {
    color: theme.palette.primary.white,
    fontSize: "1.5rem",
    fontFamily: "OpenSans-Bold, sans-serif",
    fontWeight: 800,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.375rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
  },
};

theme.typography.h2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.375rem",
    color: theme.palette.primary.white,
    fontFamily: "OpenSans-Bold, sans-serif",
    fontWeight: 800,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.375rem",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
    fontFamily: "OpenSans-Bold, sans-serif",
    fontWeight: 800,
    color: theme.palette.primary.white,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.375rem",
  },
};

theme.typography.body1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.875rem",
    fontFamily: "OpenSans-Regular, sans-serif",
    fontWeight: 400,
    color: theme.palette.primary.white,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
};

//styles section-questions
theme.typography.subtitle1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
    fontFamily: "OpenSans-Bold, sans-serif",
    fontWeight: 700,
    color: theme.palette.primary.white,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.125rem",
  },
};

//styles section-readMore
theme.typography.subtitle2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.875rem",
    fontFamily: "OpenSans-SemiBold, sans-serif",
    fontWeight: 600,
    color: theme.palette.primary.white,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.125rem",
  },
};
