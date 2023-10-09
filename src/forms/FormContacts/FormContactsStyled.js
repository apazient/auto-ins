import { Box, Typography, styled } from "@mui/material";

export const TitleS = styled(Typography)(({ theme }) => ({
  "&.formTitlePlus": {
    display: "block",
    color: theme.palette.primary.main,
    marginBottom: "24px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "56px",
    },
  },
}));

export const InputBoxS = styled(Box)(({ theme }) => ({
  marginBottom: "24px",
  [theme.breakpoints.up("md")]: {
    marginBottom: "28px",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "48px",
  },
}));

export const SingleInputBoxS = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SpanS = styled(Typography)`
  display: block;
`;
// export const LabelS = styled("label")(({ theme }) => ({
//   fontFamily: "OpenSans, sans-serif",
//   fontSize: "14px",
//   fontStyle: "normal",
//   fontWeight: "600",
//   lineHeight: "1.5",
//   color: theme.palette.primary.main,

//   [theme.breakpoints.up("md")]: {
//     fontSize: "16px",
//   },
//   "&.disabled": {
//     color: `${theme.palette.primary.tertiaryDark}`,
//   },
// }));

export const BtnBoxS = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: "0",
    justifyContent: "space-between",
  },
}));
// export const ErrorBox = styled(Box)(({theme})=>({
//   color: 'red',
//   position: 'absolute',
//   right: '0',
// }))

export const ErrorBox = styled(Typography)`
  &.error {
    position: absolute;
    right: 0;
    color: red;
  }
`;
