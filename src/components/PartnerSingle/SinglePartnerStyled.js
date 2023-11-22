import { Box, ListItem, Typography, styled } from "@mui/material";

export const SinglePartnerContainerS = styled(ListItem)(({ theme }) => ({
  boxSizing: "border-box",
  color: theme.palette.primary.main,
  width: "163px",
  height: "151px",
  padding: "15px",
  margin: "0",
  border: `1px solid ${theme.palette.primary.secondaryDark}`,
  borderRadius: "25px",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    width: "328px",
    height: "196px",
    padding: "23px",
    borderRadius: "50px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "272px",
    height: "220px",
    padding: "35px",
  },
}));

export const LogoBoxPartnerS = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "62px",
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    height: "76px",
    marginBottom: "16px",
  },
}));

export const RatingBoxPartnersS = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  [theme.breakpoints.up("sm")]: {
    gap: "8px",
  },
}));

export const RatingTextS = styled(Typography)(({ theme }) => ({
  "&.ratingText": {
    margin: "0",
    fontSize: "14px",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    color: theme.palette.primary.main,
    lineHeight: "1.5",

    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
}));
