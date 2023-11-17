import { InputContBoxStyled } from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { DNUMBER_REGEX } from "../../constants";
import { useDispatch, useSelector } from "react-redux";

import { autoByNumber } from "../../redux/References/operations";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import {
  getAutoByNumber,
  getAutoMakers,
  getAutoModelByMaker,
} from "../../redux/References/selectors";
import { useEffect, useState } from "react";
import { allAutoModelByMaker } from "../../redux/References/operations";

import { useCallback } from "react";
import { getSubmitObject } from "../../redux/byParameters/selectors";

const CarDataForm = ({ formik, values }) => {
  const dispatch = useDispatch();
  const allAutoMakers = useSelector(getAutoMakers);
  const { outsideUkraine } = useSelector(getSubmitObject);
  const [insuranceObject] = useSelector(getAutoByNumber);

  const [selectedAutoMaker, setSelectedAutoMaker] = useState({
    name: "Оберіть марку авто",
  });
  const [selectedAutoModel, setSelectedAutoModel] = useState({
    name: "Оберіть модель авто",
  });
  console.log(selectedAutoMaker);
  const handleBlurStateNumber = (e) => {
    console.log("handleBlurStateNumber", e.target.value);
    const v = e.target.value.trim().toUpperCase();
    const stateNumber = v.match(DNUMBER_REGEX);
    console.log("stateNumber", stateNumber);
    if (stateNumber) {
      console.log("stateNumber", stateNumber);
      dispatch(autoByNumber(stateNumber[0]));
      formik.handleChange(e);
    }
  };
  const handleChangeStateNumber = (e) => {
    const e2 = e.target.value.trim().toUpperCase();
    e.target.value = e2;
    formik.handleChange(e);
  };
  const handleChangeBrand = (e) => {
    setSelectedAutoModel({
      name: "Оберіть модель авто",
    });
    setSelectedAutoMaker(e);
    dispatch(allAutoModelByMaker(e.id));
    // formik.setFieldValue("maker", e);
  };

  const handleChangeModel = (e) => {
    setSelectedAutoModel(e);
    // formik.setFieldValue("model", e);
  };

  const handleChangeVinNumber = (e) => {
    const e2 = e.target.value.trim().toUpperCase();
    e.target.value = e2;
    formik.handleChange(e);
  };

  const findMakerByName = useCallback(
    (name) => {
      console.log(
        allAutoMakers?.find(
          (el) => el?.name?.toUpperCase() === name.toUpperCase()
        )
      );
      return allAutoMakers?.find(
        (el) => el?.name?.toUpperCase() === name.toUpperCase()
      );
    },
    [allAutoMakers]
  );
  console.log(findMakerByName);
  useEffect(() => {
    const maker = formik.values?.brand?.replace(/ .*/, "");
    console.log("maker", maker);
    if (findMakerByName(maker)) {
      const m = findMakerByName(maker);
      setSelectedAutoMaker(m);
      // formik.setFieldValue("maker", m);
    }
  }, [findMakerByName]);
  console.log(insuranceObject?.stateNumber ? true : false);
  return (
    <>
      <InputContBoxStyled>
        <GeneralInput
          id="stateNumber"
          lableText="Номерний знак*:"
          value={formik.values.stateNumber}
          handleBlur={handleBlurStateNumber}
          customFunc={handleChangeStateNumber}
          formikData={formik}
        />
        <GeneralInput
          id="graduationYear"
          lableText="Рік випуску*:"
          value={formik.values?.year}
          formikData={formik}
          isReadOnly={!outsideUkraine}
          isDisabled={insuranceObject?.stateNumber ? false : true}
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
          value={formik.values?.bodyNumber}
          formikData={formik}
          customFunc={handleChangeVinNumber}
          isReadOnly={!outsideUkraine}
          isDisabled={insuranceObject?.stateNumber ? false : true}
        />
      </InputContBoxStyled>
    </>
  );
};

export default CarDataForm;

CarDataForm.propTypes = {
  formik: PropTypes.object,
};
