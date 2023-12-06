import { InputContBoxStyled } from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import {
  getAutoByMakerAndModel,
  getAutoByNumber,
  getAutoMakers,
  getAutoModelByMaker,
} from "../../redux/References/selectors";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { getSubmitObject } from "../../redux/byParameters/selectors";
import { useActions } from "../../hooks/useActions";

import {
  combineError,
  getIsModalErrorOpen,
} from "../../redux/Global/selectors";
import ModalError from "../../components/ModalError/ModalError";

const CarDataForm = ({ formik }) => {
  const {
    setAutoByMakerAndModel,
    allAutoMakers,
    autoByNumber,
    allAutoModelByMaker,
    autoByMakerAndModel,
    setRefError,
  } = useActions();
  const autoMakers = useSelector(getAutoMakers);
  const allAutoModel = useSelector(getAutoModelByMaker);
  const autoByBrand = useSelector(getAutoByMakerAndModel);
  const { outsideUkraine } = useSelector(getSubmitObject);
  const [insuranceObject] = useSelector(getAutoByNumber);
  const [selectedAutoMaker, setSelectedAutoMaker] = useState({
    name: "Оберіть марку авто",
  });
  const [selectedAutoModel, setSelectedAutoModel] = useState({
    name: "Оберіть модель авто",
  });
  const [disabled, setDisabled] = useState(
    insuranceObject?.stateNumber ? false : true
  );

  const stateNumberError = useSelector(combineError);
  const isError = useSelector(getIsModalErrorOpen);

  const handleBlurStateNumber = (e) => {
    setRefError("");
    setAutoByMakerAndModel([]);

    if (e.target.value && outsideUkraine) {
      setDisabled(false);
      allAutoMakers();
    }
    if (e.target.value && !outsideUkraine) {
      autoByNumber(e.target.value);
    }
    formik.handleChange(e);
  };

  useEffect(() => {
    if (insuranceObject) {
      setDisabled(false);
    }
    if (!insuranceObject) {
      setDisabled(true);
    }
  }, [insuranceObject]);

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
    allAutoModelByMaker(e.id);
    formik.setFieldValue("maker", e.id);
  };

  const handleChangeModel = (e) => {
    setSelectedAutoModel(e);
    formik.setFieldValue("maker", e.autoMaker);
    formik.setFieldValue("model", { id: e.id, name: e.name });
  };

  const handleChangeVinNumber = (e) => {
    const e2 = e.target.value.trim().toUpperCase();
    e.target.value = e2;
    formik.handleChange(e);
  };

  const findMakerAndModel = useCallback(() => {
    const maker = autoByBrand[0]?.autoMaker;
    setSelectedAutoMaker(maker);
    if (autoByBrand?.length === 0) {
      allAutoMakers();
    }
  }, [autoByBrand, allAutoMakers]);

  useEffect(() => {
    findMakerAndModel();
  }, [findMakerAndModel]);

  useEffect(() => {
    const maker = formik.values?.brand?.replace(/ .*/, "");
    const model = formik.values?.brand?.replace(/^[^\s]+\s/, "").slice(0, 1);

    if (!outsideUkraine && maker?.length > 0) {
      autoByMakerAndModel(maker + " " + model);
    }
  }, [formik.values?.brand, autoByMakerAndModel, outsideUkraine]);
  if (isError) {
    return <ModalError />;
  }
  return (
    <>
      <InputContBoxStyled>
        <GeneralInput
          id="stateNumber"
          lableText="Номерний знак*:"
          handleBlur={handleBlurStateNumber}
          customFunc={handleChangeStateNumber}
          formikData={formik}
        />
        {formik.errors.stateNumber ? (
          <div className="errorMessage">{formik.errors.stateNumber}</div>
        ) : (
          <div style={{ color: "red" }}>{stateNumberError}</div>
        )}
        <GeneralInput
          id="year"
          lableText="Рік випуску*:"
          formikData={formik}
          isDisabled={disabled}
        />
        <GeneralSelect
          id="brand"
          lableText="Марка*:"
          currentValue={selectedAutoMaker}
          optionsArr={autoMakers}
          defaultValue={{ name: "Оберіть марку авто" }}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          changeCB={handleChangeBrand}
          isDisabled={disabled}
        />

        <GeneralSelect
          id="model"
          lableText="Модель*:"
          currentValue={selectedAutoModel}
          optionsArr={allAutoModel?.length > 0 ? allAutoModel : autoByBrand}
          defaultValue={{ name: "Оберіть модель авто" }}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          isDisabled={disabled}
          isValid={
            selectedAutoModel?.name === "Оберіть модель авто" ? false : true
          }
          changeCB={handleChangeModel}
        />
        <GeneralInput
          id="bodyNumber"
          lableText="VIN Номер*:"
          formikData={formik}
          customFunc={handleChangeVinNumber}
          isDisabled={disabled}
        />
      </InputContBoxStyled>
    </>
  );
};

export default CarDataForm;

CarDataForm.propTypes = {
  formik: PropTypes.object,
};
