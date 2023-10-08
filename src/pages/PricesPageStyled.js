import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Line = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  [theme.breakpoints.up("sm")]: { marginBottom: "32px" },
  [theme.breakpoints.up("lg")]: { marginBottom: "40px" },
  "& .MuiTypography-root": {
    color: theme.palette.primary.main,
  },
  "&::after": {
    content: "''",
    backgroundColor: theme.palette.primary.white,
    width: "100%",
    height: "1px",
    display: "block",
    marginTop: "8px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "16px",
    },
  },
}));
