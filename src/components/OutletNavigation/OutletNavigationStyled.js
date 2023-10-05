import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Breadcrumbs } from "@mui/material";

export const BreadcrumbsStyled = styled(Breadcrumbs)(({ theme }) => ({
  "&.MuiBreadcrumbs-root": {
    marginBottom: "20px",
    padding: "0",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "80px",
    },
  },

  "& .MuiBreadcrumbs-separator": {
    marginLeft: "2px",
    marginRight: "2px",
  },
  "& .MuiBreadcrumbs-li": {
    ":last-child": {
      "& .MuiTypography-root": {
        color: theme.palette.primary.main,
      },
    },
  },
  "& .MuiTypography-root": {
    color: theme.palette.primary.secondaryDark,
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
  [theme.breakpoints.up("sm")]: {
    padding: "16px 24px 0 24px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "16px 120px 0 120px",
  },
}));
export const BoxImgRotate = styled(Box)(({ theme }) => ({
  rotate: "-90deg",
  width: "24px",
  height: "24px",
  fill: theme.palette.primary.lightBlue2,
  stroke: theme.palette.primary.secondaryDark,
}));

export const BoxImg = styled(BoxImgRotate)(({ theme }) => ({
  rotate: "none",
}));
