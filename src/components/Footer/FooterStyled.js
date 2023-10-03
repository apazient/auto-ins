import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";

export const FooterS = styled(Container)(({ theme }) => ({
  padding: "0",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    padding: "32px 0 8px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "48px 0 16px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "64px 0 32px",
  },
}));

export const FooterBoxS = styled(Container)(({ theme }) => ({
  margin: "0",
  [theme.breakpoints.up("xs")]: {
    width: "343px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "28px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "328px",
    height: "282px",
    gap: "32px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "370px",
  },
}));

export const LogoBox = styled(Box)(({ theme }) => ({
  width: "163px",
  height: "97px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    width: "174px",
    height: "104px",
  },
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  "&.logoText": {
    fontFamily: "OpenSans, sans-serif",
    fontSize: "33px",
    fontWeight: 700,
    lineHeight: "1.39",
    [theme.breakpoints.up("sm")]: {
      fontSize: "36px",
      lineHeight: "1.36",
    },
  },
}));

export const BoxIconS = styled(Box)(({ theme }) => ({
  "&.logoIcon": {
    width: "110px",
    height: "52px",
    [theme.breakpoints.up("sm")]: {
      width: "117px",
      height: "55px",
    },
  },
  "&.socialIconBox": {
    width: "24px",
    height: "24px",
  },
}));

export const UlListS = styled(List)(({ theme }) => ({
  width: "100%",
  padding: "0px",
  margin: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "0px",
  },
  "&.centered": {
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      gap: "17px",
    },
    [theme.breakpoints.up("sm")]: {
      gap: "16px",
    },
  },
}));

export const LiItemS = styled(ListItem)`
  cursor: pointer;
  width: auto;  
`;

export const ChapterSpan = styled(Typography)(({ theme }) => ({
  "&.chapterSpan": {
    fontFamily: "OpenSans, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "1.5",
    color: theme.palette.primary.white,
    transition: "color 250ms linear",
    "&:hover": {
      color: theme.palette.primary.blue,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },
  "&.bottomSpan": {
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "1.5",
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
