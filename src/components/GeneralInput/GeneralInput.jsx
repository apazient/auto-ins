import { useMediaQuery, useTheme } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import PropTypes from "prop-types";
import {
  InputContStyled,
  InputStyled,
  LableStyled,
  TextMaskInputStyled,
} from "./GeneralInput.styled";

const GeneralInput = ({
  id,
  lableText,
  type,
  color,
  handleBlur,
  customFunc,
  placeholder,
  isDisabled = false,
  isReadOnly = false,
  formikData: { values, handleChange, errors, touched },
  className,
  withMask,
  ...props
}) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <InputContStyled className={className}>
      <LableStyled
        sx={{
          color: isDisabled ? "darkgray!important" : null,
        }}
        variant="inputLable"
        component="label"
        htmlFor={id}
      >
        <span>{lableText}</span>
        {touched[id] && Boolean(errors[id]) && (
          <span className="errorMessages">
            {smScreen ? errors[id] : "Помилка введення"}
          </span>
        )}
      </LableStyled>
      {withMask ? (
        <TextMaskInputStyled
          name={id}
          type={type || "text"}
          value={values[id]}
          onChange={customFunc || handleChange}
          onBlur={handleBlur}
          id={id}
          color={color || "inputBase"}
          error={String(touched[id] && Boolean(errors[id]))}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          // className={Object.values(outlinedInputClasses).join(" ")}
          {...props}
        />
      ) : (
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
          disabled={isDisabled}
          readOnly={isReadOnly}
        />
      )}
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
