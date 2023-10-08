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
      region: Yup.string().required("Required field!"),
      city: Yup.string().required("Required field!"),
      street: Yup.string().required("Required field!"),
      houseNumber: Yup.string().required("Required field!"),
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
          <GeneralInput
            id="region"
            lableText="Область*:"
            value={formik.values.region}
            changeCB={formik.handleChange}
          />
          <GeneralInput
            id="city"
            lableText="Місто*:"
            value={formik.values.city}
            changeCB={formik.handleChange}
          />
          <GeneralInput
            id="street"
            lableText="Вулиця*:"
            value={formik.values.street}
            changeCB={formik.handleChange}
          />
          <DocInputsStyled>
            <GeneralInput
              id="houseNumber"
              lableText="Будинок*:"
              value={formik.values.houseNumber}
              changeCB={formik.handleChange}
            />
            <GeneralInput
              id="apartmentNumber"
              lableText="Квартира:"
              value={formik.values.apartmentNumber}
              changeCB={formik.handleChange}
            />
          </DocInputsStyled>
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

export default HomeAddressForm;
