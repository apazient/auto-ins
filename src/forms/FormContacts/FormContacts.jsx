import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { FormContainer, InputS } from "../../style/Global.styled";
import BtnBack from "../Buttons/BtnBack";
import BtnSubmit from "../Buttons/BtnSubmit";
import {
  BtnBoxS,
  ErrorBox,
  InputBoxS,
  SingleInputBoxS,
  SpanS,
  TitleS,
} from "./FormContactsStyled";
import { useState } from "react";

const FormContacts = ({ step, funcNextStep, backLinkRef }) => {  
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(`${theme.breakpoints.up("sm")}`);
  const [userContacts, setUserContacts] = useState({
    email: null,
    phone: null,
  });
  
  //console.log(userContacts);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Електронна пошта вказана невірно"),
    phone: Yup.string()
      .required("Phone is required")      
      .matches(/^\d{10}$/, "Invalid phone number (10 digits required)"),
    // .matches(/^[\d()\s-]+$/, "Invalid phone number")
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
    const field = evt.target.name    
    formik.handleChange(evt); // Update formik form values
    console.log('error', formik.errors[field]);
    // console.log('error', Boolean(formik.errors.email));        
    // if(formik.errors[field]) return    
      setUserContacts((prevState) => ({ ...prevState, [field]: evt.target.value }));
  };

  // const handlePhoneChange = (e) => {
  //   const { value } = e.target;
  //   // Remove non-numeric characters from the input
  //   const numericValue = value.replace(/\D/g, '');
  //   // Format the numeric value as desired (e.g., (123) 456-7890)
  //   const formattedValue = formatPhoneNumber(numericValue);
  //   // Set the formatted value back to the formik field
  //   formik.setFieldValue('phone', formattedValue);
  // };

  // const formatPhoneNumber = (numericValue) => {
  //   // Implement your phone number formatting logic here
  //   // Example: Format as (123) 456-7890
  //   return numericValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  // };

  return (
    <FormContainer>
      <TitleS variant="formTitle" className="formTitlePlus">
        Контакти
      </TitleS>

      <form onSubmit={formik.handleSubmit}>
        <InputBoxS>
          <SingleInputBoxS>
            <Typography variant="inputLable" htmlFor="email">
              Електронна пошта*:
            </Typography>
            <InputS
              type="text"
              id="email"
              name="email"
              onChange={handleOnChange}              
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorBox className="error">{formik.errors.email}</ErrorBox>
            )}
          </SingleInputBoxS>
          <SpanS variant="inputSpan">
            *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
            ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
          </SpanS>
          <SingleInputBoxS>
            <Typography variant="inputLable" htmlFor="phone">
              Телефон*:
            </Typography>
            <InputS
              type="text"
              id="phone"
              name="phone"
              placeholder="(_ _ _)_ _ _ - _ _ _ _"
              onChange={handleOnChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              disabled={false} // or disabled={false} make it programatically
            />
            {formik.touched.phone && formik.errors.phone && (
              <ErrorBox className="error">{formik.errors.phone}</ErrorBox>
            )}
          </SingleInputBoxS>
          {/* <SingleInputBoxS className="disabled">
            <Typography  variant="inputLable" htmlFor="phone" className="disabled">Phone:</Typography>
            <InputS
              className="disabled"
              disabled={true} // or disabled={false} make it programatically
            />            
          </SingleInputBoxS> */}
        </InputBoxS>
        <BtnBoxS>
          {isLargeScreen ? (
            <>
              <BtnBack step={step} backLinkRef={backLinkRef}/>
              <BtnSubmit data={userContacts} funcNextStep={funcNextStep} />
            </>
          ) : (
            <>
              <BtnSubmit data={userContacts} funcNextStep={funcNextStep} />
              <BtnBack step={step}/>
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