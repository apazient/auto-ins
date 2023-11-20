import { Box, MenuItem, OutlinedInput, Select, styled } from "@mui/material";

export const InputContStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  [theme.breakpoints.up("sm")]: {
    gap: 16,
  },
}));
export const InputStyled = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  height: 56,
  padding: 16,
  borderRadius: 50,
  backgroundColor: theme.palette.primary.lightBlue2,
  border: `none !important`,
  outline: `none !important`,
  "&:hover, &:focus": {
    border: `none !important`,
    outline: `none !important`,
  },
  "& .Mui-focused": {
    border: `none !important`,
    outline: `none !important`,
  },
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    color: `${theme.palette.primary.main}`,
    fontWeight: 600,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    lineHeight: "150%" /* 24px */,
    border: `none !important`,
    outline: `none !important`,
    "&:-webkit-autofill": {
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: theme.palette.primary.main,
    },
    "&:-webkit-autofill:focus": {
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },

  "& fieldset.MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.primary.white} !important`,
    outline: `none !important`,
    "&:hover, &:focus": {
      border: `none !important`,
      outline: `none !important`,
    },
  },
  [theme.breakpoints.up("sm")]: {
    height: 59,
  },
}));
export const SelectStyled = styled(Select)(({ theme }) => ({
  "& svg": {
    transition: "transform 200ms ease-in-out",
  },
  "[aria-expanded=false]": {
    "& svg": {
      transform: "rotateX(180deg)",
    },
  },
  "[aria-expanded=true]": {
    "& svg": {
      transform: "rotateX(0deg)",
    },
  },

  "&.MuiButtonBase-root.MuiMenuItem-root": {
    padding: 12,
  },

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // width: 187,
  },
  [theme.breakpoints.up("lg")]: {
    // width: 272,
  },
}));
export const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: 12,
  "&.Mui-selected": {
    "& .MuiListItemText-root": {
      color: theme.palette.primary.blue,
    },
    "& .MuiButtonBase-root": {
      "& svg": {
        width: 20,
        height: 20,
        fill: theme.palette.primary.white,
        stroke: theme.palette.primary.blue,
        background: theme.palette.primary.blue,
      },
    },
  },
  "& svg": {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
  "& .MuiListItemText-root": {
    color: theme.palette.primary.main,
    fontFamily: "OpenSans-SemiBold, sans-serif",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: 1.5,
  },
  "& .MuiCheckbox-root": {
    width: 40,
  },
}));

const ITEM_HEIGHT = 59;
const ITEM_PADDING_TOP = 0;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 187,
      width: "fit-content",
      borderRadius: "25px",
      "&::-webkit-scrollbar": {
        width: 6 /* ширина всей полосы прокрутки */,
      },
      "&::-webkit-scrollbar-track": {
        background: "rgba(21, 71, 248, 0.6)" /* цвет зоны отслеживания */,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(255, 255, 255, 0.8)" /* цвет бегунка */,
        borderRadius: 4 /* округлось бегунка */,
      },
    },
  },
};
// export const MenuItem = {
//                 color: "black", padding: 1.5,
//                 "&.Mui-selected": {
//                     "& .MuiListItemText-root": {
//                       color: "#1547F8 !important",
//                     },
//                     "& .MuiButtonBase-root": {
//                       "& svg": {
//                         width: 20,
//                         height:20,
//                         fill:"white !important",
//                         stroke: "#1547F8 !important",
//                         background: "#1547F8 !important",
//                         }
//                     }
//                 },
//                 "& svg": {
//                         width: 24,
//                         height:24,
//                   borderRadius:1,
//                         },
//                 "& .MuiListItemText-root": {
//                   color: "black",
//                   fontFamily: "Open Sans",
//                   fontSize: '18px',
//                   fontWeight: '600',
//                   lineHeight: 1.5,

//                 },
//                 "& .MuiCheckbox-root": {
//                   width:40,

//                     }
//               };
