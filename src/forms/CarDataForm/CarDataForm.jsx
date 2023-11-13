import { InputContBoxStyled } from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { DNUMBER_REGEX, VIN_REGEX } from "../../constants";
import { useDispatch, useSelector } from "react-redux";

import { autoByNumber } from "../../redux/Calculator/operations";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import {
  getAutoMakers,
  getAutoModelByMaker,
} from "../../redux/References/selectors";
import { useState } from "react";
import { allAutoModelByMaker } from "../../redux/References/operations";
import { selectForms } from "../../redux/Global/selectors";

const CarDataForm = ({ formik }) => {
  const dispatch = useDispatch();

  const [selectedAutoMaker, setSelectedAutoMaker] = useState({
    name: "Оберіть марку авто",
  });
  const [selectedAutoModel, setSelectedAutoModel] = useState({
    name: "Оберіть модель авто",
  });
  ///TODO: add validation for number
  const handleBlurStateNumber = (e) => {
    const v = e.target.value.trim().toUpperCase();
    const stateNumber = v.match(DNUMBER_REGEX);
    if (stateNumber) {
      dispatch(autoByNumber(stateNumber[0]));
    }
    formik.handleChange(e);
  };
  const handleBlurVinNumber = (e) => {
    const v = e.target.value.trim().toUpperCase();
    const vinNumber = v.match(VIN_REGEX);

    // formik.handleChange(e);
  };
  const handleChangeBrand = (e) => {
    setSelectedAutoModel({
      name: "Оберіть модель авто",
    });
    setSelectedAutoMaker(e);
    dispatch(allAutoModelByMaker(e.id));
    formik.setFieldValue("brand", e);
  };
  const { initialValues } = formik;
  const formData = useSelector(selectForms);
  const carDataFormData = formData.formCarData;
  return (
    <>
      <InputContBoxStyled>
        {/* <GeneralInput
          id="effectiveDatePolicy"
          lableText="Дата початку дії поліса*:"
          value={
            carDataFormData?.effectiveDatePolicy
              ? carDataFormData.effectiveDatePolicy
              : initialValues.effectiveDatePolicy
          }
          formikData={formik}
          type="date"
        /> */}
        <GeneralInput
          id="licensePlate"
          lableText="Номерний знак*:"
          value={
            carDataFormData?.licensePlate
              ? carDataFormData.licensePlate
              : initialValues.licensePlate
          }
          formikData={{ ...formik, handleBlur: handleBlurStateNumber }}
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
        <GeneralSelect
          id="brand"
          lableText="Марка*:"
          formikData={formik}
          currentValue={selectedAutoMaker}
          optionsArr={useSelector(getAutoMakers)}
          defaultValue={{ name: "Оберіть марку авто" }}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          changeCB={handleChangeBrand}
        />
        <GeneralSelect
          id="model"
          lableText="Модель*:"
          formikData={formik}
          currentValue={selectedAutoModel}
          optionsArr={useSelector(getAutoModelByMaker)}
          defaultValue={{ name: "Оберіть модель авто" }}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          isDisabled={selectedAutoMaker.name === "Оберіть марку авто"}
          changeCB={(e) => {
            setSelectedAutoModel(e);
            formik.setFieldValue("model", e);
          }}
        />
        <GeneralInput
          id="bodyNumber"
          lableText="VIN*:"
          value={
            carDataFormData?.bodyNumber
              ? carDataFormData.bodyNumber
              : initialValues.bodyNumber
          }
          formikData={{ ...formik, handleBlur: handleBlurVinNumber }}
        />
      </InputContBoxStyled>
    </>
  );
};

export default CarDataForm;

CarDataForm.propTypes = {
  formik: PropTypes.object,
};
