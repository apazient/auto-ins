import { InputContBoxStyled } from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectForms } from "../../redux/Global/selectors";
import { getStateNumber } from "../../redux/Calculator/selectors";

const CarDataForm = ({ formik }) => {
  const { initialValues } = formik;
  const formData = useSelector(selectForms);
  const stateNumber = useSelector(getStateNumber)
  console.log('stateNumber: ', stateNumber);
  const carDataFormData = formData.formCarData;
  return (
    <>
      <InputContBoxStyled>
        <GeneralInput
          id="effectiveDatePolicy"
          lableText="Дата початку дії поліса*:"
          value={
            carDataFormData?.effectiveDatePolicy
              ? carDataFormData.effectiveDatePolicy
              : initialValues.effectiveDatePolicy
          }
          formikData={formik}
          type="date"
        />
        <GeneralInput
          id="licensePlate"
          lableText="Номерний знак*:"
          value={
            carDataFormData?.licensePlate
              ? carDataFormData.licensePlate
              : initialValues.licensePlate
          }          
          formikData={formik}
        />
        <GeneralInput
          id="graduationYear"
          lableText="Рік випуску*:"
          value={
            carDataFormData?.graduationYear
              ? carDataFormData.graduationYear
              : initialValues.graduationYear
          }
          formikData={formik}
        />
        <GeneralInput
          id="brand"
          lableText="Марка*:"
          value={
            carDataFormData?.brand
              ? carDataFormData.brand
              : initialValues.brand
          }
          formikData={formik}
        />
        <GeneralInput
          id="model"
          lableText="Модель*:"
          value={
            carDataFormData?.model
              ? carDataFormData.model
              : initialValues.model
          }
          formikData={formik}
        />
        <GeneralInput
          id="bodyNumber"
          lableText="VIN*:"
          value={
            carDataFormData?.bodyNumber
              ? carDataFormData.bodyNumber
              : initialValues.bodyNumber
          }
          formikData={formik}
        />
      </InputContBoxStyled>
    </>
  );
};

export default CarDataForm;

CarDataForm.propTypes = {
  formik: PropTypes.object,
};
