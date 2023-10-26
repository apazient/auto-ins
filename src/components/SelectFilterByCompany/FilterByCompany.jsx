import PropTypes from "prop-types";
import {
  Box,
  Checkbox,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  InputContStyled,
  InputStyled,
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
          value={currentValue}
          onChange={changeCB}
          input={<InputStyled sx={{ color: "black" }} />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Усі компанії</em>;
            }
            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          IconComponent={() => (
            <Box
              sx={{
                pointerEvents: "none",
                "& svg": {
                  height: 24,
                  width: 24,
                  cursor: "pointer",
                },
              }}
            >
              <SpriteSVG name="icon-chevron-down" />
            </Box>
          )}
        >
          <MenuItem disabled value="" sx={{ color: "black!important" }}>
            Усі компанії
          </MenuItem>
          {optionsArr.map((value) => (
            <MenuItem
              sx={{ color: "black!important", padding: 1.5 }}
              key={value}
              value={value}
            >
              <Checkbox
                sx={{ paddingBottom: "0", paddingTop: 0 }}
                checked={currentValue.indexOf(value) > -1}
              />
              <ListItemText disableTypography primary={value} />
            </MenuItem>
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
