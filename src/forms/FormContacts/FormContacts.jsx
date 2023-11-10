import PropTypes from "prop-types";
import { InputBoxS, SpanS } from "./FormContactsStyled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import { useSelector } from "react-redux";
import { selectGlobalCustomerDataCustomer } from "../../redux/Global/selectors";
import { contactsInitialValues } from "../../helpers/formikInitialValues";

const FormContacts = ({ formik }) => {
  const customerFormData = useSelector(selectGlobalCustomerDataCustomer);
  const initialValuesContacts = contactsInitialValues;

  return (
    <>
      <InputBoxS>
        <GeneralInput
          id="email"
          type="text"
          lableText="Електронна пошта* :"
          value={
            customerFormData.email
              ? customerFormData.email
              : initialValuesContacts.email
          }
          formikData={formik}
        />
        <SpanS variant="inputSpan">
          *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
          ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
        </SpanS>
        <GeneralInput
          id="phone"
          lableText="Телефон* :"
          value={
            customerFormData.phone
              ? customerFormData.phone
              : initialValuesContacts.phone
          }
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
