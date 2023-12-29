import { useEffect } from "react";
import { patternFormatter } from "react-number-format";
import PropTypes from "prop-types";
import { InputBoxS, SpanS } from "./FormContactsStyled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";

const formatPhone = (value = "") =>
  patternFormatter(value.slice(3), {
    format: "+38##########",
    allowEmptyFormatting: true,
    mask: "",
    type: "phone",
  });

const FormContacts = ({ formik }) => {
  useEffect(() => {
    formik.setFieldValue("phone", formatPhone());
  }, []);
  return (
    <>
      <InputBoxS>
        <GeneralInput
          id="email"
          type="text"
          lableText="Електронна пошта* :"
          formikData={formik}
          customFunc={(e) =>
            formik.setFieldValue("email", e.target.value.trim())
          }
        />
        <SpanS variant="inputSpan">
          *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
          ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
        </SpanS>
        <GeneralInput
          id="phone"
          lableText="Телефон* :"
          formikData={formik}
          customFunc={(e) => {
            formik.setFieldValue("phone", formatPhone(e.target.value));
          }}
        />
      </InputBoxS>
    </>
  );
};

FormContacts.propTypes = {
  formik: PropTypes.object,
};
export default FormContacts;
