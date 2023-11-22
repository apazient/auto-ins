import { useState } from "react";
import PropTypes from "prop-types";
import { AlertS, SnackbarS } from "./AlertMUIStyled";


  /* <AlertMUI type="error" message="ERROR text"/> */
  /* <AlertMUI type="warning" message="WARNING text"/> */
  /* <AlertMUI type="info" message="INFO text"/> */
  /* <AlertMUI type="success" message="SUCCESS text"/> */

const AlertMUI = ({ type, message }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <SnackbarS
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}      
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <AlertS
        onClose={handleClose}
        variant="outlined"
        severity={type}
        className={type}       
      >
        {message}
      </AlertS>
    </SnackbarS>
  );
};

AlertMUI.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default AlertMUI;
