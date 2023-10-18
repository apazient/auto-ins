import { InputContBoxStyled } from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";

const CarDataForm = ({ formik }) => {
  return (
    <>
      <InputContBoxStyled>
        <GeneralInput
          id="effectiveDatePolicy"
          lableText="Дата початку дії поліса*:"
          formikData={formik}
          type="date"
        />
        <GeneralInput
          id="licensePlate"
          lableText="Номерний знак*:"
          formikData={formik}
        />
        <GeneralInput
          id="graduationYear"
          lableText="Рік випуску*:"
          formikData={formik}
        />
        <GeneralInput id="brand" lableText="Марка*:" formikData={formik} />
        <GeneralInput id="model" lableText="Модель*:" formikData={formik} />
        <GeneralInput id="vinCode" lableText="VIN*:" formikData={formik} />
      </InputContBoxStyled>
    </>
  );
};

export default CarDataForm;

CarDataForm.propTypes = {
  formik: PropTypes.object,
};
