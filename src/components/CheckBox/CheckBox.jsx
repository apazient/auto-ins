import FormControlLabel from "@mui/material/FormControlLabel";
import { SpriteSVG } from "../../images/SpriteSVG";
import { CheckboxContainerStyled, CheckboxStyled } from "./CheckBoxStyled";
import { useTheme } from "@emotion/react";

export const CheckBox = (color = "") => {
  const theme = useTheme();
  if (!color) {
    color = theme.palette.primary.white;
  }
  return (
    <CheckboxContainerStyled
      sx={{
        stroke: color,
      }}
      component="span"
    >
      <FormControlLabel
        control={
          <CheckboxStyled
            icon={<SpriteSVG name="icon-square" />}
            checkedIcon={<SpriteSVG name="icon-square-checked" />}
            type="checkbox"
            sx={{
              "& svg": {
                stroke: color,
              },
            }}
          />
        }
      />
    </CheckboxContainerStyled>
  );
};

export default CheckBox;
