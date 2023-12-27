import { useFormik } from "formik";
import {
  AllCheckboxContStyled,
  AllInputContStyled,
  DataContainerStyled,
  FormStyled,
  SubmitButton,
} from "./ByParameters.styled";
import addDays from "date-fns/addDays";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import { useLocation, useNavigate } from "react-router-dom";
import {
  selectCategoryOptions,
  selectAutoCategory,
} from "../../helpers/ByParameters/selectOptions";
import { useSelector } from "react-redux";
import HelperImg from "../HelpCircle/HelperImg/HelperImg";
import HelperList from "../HelpCircle/HelperList/HelperList";
import { Box } from "@mui/material";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import { addMonths } from "date-fns/esm";
import { InputStyled } from "../GeneralInput/GeneralInput.styled";
import { useActions } from "../../hooks/useActions";
import format from "date-fns/format";

const ByParameters = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const {
    setEngineCapacity,
    setVehicle,
    setQueryText,
    getAddress,
    setAddressOptions,
    setAddress,
    setSubmitObj,
    setStateNumber,
    setAutoMakers,
    setAutoByNumber,
    setAutoModelByMaker,
    setTariffPolicyChoose,
    setTariffVcl,
    osagoByParams,
  } = useActions();
  const {
    queryText,
    addressOptions: allAddress,
    address,
    vehicle,
    engineCapacity,
    foreignNumber,
    benefits,
  } = useSelector((state) => state.byParameters);
  const [dateFrom, setDateFrom] = useState(addDays(new Date(), 1));

  const handleChangeengineCapacity = (e) => {
    setEngineCapacity(e);
  };
  const handleChangeVehicle = (e) => {
    setVehicle(e);
    setEngineCapacity(selectAutoCategory(e.value)[0]);
  };
  const handleChangeQueryText = (e) => {
    setQueryText(e.trim());
    if (e) {
      getAddress(e);
    }
    if (!e) {
      setAddressOptions([]);
    }
  };
  const changeAddress = (e) => {
    if (queryText) {
      setAddress(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      benefits,
      foreignNumber,
    },
    onSubmit: (values) => {
      let sendObj = {
        customerCategory: values.benefits ? "PRIVILEGED" : "NATURAL",
        autoCategory: engineCapacity.value,
        outsideUkraine: values.foreignNumber,
        usageMonths: 0,
        taxi: false,
        dateFrom: format(dateFrom, "yyyy-MM-dd"),
      };
      address.value ? (sendObj.registrationPlace = address.value) : null;
      setSubmitObj(sendObj);
      setStateNumber("");
      setAutoMakers([]);
      setAutoByNumber([]);
      setAutoModelByMaker([]);
      setTariffPolicyChoose([]);
      setTariffVcl([]);
      osagoByParams(sendObj);

      navigate("/prices", {
        state: { from: locationPath },
      });
    },
  });

  engineCapacity.value === "B5"
    ? (formik.values.benefits = false)
    : formik.values.benefits;

  return (
    <div>
      <FormStyled onSubmit={formik.handleSubmit}>
        <AllInputContStyled>
          <GeneralSelect
            id="vehicle"
            lableText="Транспортний засіб"
            optionsArr={selectCategoryOptions}
            changeCB={handleChangeVehicle}
            currentValue={vehicle}
          />
          <GeneralSelect
            id="engineCapacity"
            lableText="Об’єм двигуна"
            optionsArr={selectAutoCategory(vehicle.value)}
            changeCB={handleChangeengineCapacity}
            currentValue={engineCapacity}
          />
          <GeneralSelect
            id="address"
            lableText="Адреса за техпаспортом"
            optionsArr={allAddress}
            changeCB={changeAddress}
            currentValue={address}
            inputValue={queryText}
            inputChangeCB={handleChangeQueryText}
            helper={<HelperImg />}
            isDisabled={formik.values.foreignNumber}
          />
          <DataContainerStyled>
            <label htmlFor="dateFrom">Дата початку дії поліса:</label>
            <ReactDatePicker
              id="dateFrom"
              selected={dateFrom}
              onSelect={setDateFrom}
              closeOnScroll={(e) => e.target === document}
              customInput={<InputStyled />}
              name="date"
              dateFormat="dd/MM/yyyy"
              showIcon={true}
              minDate={addDays(new Date(), 1)}
              maxDate={addMonths(new Date(), 3)}
              startDate={dateFrom}
              locale="uk"
              withPortal
              icon={
                <Box className="iconCalender">
                  <SpriteSVG name="icon-calendar" />
                </Box>
              }
            />
          </DataContainerStyled>
        </AllInputContStyled>

        <AllCheckboxContStyled>
          <GeneralCheckbox
            lableText="Є пільги"
            name="benefits"
            val={formik.values.benefits}
            changeCB={formik.handleChange}
            isChecked={engineCapacity.value === "B5" ? false : benefits}
            color={
              engineCapacity.value === "B5" ? "rgba(243, 243, 243, 0.40)" : null
            }
            isDisabled={engineCapacity.value === "B5" ? true : false}
            helper={<HelperList />}
          />
          <GeneralCheckbox
            lableText="Авто на іноземних номерах"
            name="foreignNumber"
            val={formik.values.foreignNumber}
            isChecked={foreignNumber}
            changeCB={(e) => {
              setQueryText("");
              setAddress({ label: "", value: "" });
              formik.handleChange(e);
            }}
          />
        </AllCheckboxContStyled>

        <SubmitButton
          type="submit"
          disabled={
            !address.value && !formik.values.foreignNumber ? true : false
          }
        >
          Розрахувати вартість
        </SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByParameters;
