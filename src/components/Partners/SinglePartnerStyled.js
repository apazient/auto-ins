import { Box, Container, Typography, styled } from "@mui/material";

export const SinglePartnerContainerS = styled(Container)(({ theme }) => ({
  boxSizing: "border-box",
  color: "black",
  width: "131px",
  height: "119px",
  padding: "16px",
  border: `1px solid ${theme.palette.primary.secondaryDark}`,
  borderRadius: "25px",
  [theme.breakpoints.up("sm")]: {
    width: "280px",
    height: "148px",
    padding: "24px",
    borderRadius: "50px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "200px",
    padding: "36px",
  },
}));

export const LogoBoxPartnerS = styled(Box)(({ theme }) => ({
  width: "100%",
  // height: '100%',
  // maxWidth: "131px",
  // height: "119px",
  // [theme.breakpoints.up("sm")]: {
  //   maxWidth: "280px",
  //   height: "148px",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   maxWidth: "131px",
  //   height: "119px",
  // },
}));

export const RatingBoxPartnersS = styled(Box)(({ theme }) => ({
  outline: "1px solid green",
  width: "100%",
  height: "100%",
  //   height: "49px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  [theme.breakpoints.up("sm")]: {
    height: "56px",
    gap: "8px",
  },
}));

export const RatingTextS = styled(Typography)(({ theme }) => ({
  "&.ratingText": {
    margin: "0",
    fontSize: "14px",
    fontFamily: "OpenSans, sans-serif",
    fontWeight: 600,
    color: theme.palette.primary.main,
    lineHeight: "1.5",

    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
}));
