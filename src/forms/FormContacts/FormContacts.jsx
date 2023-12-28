import PropTypes from "prop-types";
import { InputBoxS, SpanS } from "./FormContactsStyled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";

const FormContacts = ({ formik }) => {
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
        <>
          <GeneralInput
            id="phone"
            lableText="Телефон* :"
            type="phone"
            formikData={formik}
            format="+38##########"
            allowEmptyFormatting
            mask=" "
            withMask
          />
        </>
      </InputBoxS>
    </>
  );
};

FormContacts.propTypes = {
  formik: PropTypes.object,
};
export default FormContacts;
