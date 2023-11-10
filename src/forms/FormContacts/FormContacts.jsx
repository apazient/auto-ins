import PropTypes from "prop-types";
import { InputBoxS, SpanS } from "./FormContactsStyled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import { useSelector } from "react-redux";
import { selectGlobalCustomerDataCustomer } from "../../redux/Global/selectors";

const FormContacts = ({ formik }) => {  
const customerContacts = useSelector(selectGlobalCustomerDataCustomer)
console.log('customerContacts: ', customerContacts);
  return (
    <>
        <InputBoxS>
          <GeneralInput
            id="email"
            type="text"
            lableText="Електронна пошта* :"
            formikData={formik}            
          />
          <SpanS variant="inputSpan">
            *ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ
            ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.
          </SpanS>
          <GeneralInput
            id="phone"
            lableText="Телефон* :"
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
