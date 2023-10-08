import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { InputContStyled, InputStyled } from "./GeneralInput.styled";

const GeneralInput = ({
  id,
  lableText,
  type,
  value,
  changeCB,
  //   isRequired,
  color,
}) => {
  return (
    <InputContStyled>
      <Typography variant="inputLable" component="label" htmlFor={id}>
        {lableText}
      </Typography>
      <InputStyled
        name={id}
        type={type || "text"}
        value={value}
        onChange={changeCB}
        id={id}
        // {isRequired?"required":null}
        color={color || "inputBase"}
      />
    </InputContStyled>
  );
};

export default GeneralInput;

GeneralInput.propTypes = {
  lableText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  changeCB: PropTypes.func.isRequired,
};
