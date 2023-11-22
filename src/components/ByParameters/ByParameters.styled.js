import {
  Box,
  Checkbox,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";

import { BlueButton } from "../../style/Global.styled";

export const InputStyled = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  height: 56,
  padding: 16,
  borderRadius: 50,
  backgroundColor: `${theme.palette.primary.white}`,
  outline: `none`,
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "Open Sans",
    fontSize: 16,
    lineHeight: "150%" /* 24px */,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
  },
  [theme.breakpoints.up("lg")]: {
    width: 272,
  },
}));

export const InputSerchIcon = styled(InputAdornment)(({ theme }) => ({
  width: 24,
  height: 24,
  display: "block",
  stroke: theme.palette.primary.main,
  fill: "none",
}));
export const SubmitButton = styled(BlueButton)(({ theme }) => ({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: 16,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginTop: 8,
    fontSize: 18,
  },
  [theme.breakpoints.up("lg")]: {
    height: 59,
    marginTop: "auto",
    width: '100%',
  },
}));

export const InputContStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    gap: 16,
  },
}));

export const AllInputContStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 24,
  },
}));

export const FormStyled = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
  },
}));
export const AllCheckboxContStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("lg")]: {
    // order: 1,
    width: 557,
  },
}));
export const CheckboxStyled = styled(Checkbox)(({ theme }) => ({
  "& svg": {
    height: 24,
    width: 24,
    stroke: theme.palette.primary.white,
  },
}));
export const CheckboxContainerStyled = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  stroke: theme.palette.primary.white,
  order: 1,
  "& .MuiFormControlLabel-root": {
    marginRight: 0,
    width: "fit-content",
  },
  "& .MuiButtonBase-root": {
    "&svg": {
      height: 16,
      width: 16,
    },
  },
}));
export const DataContainerStyled = styled(InputContStyled)(({ theme }) => ({
  position: 'relative',
  
  "& .react-datepicker__tab-loop": {
    position: 'absolute',
  },
  "& .iconCalender": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width:24,
    right: 16,
    top:16,
    zIndex: 1,
    pointerEvents: "none",
    "& svg": {
      width: 24,
      height:24,
    }
  },
    "& .react-datepicker__view-calendar-icon input": {
    padding: 16,
    borderRadius: "50px",
    outline: "none",
    borderColor: "transparent",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "1.5",
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
  "& .react-datepicker": {
    fontFamily: "Open Sans",
    fontSize: 16,
    borderRadius: 50,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
    "&__header": {
      borderTopRightRadius: "50px!important",
      borderTopLeftRadius: 50,
      padding:"15px 15px 0 15px"
    },
    "&__current-month": {
      fontSize: "1.5rem",
    },
    "&__navigation": {
      top: 15,
      "&--next": {
        right: 22,
      },
      "&--previous": {
        left: 22,
      },
      "&:hover": {
        "*::before": {
          borderColor: theme.palette.primary.blue,
        },
      },
    },
    "&__navigation-icon": {
      "&::before": {
        borderColor: theme.palette.primary.main,
      },
    },
    "&__day-name, &__day, &__time-name": {
      fontSize: "1.5rem",
      lineHeight: 1.5,
      margin: "0.31em",
    },
    "&__day, __month, __quarter, __year": {
      transition: 'background-color 250ms ease-in-out',
      "&:hover, &:focus": {
        backgroundColor: theme.palette.primary.blue,
        color: theme.palette.primary.white,
      },
      "&--keyboard-selected": {
        color: theme.palette.primary.white,
        backgroundColor: theme.palette.primary.tertiaryBlue,
      },
    },
    "&__month": {
      padding:"0 15px 15px 15px",
    },
    "&__triangle": {
      display: "none",
    },
    "&__day": {
      width:"fit-content",
      margin: 'auto',
      padding: 7.5,
      
    },
    "&__week": {
      display:'flex'
    },
    "&__calendar-icon": {
      width: 24,
      height: 24,
      right: 16,
      top: 16 / 2,
      pointerEvents: "auto",
      "&:hover": {
        cursor: "pointer",
        pointerEvents: "auto",
      },
    },
    "&-wrapper": {
      width: "100%",
    },
    "&-popper": {
      transform: "translate3d(0px, 0px, 0px)",
    },
  },
}));
