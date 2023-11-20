import { InputContBoxStyled } from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { DNUMBER_REGEX } from "../../constants";
import { useDispatch, useSelector } from "react-redux";

import {
  allAutoMakers,
  autoByMakerAndModel,
  autoByNumber,
} from "../../redux/References/operations";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import {
  getAutoByMakerAndModel,
  getAutoByNumber,
  getAutoMakers,
  getAutoModelByMaker,
} from "../../redux/References/selectors";
import { useEffect, useState } from "react";
import { allAutoModelByMaker } from "../../redux/References/operations";

import { useCallback } from "react";
import { getSubmitObject } from "../../redux/byParameters/selectors";
import { setAutoByMakerAndModel } from "../../redux/References/referencesSlice";

const CarDataForm = ({ formik }) => {
  const dispatch = useDispatch();
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
  const handleBlurStateNumber = (e) => {
    dispatch(setAutoByMakerAndModel([]));
    if (e.target.value && outsideUkraine) {
      setDisabled(false);
      dispatch(allAutoMakers());
    }
    if (e.target.value && !outsideUkraine) {
      dispatch(autoByNumber(e.target.value)).then(() => {
        setDisabled(false);
      });
    }
    formik.handleChange(e);
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
    if (autoByBrand.length === 0) {
      dispatch(allAutoMakers());
    }
  }, [autoByBrand, dispatch]);

  useEffect(() => {
    findMakerAndModel();
  }, [findMakerAndModel]);

  useEffect(() => {
    const maker = formik.values?.brand?.replace(/ .*/, "");
    const model = formik.values?.brand?.replace(/^[^\s]+\s/, "").slice(0, 1);

    if (!outsideUkraine && maker?.length > 0) {
      dispatch(autoByMakerAndModel(maker + " " + model));
    }
  }, [formik.values?.brand, dispatch, outsideUkraine]);

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
        {/* {formik.errors.stateNumber ? (
          <div>{formik.errors.stateNumber}</div>
        ) : null} */}
        <GeneralInput
          id="year"
          lableText="Рік випуску*:"
          formikData={formik}
          isDisabled={disabled}
        />
        {/* {formik.errors.year ? <div>{formik.errors.year}</div> : null} */}
        {formik.errors.brand ? (
          <div style={{ color: "red" }}>{formik.errors.brand}</div>
        ) : null}
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
        {/* {formik.errors.brand ? <div>{formik.errors.brand}</div> : null} */}
        {formik.errors.model ? (
          <div style={{ color: "red" }}>{formik.errors.model}</div>
        ) : null}
        <GeneralSelect
          id="model"
          lableText="Модель*:"
          currentValue={selectedAutoModel}
          optionsArr={allAutoModel.length > 0 ? allAutoModel : autoByBrand}
          defaultValue={{ name: "Оберіть модель авто" }}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          isDisabled={disabled}
          changeCB={handleChangeModel}
        />

        <GeneralInput
          id="bodyNumber"
          lableText="VIN Номер*:"
          formikData={formik}
          customFunc={handleChangeVinNumber}
          isDisabled={disabled}
        />
        {/* {formik.errors.bodyNumber ? (
          <div>{formik.errors.bodyNumber}</div>
        ) : null} */}
      </InputContBoxStyled>
    </>
  );
};

export default CarDataForm;

CarDataForm.propTypes = {
  formik: PropTypes.object,
};
