import { InputContStyled, SelectStyled } from "./GeneralSelect.styled";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const GeneralSelect = ({
  id,
  lableText, //текст елемента lable
  optionsArr, //масив елементів які відображає SElect
  //changeCB, //функція що повертає вибране значення (піднесення)
}) => {
  const allOptions = createSelectOptions(optionsArr);
  const [curentValue, setCurentValue] = useState(allOptions[0]);

  function createSelectOptions(arr) {
    return arr.map((el) => ({
      value: el,
      label: el,
    }));
  }

  return (
    <InputContStyled className="select-container">
      <Typography variant="body1" component="label" htmlFor={id}>
        {lableText}
      </Typography>
      <SelectStyled
        variant="body1"
        compomponent="label"
        classNamePrefix="customSelect"
        id={id}
        placeholder="Enter the text"
        options={allOptions}
        value={curentValue}
        onChange={(e) => {
          setCurentValue(e);
        }}
      />
    </InputContStyled>
  );
};

export default GeneralSelect;

GeneralSelect.propTypes = {
  lableText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  optionsArr: PropTypes.array.isRequired,
};
