import { Box, styled } from "@mui/material";

export const InputBoxS = styled(Box)(({theme})=>({
    marginBottom: '24px',
    [theme.breakpoints.up('md')]:{
        marginBottom: '28px',
    },
    [theme.breakpoints.up('lg')]:{
        marginBottom: '48px',
    }
}))

export const BtnBoxS = styled(Box)(({theme})=>({    
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    [theme.breakpoints.up("sm")]:{
        flexDirection: "row",
        gap: "0",
        justifyContent: "space-between",
    }
}))