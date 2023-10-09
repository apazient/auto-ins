import { Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ButtonContainerStyled,
  DocInputsStyled,
  FormStyled,
  InputContBoxStyled,
  WhiteButtonSVGStyled,
  WhiteButtonStyled,
  YellowButtonStyled,
} from "../InsuredDataForm/InsuredDataForm.styled";
import { SpriteSVG } from "../../images/SpriteSVG";
import GeneralInput from "../../components/GeneralInput/GeneralInput";

const HomeAddressForm = () => {
  const formik = useFormik({
    initialValues: {
      region: "",
      city: "",
      street: "",
      houseNumber: "",
      apartmentNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      region: Yup.string().required("Обов’язкове поле!"),
      city: Yup.string().required("Обов’язкове поле!"),
      street: Yup.string().required("Обов’язкове поле!"),
      houseNumber: Yup.string().required("Обов’язкове поле!"),
      apartmentNumber: Yup.string(),
    }),
  });
  return (
    <div>
      <FormStyled component="form" autoComplete="off">
        <Typography variant="formTitle" component="h2">
          Домашня адреса
        </Typography>
        <InputContBoxStyled>
          <GeneralInput id="region" lableText="Область*:" formikData={formik} />
          <GeneralInput id="city" lableText="Місто*:" formikData={formik} />
          <GeneralInput id="street" lableText="Вулиця*:" formikData={formik} />
          <DocInputsStyled>
            <GeneralInput
              id="houseNumber"
              lableText="Будинок*:"
              formikData={formik}
            />
            <GeneralInput
              id="apartmentNumber"
              lableText="Квартира:"
              formikData={formik}
            />
          </DocInputsStyled>
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

export default HomeAddressForm;
