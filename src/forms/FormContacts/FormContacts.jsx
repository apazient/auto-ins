import PropTypes from "prop-types";
import { InputBoxS, SpanS } from "./FormContactsStyled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import { useSelector } from "react-redux";
import { selectForms } from "../../redux/Global/selectors";

const FormContacts = ({ formik }) => {
  const { initialValues } = formik;
  const formData = useSelector(selectForms);
  const contactFormData = formData.formContacts;

  return (
    <>
      <InputBoxS>
        <GeneralInput
          id="email"
          type="text"
          lableText="Електронна пошта* :"
          // value={
          //   contactFormData?.email
          //     ? contactFormData.email
          //     : initialValues.email
          // }
          value={formik.values.email}
          formikData={formik}
        />
        <SpanS variant="inputSpan">
          *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
          ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
        </SpanS>
        <GeneralInput
          id="phone"
          lableText="Телефон* :"
          // value={
          //   contactFormData?.phone
          //     ? contactFormData.phone
          //     : initialValues.phone
          // }
          value={formik.values.phone}
          type="phone"
          formikData={formik}
          placeholder="+38(_ _ _)_ _ _ - _ _ _ _"
        />
      </InputBoxS>
    </>
  );
};

FormContacts.propTypes = {
  formik: PropTypes.object,
};
export default FormContacts;
