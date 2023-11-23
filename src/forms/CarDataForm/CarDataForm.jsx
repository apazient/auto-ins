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

const CarDataForm = ({ formik }) => {
  const {
    setAutoByMakerAndModel,
    allAutoMakers,
    autoByNumber,
    allAutoModelByMaker,
    autoByMakerAndModel,
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
  const handleBlurStateNumber = (e) => {
    setAutoByMakerAndModel([]);
    if (e.target.value && outsideUkraine) {
      setDisabled(false);
      allAutoMakers();
    }
    if (e.target.value && !outsideUkraine) {
      autoByNumber(e.target.value).then(() => {
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
    if (autoByBrand.length === 0) {
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

        {formik.errors.stateNumber ? (
          <div style={{ color: "red" }}>{formik.errors.stateNumber}</div>
        ) : null}
        {formik.errors.model ? (
          <div style={{ color: "red" }}>{formik.errors.model}</div>
        ) : null}
        {formik.errors.bodyNumber ? (
          <div style={{ color: "red" }}>{formik.errors.bodyNumber}</div>
        ) : null}
        {formik.errors.year ? (
          <div style={{ color: "red" }}>{formik.errors.year}</div>
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
      </InputContBoxStyled>
    </>
  );
};

export default CarDataForm;

CarDataForm.propTypes = {
  formik: PropTypes.object,
};
