import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AllInputContStyled,
  CheckboxContStyled,
  CheckboxStyled,
  FormStyled,
  InputContStyled,
  InputStyled,
  SelectStyled,
  SubmitButton,
} from "./ByParameters.styled";
import { FormControlLabel, Typography, useTheme } from "@mui/material";
import { SpriteSVG } from "../../../images/SpriteSVG";

const ByParameters = () => {
  const formik = useFormik({
    initialValues: {
      location: "",
      benefits: false,
      foreignNumber: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      location: Yup.string().required("Required field!"),
    }),
  });

  return (
    <div>
      <FormStyled onSubmit={formik.handleSubmit}>
        <AllInputContStyled>
          <InputContStyled>
            <Typography variant="body1" component="label" htmlFor="vehicle">
              Транспортний засіб
            </Typography>
            <SelectStyled
              variant="body1"
              compomponent="label"
              classNamePrefix="customSelect"
              id="vehicle"
            />
          </InputContStyled>
          <InputContStyled>
            <Typography
              variant="body1"
              component="label"
              htmlFor="engineCapacity"
            >
              Об'єм двигуна
            </Typography>
            <SelectStyled classNamePrefix="customSelect" id="engineCapacity" />
          </InputContStyled>

          <InputContStyled>
            <Typography
              variant="body1"
              compomponent="label"
              htmlFor="location-input"
            >
              Адреса за техпаспортом
            </Typography>
            <InputStyled
              name="location"
              type="text"
              value={formik.values.location}
              onChange={formik.handleChange}
              id="location-input"
              placeholder="Виберіть населений пункт..."
            />
          </InputContStyled>
        </AllInputContStyled>

        <CheckboxContStyled>
          <FormControlLabel
            control={
              <CheckboxStyled
                defaultChecked
                value={formik.values.benefits}
                onChange={formik.handleChange}
                type="checkbox"
                name="benefits"
                icon={<SpriteSVG name="icon-square" />}
                checkedIcon={<SpriteSVG name="icon-square-checked" />}
              />
            }
            label="Є пільги"
          />
          <FormControlLabel
            control={
              <CheckboxStyled
                defaultChecked
                icon={<SpriteSVG name="icon-square" />}
                checkedIcon={<SpriteSVG name="icon-square-checked" />}
                value={formik.values.foreignNumber}
                onChange={formik.handleChange}
                type="checkbox"
                name="foreignNumber"
              />
            }
            label="Авто на іноземних номерах"
          />
        </CheckboxContStyled>

        <SubmitButton type="submit">Розрахувати вартість</SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByParameters;
