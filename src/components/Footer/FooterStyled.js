import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
  styled,
} from "@mui/material";

export const FooterS = styled(Container)`
  outline: 1px solid red;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterBoxS = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "343px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "64px auto 32px",
    gap: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "328px",
    height: "282px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "370px",
  },
}));

export const imgBox = styled(Box)``;

export const UlListS = styled(List)`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  &.centered {
    justify-content: center;
    gap: 16px;
  }
`;

export const LiItemS = styled(ListItem)(({ theme }) => ({
  width: "auto",
  "&.liSocialIcon": {
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.primary.white,        
    justifyContent: "center",
    borderRadius: "50%",
  },
}));

export const ChapterSpan = styled(Typography)(({ theme }) => ({
  fontFamily: "OpenSans sans-serif",
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  "&bottomSpan": {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
  },
}));

export const BottomSpan = styled(Typography)(({ theme }) => ({
  fontFamily: "OpenSans sans-serif",
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
  },
}));
