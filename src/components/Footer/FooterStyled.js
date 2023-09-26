import { List, ListItem, Typography, styled } from "@mui/material";

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
    width: 'auto',
  '&.liSocialIcon': {
    width: '40px',
    height: '40px',
    backgroundColor: theme.palette.primary.white,
    // display: 'flex',
    // alignItems: 'center',//default: 'center
    justifyContent: 'center',
    borderRadius: '50%',
  }
}))
  
;

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
}));
