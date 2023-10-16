import { Typography } from "@mui/material";
import { useFormik } from "formik";
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
import { HomeAddressFormValidationSchema } from "../../helpers/formValidationSchema";

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
    validationSchema: HomeAddressFormValidationSchema(),
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
