import { Typography } from "@mui/material";
import { useFormik } from "formik";
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
import { carDataFormValidationSchema } from "../../helpers/formValidationSchema";

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
    validationSchema: carDataFormValidationSchema(),
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
            formikData={formik}
            type="date"
          />
          <GeneralInput
            id="licensePlate"
            lableText="Номерний знак*:"
            formikData={formik}
          />
          <GeneralInput
            id="graduationYear"
            lableText="Рік випуску*:"
            formikData={formik}
          />
          <GeneralInput id="brand" lableText="Марка*:" formikData={formik} />
          <GeneralInput id="model" lableText="Модель*:" formikData={formik} />
          <GeneralInput id="vinCode" lableText="VIN*:" formikData={formik} />
        </InputContBoxStyled>
        <ButtonContainerStyled component="div">
          <YellowButtonStyled onClick={formik.handleSubmit}>
            Підтвердити
          </YellowButtonStyled>
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
