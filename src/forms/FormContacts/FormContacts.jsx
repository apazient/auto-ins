import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { FormContainer } from "../../style/Global.styled";
import BtnBack from "../Buttons/BtnBack";
import BtnSubmit from "../Buttons/BtnSubmit";
import { BtnBoxS, InputBoxS, SpanS, TitleS } from "./FormContactsStyled";
import { useState } from "react";
import GeneralInput from "../../components/GeneralInput/GeneralInput";

const FormContacts = ({ step, funcNextStep, backLinkRef }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(`${theme.breakpoints.up("sm")}`);
  const [userContacts, setUserContacts] = useState({
    email: null,
    phone: null,
  });

   console.log(userContacts);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")      
      .min(5, "Електронна пошта вказана невірно")
      .matches(
        /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,9}$/,
        "Електронна пошта вказана невірно"
      ),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d{10}$/, "Номер телефону неправильний (введіть 10 цифр)"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
      setUserContacts(values);
    },
  });

  const handleOnChange = (evt) => {
    const field = evt.target.name;
    formik.handleChange(evt);
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,9}$/;

    if (
      field === "email" &&
      evt.target.value.length <= 4 &&
      !emailRegex.test(evt.target.value)
    ) {
      setUserContacts((prevState) => ({ ...prevState, [field]: null }));
    } else if (
      field === "email" &&
      evt.target.value.length > 4 &&
      emailRegex.test(evt.target.value)
    ) {
      setUserContacts((prevState) => ({
        ...prevState,
        [field]: evt.target.value,
      }));
    }

    if (field === "phone" && evt.target.value.length <= 9) {
      setUserContacts((prevState) => ({ ...prevState, [field]: null }));
    } else if (field === "phone" && evt.target.value.length > 9) {
      setUserContacts((prevState) => ({
        ...prevState,
        [field]: evt.target.value,
      }));
    }
  };

  return (
    <FormContainer>
      <TitleS variant="formTitle" className="formTitlePlus">
        Контакти
      </TitleS>

      <form onSubmit={formik.handleSubmit}>
        <InputBoxS>
          <GeneralInput
            id="email"
            type="text"
            lableText="Електронна пошта*:"
            formikData={formik}
            customFunc={handleOnChange}
          />
          <SpanS variant="inputSpan">
            *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
            ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
          </SpanS>
          <GeneralInput
            id="phone"
            lableText="Телефон*:"
            type="phone"
            formikData={formik}
            customFunc={handleOnChange}
            // placeholder="(_ _ _)_ _ _ - _ _ _ _"
          />
        </InputBoxS>
        <BtnBoxS>
          {isLargeScreen ? (
            <>
              <BtnBack step={step} backLinkRef={backLinkRef} />
              <BtnSubmit data={userContacts} step={step} funcNextStep={funcNextStep} />
            </>
          ) : (
            <>
              <BtnSubmit data={userContacts} step={step} funcNextStep={funcNextStep} />
              <BtnBack step={step} />
            </>
          )}
        </BtnBoxS>
      </form>
    </FormContainer>
  );
};

FormContacts.propTypes = {
  step: PropTypes.number,
  funcNextStep: PropTypes.func,
  backLinkRef: PropTypes.object,
};
export default FormContacts;
