import { useFormik } from "formik";
import * as Yup from "yup";
import { FormControlLabel, Typography } from "@mui/material";
import { FormStyled, InputStyled } from "./ByLicensePlate.styled";
import {
  CheckboxContainerStyled,
  CheckboxStyled,
  InputContStyled,
  SubmitButton,
} from "../ByParameters/ByParameters.styled";
import { SpriteSVG } from "../../images/SpriteSVG";
import HelpCircle from "../HelpCircle/HelpCircle";

const ByLicensePlate = () => {
  const formik = useFormik({
    initialValues: {
      licensePlate: "",
      benefits: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      licensePlate: Yup.string().required("Required field!"),
    }),
  });
  return (
    <div>
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputContStyled>
          <Typography variant="body1" component="label" htmlFor="license-plate">
            Номер транспортного засобу
            <HelpCircle lableText="тут потрібно ввести текст)))" />
          </Typography>
          <InputStyled
            name="licensePlate"
            type="text"
            value={formik.values.licensePlate}
            onChange={formik.handleChange}
            id="license-plate"
          />
        </InputContStyled>
        <CheckboxContainerStyled component="span">
          <FormControlLabel
            control={
              <CheckboxStyled
                icon={<SpriteSVG name="icon-square" />}
                checkedIcon={<SpriteSVG name="icon-square-checked" />}
                value={formik.values.benefits}
                onChange={formik.handleChange}
                type="checkbox"
                name="benefits"
              />
            }
            label="Є пільги"
          />
          <HelpCircle lableText="тут потрібно ввести текст)))" />
        </CheckboxContainerStyled>
        <SubmitButton type="submit">Розрахувати вартість</SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByLicensePlate;
