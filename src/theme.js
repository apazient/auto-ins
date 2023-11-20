import { createTheme } from "@mui/material/styles";
import OpenSansRegular from "./fonts/open-sans-v36-cyrillic_latin-regular.woff2";
import OpenSansSemiBold from "./fonts/open-sans-v36-cyrillic_latin-600.woff2";
import OpenSansBold from "./fonts/open-sans-v36-cyrillic_latin-700.woff2";
import OpenSansExtraBold from "./fonts/open-sans-v36-cyrillic_latin-800.woff2";
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
    inputBase: {
      main: "#052A74",
    },
  },
  primary: {
    "&:hover": {
      color: "#1547F8",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 744,
      md: 900,
      ml: 1160,
      lg: 1400,
      xl: 1536,
    },
  },
  typography: {
    // fontFamily: "Open Sans, sans-serif",
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face {
             font-display: swap;
             font-family: 'Open Sans';
             font-style: normal;
             font-weight: 400;
             src: local('OpenSan-Regular'), url(${OpenSansRegular}) format('woff2');
         }
         @font-face {
             font-display: swap;
             font-family: 'Open Sans';
             font-style: normal;
             font-weight: 600;
             src: url(${OpenSansSemiBold}) format('woff2');
         }
         @font-face {
            font-display: swap;  
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            src: url(${OpenSansBold}) format('woff2');   
        }

        @font-face {
            font-display: swap;   
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 800;
            src: url(${OpenSansExtraBold}) format('woff2');   
        }
         
         html {font-size: 16px}
         body {background-color: #030303; font-family: 'Open Sans', sans-serif; font-weight: 400; color: #FEFEFF; font-size: 1rem; line-height: 1.5em; }
         img {display: block; max-width: 100%; height: auto}
         ul {margin: 0; padding: 0}
         h1 {margin: 0; padding: 0}
         h2 {margin: 0; padding: 0}
         h3 {margin: 0; padding: 0}
         h4 {margin: 0; padding: 0}
         h5 {margin: 0; padding: 0}
         h6 {margin: 0; padding: 0}
         p {margin: 0; padding: 0}`,
    },
  },
});

//font-size: 24px/16px;
theme.typography.h1 = {
  [theme.breakpoints.up("xs")]: {
    color: theme.palette.primary.white,
    fontSize: "1.5rem",
    fontFamily: "Open Sans",
    fontWeight: 800,
    lineHeight: "2.25rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.375rem",
    lineHeight: "3.562rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
    lineHeight: "4.5rem",
  },
};

theme.typography.h2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.375rem",
    color: theme.palette.primary.white,
    fontFamily: "Open Sans",
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
    fontFamily: "Open Sans",
    // fontFamily: "OpenSans-ExtraBold, sans-serif",
    fontWeight: 800,
    color: theme.palette.primary.white,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.375rem",
    lineHeight: "2.06rem",
  },
};

theme.typography.body1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.875rem",

    fontFamily: "Open Sans",
    fontWeight: 400,
    color: theme.palette.primary.white,
    lineHeight: "1.5em",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
};

//styles section-questions
theme.typography.subtitle1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
    fontFamily: "Open Sans",
    // fontFamily: "OpenSans-Bold, sans-serif",
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
    fontFamily: "Open Sans",
    // fontFamily: "OpenSans-SemiBold, sans-serif",
    fontWeight: 600,
    color: theme.palette.primary.main,
    lineHeight: "1.31rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.125rem",
  },
};

theme.typography.body2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.875rem",
    fontFamily: "Open Sans",
    // fontFamily: "OpenSans-SemiBold, sans-serif",
    fontWeight: 400,
    color: theme.palette.primary.main,
    lineHeight: "1.31",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.125rem",
  },
};
theme.typography.caption = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.875rem",
    fontFamily: "Open Sans",
    // fontFamily: "OpenSans-Regular, sans-serif",
    fontWeight: 400,
    color: theme.palette.primary.main,
    lineHeight: "1.5",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {},
};
theme.typography.formTitle = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
    // fontFamily: "Open Sans",
    // fontFamily: "OpenSans-ExtraBold, sans-serif",
    fontWeight: 800,
    color: theme.palette.primary.main,
    lineHeight: 1.5,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.375rem",
  },
  [theme.breakpoints.up("lg")]: {},
};
theme.typography.inputLable = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.875rem",
    // fontFamily: "OpenSans-SemiBold, sans-serif",
    fontWeight: 600,
    fontFamily: "Open Sans",
    color: theme.palette.primary.main,
    lineHeight: 1.5,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  "&.disabled": {
    color: `${theme.palette.primary.tertiaryDark}`,
  },
};

theme.typography.inputSpan = {
  fontSize: "12px",
  // fontFamily: "OpenSans-Regular, sans-serif",
  fontWeight: 400,
  fontFamily: "Open Sans",
  color: theme.palette.primary.main,
  lineHeight: "1.5rem",
  margin: "4px 0 16px",
  [theme.breakpoints.up("md")]: {
    margin: "8px 0 16px",
  },
  [theme.breakpoints.up("lg")]: {
    margin: "16px 0 24px",
  },
};
