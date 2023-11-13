import { InputContBoxStyled } from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { DNUMBER_REGEX, VIN_REGEX } from "../../constants";
import { useDispatch, useSelector } from "react-redux";

import { autoByNumber } from "../../redux/References/operations";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import {
  getAutoMakers,
  getAutoModelByMaker,
} from "../../redux/References/selectors";
import { useEffect, useState } from "react";
import { allAutoModelByMaker } from "../../redux/References/operations";
import {
  getGlobalCustomerData,
  selectForms,
} from "../../redux/Global/selectors";

const CarDataForm = ({ formik }) => {
  console.log(formik);
  const dispatch = useDispatch();
  const allAutoMakers = useSelector(getAutoMakers);
  const { initialValues } = formik;
  const formData = useSelector(getGlobalCustomerData);
  const carDataFormData = formData?.insuranceObject;

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

  const handleChangeModel = (e) => {
    setSelectedAutoModel(e);
    formik.setFieldValue("model", e);
  };

  const findMakerByName = (name) => {
    return allAutoMakers.find(
      (el) => el.name.toUpperCase() === name.toUpperCase()
    );
  };

  useEffect(() => {
    const maker = carDataFormData?.modelText.replace(/ .*/, "");
    if (findMakerByName(maker)) {
      const m = findMakerByName(maker);
      setSelectedAutoMaker(m);
    }
  }, [dispatch]);

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
          id="stateNumber"
          lableText="Номерний знак*:"
          value={
            carDataFormData?.stateNumber
              ? carDataFormData.stateNumber
              : initialValues.stateNumber
          }
          formikData={{ ...formik, handleBlur: handleBlurStateNumber }}
        />
        <GeneralInput
          id="graduationYear"
          lableText="Рік випуску*:"
          value={
            carDataFormData?.year ? carDataFormData.year : initialValues.year
          }
          formikData={formik}
        />
        <GeneralSelect
          id="brand"
          lableText="Марка*:"
          formikData={formik}
          currentValue={selectedAutoMaker}
          optionsArr={allAutoMakers}
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
          changeCB={handleChangeModel}
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
