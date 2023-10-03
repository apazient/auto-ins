import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AllCheckboxContStyled,
  AllInputContStyled,
  CheckboxContainerStyled,
  CheckboxStyled,
  FormStyled,
  InputContStyled,
  InputSerchIcon,
  InputStyled,
  SubmitButton,
} from "./ByParameters.styled";
import { FormControlLabel, Typography } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import HelpCircle from "../HelpCircle/HelpCircle";
import GeneralSelect from "../GeneralSelect/GeneralSelect";

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
          <GeneralSelect
            id="vehicle"
            lableText="Транспортний засіб"
            optionsArr={["Легкове авто", "Вантажівка", "Причеп"]}
          />
          <GeneralSelect
            id="engineCapacity"
            lableText="Об’єм двигуна"
            optionsArr={["Легкове авто", "Вантажівка", "Причеп"]}
          />

          <InputContStyled>
            <Typography
              variant="body1"
              component="label"
              htmlFor="location-input"
            >
              Адреса за техпаспортом
              <HelpCircle lableText="тут потрібно ввести текст)))" />
            </Typography>
            <InputStyled
              endAdornment={
                <InputSerchIcon position="end">
                  <SpriteSVG name="icon-zoom-out" />
                </InputSerchIcon>
              }
              name="location"
              type="text"
              value={formik.values.location}
              onChange={formik.handleChange}
              id="location-input"
              placeholder="Виберіть населений пункт..."
            />
          </InputContStyled>
        </AllInputContStyled>

        <AllCheckboxContStyled>
          <CheckboxContainerStyled component="span">
            <FormControlLabel
              control={
                <CheckboxStyled
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
            <HelpCircle
              lableText="тут потрібно ввести текст)))"
              // colorStyle={fsadf}
            />
          </CheckboxContainerStyled>
          <CheckboxContainerStyled component="span">
            <FormControlLabel
              control={
                <CheckboxStyled
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
          </CheckboxContainerStyled>
        </AllCheckboxContStyled>

        <SubmitButton type="submit">Розрахувати вартість</SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByParameters;
