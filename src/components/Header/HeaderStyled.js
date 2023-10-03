import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";

export const HeaderS = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: "8px 16px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "16px 32px",
  },
}));

export const HeaderBoxS = styled(Container)(({ theme }) => ({
  maxWidht: "1160px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.up("xs")]: {
    "&.MuiContainer-root": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
}));

export const LogoBoxS = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "70px",
  height: "42px",

  [theme.breakpoints.up("sm")]: {
    width: "80px",
    height: "48px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "107px",
    height: "64px",
  },
}));

export const BoxIconHS = styled(Box)(({ theme }) => ({
  "&.logoIcon": {
    width: "47px",
    height: "23px",
    [theme.breakpoints.up("sm")]: {
      width: "54px",
      height: "26px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "72px",
      height: "34px",
    },
  },
  "&.socialIconBox": {
    width: "24px",
    height: "24px",
  },
  "&.burgerMenuIcon": {
    width: "32px",
    height: "32px",
    stroke: theme.palette.primary.white,
  },
}));

export const LogoTextHS = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontFamily: "OpenSans, sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "0.74",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
    lineHeight: "1.38",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "22px",
    lineHeight: "1.36",
  },
}));

export const UlListHS = styled(List)`
  width: 370px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.socialIcons {
    width: 184px;
  }
`;

export const LiItemHS = styled(ListItem)`
  cursor: pointer;
  width: auto;
`;

export const ChapterSpanHS = styled(Typography)(({ theme }) => ({
  "&.chapterSpan": {
    fontFamily: "OpenSans, sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "1.5",
    color: theme.palette.primary.white,
    transition: "color 250ms linear",
    "&:hover": {
      color: theme.palette.primary.blue,
    },
  },
}));

export const LinkS = styled(Link)(({ theme }) => ({  
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.primary.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",    
    borderRadius: "50%",
    stroke: theme.palette.primary.main,
    fill: "none",
    transition: "stroke 250ms linear",
    "&:hover": {
      stroke: theme.palette.primary.blue,    
  },
}));
