import {
  Box,
  IconButton,
  Tooltip,
  styled,
  tooltipClasses,
} from "@mui/material";
import { WhiteButton } from "../../style/Global.styled";

export const SelectsContStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  "& .select-container": {
    gap: 4,
    "& .MuiTypography-body1": {
      color: "currentColor",
    },
    "& .customSelect__": {
      "&control": {
        backgroundColor: theme.palette.primary.lightBlue2,
        [theme.breakpoints.up("sm")]: {
          width: 187,
        },
        [theme.breakpoints.up("lg")]: {
          width: 272,
        },
      },
    },
    [theme.breakpoints.up("sm")]: {
      gap: 16,
    },
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: 24,
    width: "fit-content",
  },
}));
export const FilterButtonStyled = styled(WhiteButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  marginBottom: 0,
  backgroundColor: "transparent",

  "&.MuiButtonBase-root.MuiButton-root": {
    border: `1px solid ${theme.palette.primary.white}`,
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.5 /* 24px */,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
}));
export const ResetFilterButtonStyled = styled(IconButton)(({ theme }) => ({
  width: 48,
  height: 48,
  fill: "transparent",
  stroke: theme.palette.primary.main,
  padding: 0,

  "& svg": {
    stroke: theme.palette.primary.main,
  },
  "& svg:hover": {
    stroke: theme.palette.primary.darkBlue,
  },
  "&.MuiButtonBase-root": {
    backgroundColor: "transparent",
  },
}));

export const TooltipStyled = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.darkBlue,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.darkBlue,
    padding: 4,
    color: theme.palette.primary.white,
    fontFamily: theme.typography.fontFamily,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5 /* 18px */,
  },
}));
