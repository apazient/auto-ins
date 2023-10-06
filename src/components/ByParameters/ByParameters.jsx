import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AllCheckboxContStyled,
  AllInputContStyled,
  FormStyled,
  InputContStyled,
  InputSerchIcon,
  InputStyled,
  SubmitButton,
} from "./ByParameters.styled";
import { Typography } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import HelpCircle from "../HelpCircle/HelpCircle";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";

const selectArrOptions = [
  {
    value: "Ціна",
    label: "Ціна",
  },
  {
    value: "Популярність",
    label: "Популярність",
  },
  {
    value: "Компанії",
    label: "Компанії",
  },
];

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
            optionsArr={selectArrOptions}
          />
          <GeneralSelect
            id="engineCapacity"
            lableText="Об’єм двигуна"
            optionsArr={selectArrOptions}
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
          <GeneralCheckbox
            lableText="Є пільги"
            name="benefits"
            val={formik.values.benefits}
            changeCB={formik.handleChange}
            helper="тут потрібно ввести текст)))"
          />
          <GeneralCheckbox
            lableText="Авто на іноземних номерах"
            name="foreignNumber"
            val={formik.values.foreignNumber}
            changeCB={formik.handleChange}
          />
        </AllCheckboxContStyled>

        <SubmitButton type="submit">Розрахувати вартість</SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByParameters;
