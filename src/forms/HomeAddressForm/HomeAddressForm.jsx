import {
  DocInputsStyled,
  InputContBoxStyled,
} from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";

const HomeAddressForm = ({ formik }) => {
  return (
    <>
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
    </>
  );
};

export default HomeAddressForm;

HomeAddressForm.propTypes = {
  formik: PropTypes.object,
};
