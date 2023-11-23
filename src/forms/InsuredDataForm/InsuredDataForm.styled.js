import { Box, styled } from "@mui/material";
import { DataContainerStyled } from "../../components/ByParameters/ByParameters.styled";
import { WhiteButton, YellowButton } from "../../style/Global.styled";

export const FormStyled = styled(Box)(({ theme }) => ({
  background: "white",
  display: "flex",
  flexDirection: "column",
  gap: 24,
  padding: 16,
  borderRadius: 50,
  backgroundColor: theme.palette.primary.white,
  [theme.breakpoints.up("sm")]: {
    padding: 24,
    width: 680,
    gap: 28,
  },
  [theme.breakpoints.up("lg")]: {
    gap: 48,
    width: 765,
    padding: 32,
  },
}));
export const InputContBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    marginTop: 4,
  },
  [theme.breakpoints.up("lg")]: {
    gap: 24,
    marginTop: 8,
  },
  "& .select-container": {
    "& .MuiTypography-root.MuiTypography-body1": {
      [theme.breakpoints.up("xs")]: {
        fontSize: "0.875rem",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        color: theme.palette.primary.main,
        lineHeight: 1.5,
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
    },
    "& .customSelect__": {
      "&control": {
        [theme.breakpoints.up("lg")]: {
          width: "100%",
        },
      },
    },
  },
}));

export const DocInputsStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    "& div:nth-of-type(n)": {
      // width: 308,
    },
  },
  [theme.breakpoints.up("lg")]: {
    gap: 24,
    "& div:nth-of-type(n)": {
      // width: 338,
    },
  },
}));
export const ButtonContainerStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
export const YellowButtonStyled = styled(YellowButton)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: 192,
    order: 1,
  },
}));
export const WhiteButtonStyled = styled(WhiteButton)(({ theme }) => ({
  width: "100%",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    width: 163,
  },
}));
export const WhiteButtonSVGStyled = styled(Box)(({ theme }) => ({
  width: 24,
  height: 24,
  stroke: theme.palette.primary.main,
  fill: "transparent",
}));

export const DataContainerWrapper = styled(DataContainerStyled)(
  ({ theme }) => ({

    "& .react-datepicker__header__dropdown": {
      backgroundColor: theme.palette.primary.lightBlue,
      fontSize:24,
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600,
      color: theme.palette.primary.main,
      marginTop: 15,
      display: "flex",
      alignItem: "center",
      justifyContent: "space-around",
      borderRadius:20,
      padding: '10px 0 10px 0 ',
    },
    "& .react-datepicker__month-dropdown, .react-datepicker__year-dropdown": {
        borderRadius: 10,
        padding: '15px',
        "& div:nth-of-type(n)": {
          padding: 5,
          "&:hover": {
            backgroundColor: theme.palette.primary.lightBlue2,
          }
        },
      },
    "& .react-datepicker__month-select, .react-datepicker__year-select": {
      borderRadius: 10,
      border:"none",
      backgroundColor: "transparent",
      cursor:"pointer",
      fontWeight: 600,
      color:theme.palette.primary.main,
      outline:"none",
      padding: '5px',
          // "&:hover": {
          //   color: theme.palette.primary.blue,
          // }

      },
    "& .react-datepicker__month-dropdown-container": {
      borderRadius:10,
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
      
    },
    "& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow": {
      top: 8,
      display: "flex",
      alignItem: "center",
      justifyContent:"center",
    },
    "& .react-datepicker__month-read-view--selected-month": {
      width:'100%',
      display: "flex",
      alignItem: "center",
      justifyContent:"center",
    },


  })
);
