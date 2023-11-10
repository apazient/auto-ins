import PropTypes from "prop-types";
import { InputBoxS, SpanS } from "./FormContactsStyled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import { useSelector } from "react-redux";
import { getGlobalCustomerData, selectGlobalCustomerDataCustomer } from "../../redux/Global/selectors";
import { contactsInitialValues } from "../../helpers/formikInitialValues";

const FormContacts = ({ formik }) => {

const customerContacts = useSelector(selectGlobalCustomerDataCustomer)
const contacts = contactsInitialValues
const globalData = useSelector(getGlobalCustomerData)// to delete
console.log('globalData: ', globalData); //to delete

  return (
    <>
        <InputBoxS>
          <GeneralInput
            id="email"
            type="text"
            lableText="Електронна пошта* :"
            value={customerContacts.email ? customerContacts.email : contacts.email}
            formikData={formik}            
          />
          <SpanS variant="inputSpan">
            *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
            ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
          </SpanS>
          <GeneralInput
            id="phone"
            lableText="Телефон* :"
            value={customerContacts.phone ? customerContacts.phone : contacts.phone}
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
