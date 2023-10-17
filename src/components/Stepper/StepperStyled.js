import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import StepLabel, { stepLabelClasses } from "@mui/material/StepLabel";

export const StepperStyled = styled(Stepper)(({ theme }) => ({
  "& .MuiStep-root": {
    paddingBottom: 0,
  },
  [theme.breakpoints.up("xs")]: { paddingBottom: "50px" },
  [theme.breakpoints.up("sm")]: { paddingBottom: "82px" },
  [theme.breakpoints.up("lg")]: { paddingBottom: "92px" },
}));

export const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: "calc(83%)",
    left: "calc(-50% )",
    right: "calc(50% + 8px)",
    color: theme.palette.primary.darkBlue,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.primary.white,
    borderWidth: 2,
    borderRadius: 1,
    [theme.breakpoints.up("sm")]: { borderWidth: 4 },
  },
}));

export const LableIcon = styled(StepLabel)(({ theme }) => ({
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    "& .MuiStepLabel-iconContainer": { display: "none" },
  },
  "& span": {
    marginTop: "0px!important",
    width: 74,
    height: 56,
    "& svg": {
      fill: theme.palette.primary.secondaryDark,
    },
    [`&.${stepLabelClasses.active}`]: {
      "& svg": {
        fill: theme.palette.primary.darkBlue,
      },
    },
    [`&.${stepLabelClasses.completed}`]: {
      "& svg": {
        fill: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.up("sm")]: {
      width: 86,
      height: 68,
    },
  },
}));

export const Lable = styled(StepLabel)(({ theme }) => ({
  [`&.${stepLabelClasses.alternativeLabel}`]: {
    position: "relative",
    height: 24,
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: { height: "unset" },
  },
  [`&.${stepLabelClasses.labelContainer}`]: {
    color: theme.palette.primary.secondaryDark,
  },
  "& span": {
    color: theme.palette.primary.secondaryDark,
    [`&.${stepLabelClasses.label}`]: {
      position: "absolute",
      visibility: "collapse",
      marginTop: 12,
      fontFamily: "OpenSans-SemiBold",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "1.5em",
      [theme.breakpoints.up("sm")]: {
        visibility: "visible",
        fontSize: 16,
        top: "140%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      [`&.${stepLabelClasses.active}`]: {
        visibility: "visible",
        top: "140%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: theme.palette.primary.darkBlue,
      },
    },
    [`&.${stepLabelClasses.completed}`]: {
      color: theme.palette.primary.main,
    },
  },
}));
export const StepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.primary.white,
  zIndex: 1,
  color: theme.palette.primary.white,
  width: 16,
  height: 16,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "OpenSans-SemiBold",
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "1.5em",
  ...(ownerState.active && {
    color: theme.palette.primary.darkBlue,
    width: 24,
    height: 24,
  }),
  [theme.breakpoints.up("sm")]: {
    width: 30,
    height: 30,
    fontSize: 18,
    color: theme.palette.primary.secondaryDark,
    ...(ownerState.active && { color: theme.palette.primary.darkBlue }),
    ...(ownerState.completed && { color: theme.palette.primary.main }),
  },
  [theme.breakpoints.up("lg")]: {
    width: 34,
    height: 34,
  },
}));
