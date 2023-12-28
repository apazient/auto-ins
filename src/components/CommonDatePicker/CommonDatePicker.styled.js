import { styled } from "@mui/material";

export const InputContStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    gap: 16,
  },
}));

export const DataContainerStyled = styled(InputContStyled)(({ theme }) => ({
  position: "relative",

  "& .react-datepicker__tab-loop": {
    position: "absolute",
  },
  "& .react-datepicker__day--selected": {
    backgroundColor: theme.palette.primary.blue,
  },
  "& .iconCalender": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    right: 16,
    top: 16,
    zIndex: 1,
    pointerEvents: "none",
    "& svg": {
      width: 24,
      height: 24,
    },
  },
  "& .react-datepicker__view-calendar-icon input": {
    padding: 16,
    borderRadius: "50px",
    outline: "none",
    borderColor: "transparent",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "1.5",
    "&:hover": {
      cursor: "pointer",
    },
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
      padding: "15px 15px 0 15px",
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
      transition: "background-color 250ms ease-in-out",
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
      padding: "0 15px 15px 15px",
    },
    "&__triangle": {
      display: "none",
    },
    "&__day": {
      width: "fit-content",
      margin: "auto",
      padding: 7.5,
      flex: 1,
      flexBasis: 0,
    },
    "&__week": {
      display: "flex",
    },
    "&__calendar-icon": {
      width: 24,
      height: 24,
      right: 16,
      top: 16 / 2,
      // pointerEvents: "auto",
      "&:hover": {
        cursor: "pointer",
        // pointerEvents: "auto",
      },
    },
    "&-wrapper": {
      // width: "100%!important",
      width: "100%",
    },
    "&-popper": {
      transform: "translate3d(0px, 0px, 0px)",
    },
  },
  "& .react-datepicker__header__dropdown": {
    backgroundColor: theme.palette.primary.lightBlue,
    fontSize: 24,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginTop: 15,
    display: "flex",
    alignItem: "center",
    justifyContent: "space-around",
    borderRadius: 20,
    padding: "10px 0 10px 0 ",
  },
  "& .react-datepicker__month-dropdown, .react-datepicker__year-dropdown": {
    borderRadius: 10,
    padding: "15px",
    "& div:nth-of-type(n)": {
      padding: 5,
      "&:hover": {
        backgroundColor: theme.palette.primary.lightBlue2,
      },
    },
  },
  "& .react-datepicker__month-select, .react-datepicker__year-select": {
    borderRadius: 10,
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontWeight: 600,
    color: theme.palette.primary.main,
    outline: "none",
    padding: "5px",
    // "&:hover": {
    //   color: theme.palette.primary.blue,
    // }
  },
  "& option": {
    color: "red",
    fontSize: "0.5rem",
    padding: "0.1rem",
    lineHeight: "1.2"
    // height: "0.5rem",
  },
  "& .react-datepicker__month-dropdown-container": {
    borderRadius: 10,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },
  "& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow":
    {
      top: 8,
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
    },
  "& .react-datepicker__month-read-view--selected-month": {
    width: "100%",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },
}));
