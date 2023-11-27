import PropTypes from "prop-types";
import {
  Checkbox,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  ChevronBoxStyled,
  InputContStyled,
  InputStyled,
  MenuItemStyled,
  MenuProps,
  SelectStyled,
} from "./FilterByCompany.styled";
import { SpriteSVG } from "../../images/SpriteSVG";

const FilterByCompany = (props) => {
  const { id, lableText, changeCB, currentValue, optionsArr } = props;
  return (
    <div>
      <InputContStyled className="select-container">
        <Typography variant="body1" component="label" htmlFor={id}>
          {lableText}
        </Typography>
        <SelectStyled
          labelId={id}
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={currentValue}
          onChange={changeCB}
          input={<InputStyled sx={{ color: "black" }} />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Усі компанії</em>;
            }
            return selected.join(" | ");
          }}
          MenuProps={MenuProps}
          IconComponent={() => (
            <ChevronBoxStyled>
              <SpriteSVG name="icon-chevron-down" />
            </ChevronBoxStyled>
          )}
        >
          <MenuItem disabled value="" sx={{ color: "black!important" }}>
            Усі компанії
          </MenuItem>
          {optionsArr.map((value) => (
            <MenuItemStyled
              key={value}
              value={value}
            >
              <Checkbox
                sx={{
                  paddingBottom: "0", paddingTop: 0
                }}
                checked={currentValue.indexOf(value) > -1}
              />
              <ListItemText disableTypography primary={value} />
            </MenuItemStyled>
          ))}
        </SelectStyled>
      </InputContStyled>
    </div>
  );
};

FilterByCompany.propTypes = {
  lableText: PropTypes.string.isRequired,
  currentValue: PropTypes.array,
  id: PropTypes.string.isRequired,
  optionsArr: PropTypes.array.isRequired,
  changeCB: PropTypes.func,
};

export default FilterByCompany;
