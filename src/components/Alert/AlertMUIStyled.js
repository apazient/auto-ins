import { Alert, Snackbar, styled } from "@mui/material";

export const SnackbarS = styled(Snackbar)(({ theme }) => ({
  "&.MuiSnackbar-anchorOriginTopRight": {
    top: "60px",
    right: "6px",
    [theme.breakpoints.up("sm")]: {
      top: "90px",
      right: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      top: "120px",
      right: "40px",
    },
  },
}));

export const AlertS = styled(Alert)`
  &.MuiAlert-root {
    padding: 0 10px;
  }  
  &.MuiAlert-action{
    padding: 0;
    width: 22px;
    height: 22px;
    color: red;
  }
  &.error {
    color: #e66666;
  }
  &.warning {
    color: #ff9800;
  }
  &.info {
    color: #03a9f4;
  }
  &.success {
    color: #4caf50;
  }
`;
