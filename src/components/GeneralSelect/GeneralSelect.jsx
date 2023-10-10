import { InputContStyled, SelectStyled } from "./GeneralSelect.styled";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import HelpCircle from "../HelpCircle/HelpCircle";

const GeneralSelect = ({
  id,
  lableText, //текст елемента lable
  optionsArr, //масив елементів які відображає SElect
  helper = "", //якщо текст присутній то показується елемент <HelpCircle/>
  color = "", //базовий колір для елемента <HelpCircle/>
  changeCB, //функція що повертає вибране значення (піднесення)
  currentValue,
}) => {
  return (
    <InputContStyled className="select-container">
      <Typography variant="body1" component="label" htmlFor={id}>
        {lableText}
        {helper && <HelpCircle lableText={helper} color={color ? color : ""} />}
      </Typography>
      <SelectStyled
        variant="body1"
        compomponent="label"
        classNamePrefix="customSelect"
        id={id}
        placeholder="Enter the text"
        options={optionsArr}
        defaultValue={optionsArr[0]}
        value={currentValue}
        onChange={(e) => {
          changeCB(e);
        }}
      />
    </InputContStyled>
  );
};
export default GeneralSelect;
GeneralSelect.propTypes = {
  lableText: PropTypes.string.isRequired,
  currentValue: PropTypes.object,
  id: PropTypes.string.isRequired,
  helper: PropTypes.string,
  color: PropTypes.string,
  optionsArr: PropTypes.array.isRequired,
  changeCB: PropTypes.func,
};
