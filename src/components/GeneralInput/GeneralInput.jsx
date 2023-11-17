import { useMediaQuery, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import {
  InputContStyled,
  InputStyled,
  LableStyled,
} from "./GeneralInput.styled";

const GeneralInput = ({
  id,
  lableText,  
  type,
  color,
  customFunc,
  placeholder,
  formikData: { values, handleChange, handleBlur, errors, touched },
}) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <InputContStyled>
      <LableStyled variant="inputLable" component="label" htmlFor={id}>
        <span>{lableText}</span>
        {touched[id] && Boolean(errors[id]) && (
          <span className="errorMessages">
            {smScreen ? errors[id] : "Помилка введення"}
          </span>
        )}
      </LableStyled>
      <InputStyled
        name={id}
        type={type || "text"}        
        value={values[id]}        
        onChange={customFunc || handleChange}
        onBlur={handleBlur}
        id={id}
        color={color || "inputBase"}
        error={touched[id] && Boolean(errors[id])}
        placeholder={placeholder}
      />
    </InputContStyled>
  );
};

export default GeneralInput;

GeneralInput.propTypes = {
  lableText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,  
  type: PropTypes.string,
  color: PropTypes.string,
  formikData: PropTypes.object,
  customFunc: PropTypes.func,
  placeholder: PropTypes.string,
};
