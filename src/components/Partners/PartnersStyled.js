import { Container, Typography, styled } from "@mui/material";

export const PartnersContainerS = styled(Container)(({theme})=>({
    padding: '56px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.background,



    [theme.breakpoints.up('sm')]:{
        padding: '72px 32px',
    },
    [theme.breakpoints.up('lg')]:{
        padding: '120px',
    },
}))
export const TitleS = styled(Typography)(({theme})=>({
    '&.titleBlack':{
        color: theme.palette.primary.main,
        marginBottom: '72px',
    }
}))