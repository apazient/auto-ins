import { InputContStyled, SelectStyled } from "./GeneralSelect.styled";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import HelpCircle from "../HelpCircle/HelpCircle";

const GeneralSelect = ({
  id,
  lableText, //текст елемента lable
  optionsArr, //масив елементів які відображає SElect
  helper = "", //якщо текст присутній то показується елемент <HelpCircle/>
  color = "", //базовий колір для елемента <HelpCircle/>
  changeCB = () => {}, //функція що повертає вибране значення (піднесення)
}) => {
  const [curentValue, setCurentValue] = useState(optionsArr[0]);
  // function createSelectOptions(arr) {
  //   return arr.map((el) => ({
  //     value: el,
  //     label: el,
  //   }));
  // }
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
        value={curentValue}
        onChange={(e) => {
          setCurentValue(e);
          changeCB(e.value);
        }}
      />
    </InputContStyled>
  );
};
export default GeneralSelect;
GeneralSelect.propTypes = {
  lableText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  helper: PropTypes.string,
  color: PropTypes.string,
  optionsArr: PropTypes.array.isRequired,
  changeCB: PropTypes.func,
};
