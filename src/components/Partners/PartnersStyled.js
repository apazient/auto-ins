import { Container, List, Typography, styled } from "@mui/material";

export const PartnersContainerS = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
