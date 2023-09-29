import { Container, List, Typography, styled } from "@mui/material";

export const PartnersContainerS = styled(Container)(({ theme }) => ({
  padding: "56px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.background,

  [theme.breakpoints.up("sm")]: {
    padding: "72px 32px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "120px",
  },
}));
export const TitleS = styled(Typography)(({ theme }) => ({
  "&.titleBlack": {
    color: theme.palette.primary.main,
    marginBottom: "72px",
  },
}));
export const UlPartnersListS = styled(List)(({ theme }) => ({
  padding: '0',
  marginBottom: "48px",
  display: "flex",  
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
  [theme.breakpoints.up("sm")]: {    
    gap: "24px",
  },
  '&.additionalPartners':{
    marginBottom: "0",    
  }
}));
