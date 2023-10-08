import { Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ButtonContainerStyled,
  FormStyled,
  InputContBoxStyled,
  WhiteButtonSVGStyled,
  WhiteButtonStyled,
  YellowButtonStyled,
} from "../InsuredDataForm/InsuredDataForm.styled";
import { SpriteSVG } from "../../images/SpriteSVG";
import GeneralInput from "../../components/GeneralInput/GeneralInput";

const CarDataForm = () => {
  const formik = useFormik({
    initialValues: {
      effectiveDatePolicy: "",
      licensePlate: "",
      graduationYear: "",
      brand: "",
      model: "",
      vinCode: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      effectiveDatePolicy: Yup.string().required("Required field!"),
      licensePlate: Yup.string().required("Required field!"),
      graduationYear: Yup.string().required("Required field!"),
      brand: Yup.string().required("Required field!"),
      model: Yup.string().required("Required field!"),
      vinCode: Yup.string().required("Required field!"),
    }),
  });
  return (
    <div>
      <FormStyled component="form" autoComplete="off">
        <Typography variant="formTitle" component="h2">
          Дані авто
        </Typography>
        <InputContBoxStyled>
          <GeneralInput
            id="effectiveDatePolicy"
            lableText="Дата початку дії поліса*:"
            value={formik.values.effectiveDatePolicy}
            changeCB={formik.handleChange}
            type="date"
          />
          <GeneralInput
            id="licensePlate"
            lableText="Номерний знак*:"
            value={formik.values.licensePlate}
            changeCB={formik.handleChange}
          />
          <GeneralInput
            id="graduationYear"
            lableText="Рік випуску*:"
            value={formik.values.graduationYear}
            changeCB={formik.handleChange}
          />

          <GeneralInput
            id="brand"
            lableText="Марка*:"
            value={formik.values.brand}
            changeCB={formik.handleChange}
          />
          <GeneralInput
            id="model"
            lableText="Модель*:"
            value={formik.values.model}
            changeCB={formik.handleChange}
          />
          <GeneralInput
            id="vinCode"
            lableText="VIN*:"
            value={formik.values.vinCode}
            changeCB={formik.handleChange}
          />
        </InputContBoxStyled>
        <ButtonContainerStyled component="div">
          <YellowButtonStyled>Підтвердити</YellowButtonStyled>
          <WhiteButtonStyled>
            <WhiteButtonSVGStyled component="span">
              <SpriteSVG name="icon-arrow-left" />
            </WhiteButtonSVGStyled>
            Назад
          </WhiteButtonStyled>
        </ButtonContainerStyled>
      </FormStyled>
    </div>
  );
};

export default CarDataForm;
