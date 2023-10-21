import { InputContStyled, SelectStyled } from "./GeneralSelect.styled";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import HelpCircle from "../HelpCircle/HelpCircle";
import { SpriteSVG } from "../../images/SpriteSVG";

const CustomDropdownIndicator = () => {
  return <SpriteSVG name="icon-zoom-out" />;
};

const GeneralSelect = ({
  id,
  lableText, //текст елемента lable
  optionsArr, //масив елементів які відображає SElect
  helper = "", //якщо текст присутній то показується елемент <HelpCircle/>
  color = "", //базовий колір для елемента <HelpCircle/>
  changeCB, //функція що повертає вибране значення (піднесення)
  currentValue,
  inputChangeCB,
  inputValue,
}) => {
  return (
    <InputContStyled className="select-container">
      <Typography variant="body1" component="label" htmlFor={id}>
        {lableText}
        {helper && <HelpCircle lableText={helper} color={color ? color : ""} />}
      </Typography>
      <SelectStyled
        $find={inputChangeCB}
        components={
          inputChangeCB ? { DropdownIndicator: CustomDropdownIndicator } : true
        }
        variant="body1"
        component="label"
        classNamePrefix="customSelect"
        id={id}
        placeholder="Enter the text"
        options={optionsArr}
        defaultValue={optionsArr[0]}
        value={currentValue}
        inputValue={inputValue}
        onInputChange={inputChangeCB}
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
  inputValue: PropTypes.string,
  color: PropTypes.string,
  optionsArr: PropTypes.array.isRequired,
  changeCB: PropTypes.func,
  inputChangeCB: PropTypes.func,
};
