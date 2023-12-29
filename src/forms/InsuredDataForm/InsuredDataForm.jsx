import {
  DataContainerWrapper,
  DocInputsStyled,
  InputContBoxStyled,
} from "./InsuredDataForm.styled";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import sub from "date-fns/sub";
import { InputStyled } from "../../components/GeneralInput/GeneralInput.styled";

const InsuredDataForm = ({ formik, selectData }) => {
  const { InsuredDataSelectOptions, identityCard, setIdentityCard } =
    selectData;

  const isID_PASSPORT = identityCard.value === "ID_PASSPORT";
  const [birthDate, setBirthDate] = useState(
    sub(new Date(), {
      years: 18,
    })
  );

  const [date, setDate] = useState(new Date());
  const hadleChangeBirthDate = (e) => {
    formik.setFieldValue("birthDate", e);
  };
  const hadleChangeDate = (e) => {
    formik.setFieldValue("date", e);
  };

  const handleChangeInput = (e) => {
    const e2 = e.target.value.trim().toUpperCase();
    e.target.value = e2;
    formik.handleChange(e);
  };
  return (
    <>
      <InputContBoxStyled>
        <GeneralInput id="surname" lableText="Прізвище*:" formikData={formik} />
        <GeneralInput id="name" lableText="Ім’я*:" formikData={formik} />
        <GeneralInput
          id="middleName"
          lableText="По батькові*:"
          formikData={formik}
        />
        {formik.errors.birthDate ? (
          <div style={{ color: "red" }}>{formik.errors.birthDate}</div>
        ) : null}
        <DataContainerWrapper>
          <label htmlFor="dateFrom">Дата народження*:</label>
          <ReactDatePicker
            className="yearMonthPicker"
            id="birthDate"
            mode="single"
            selected={birthDate}
            onSelect={setBirthDate}
            onChange={hadleChangeBirthDate}
            // closeOnScroll={(e) => e.target === document}
            startDate={birthDate}
            name="date"
            maxDate={sub(new Date(), {
              years: 18,
            })}
            customInput={<InputStyled />}
            dateFormat="dd/MM/yyyy"
            showIcon={true}
            locale="uk"
            withPortal
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            icon={
              <Box className="iconCalender">
                <SpriteSVG name={"icon-calendar"} />
              </Box>
            }
          />
        </DataContainerWrapper>
        <GeneralInput id="taxNumber" lableText="РНОКПП*:" formikData={formik} />
        <GeneralSelect
          id="licensDoc"
          lableText="Документ на вибір*:"
          optionsArr={InsuredDataSelectOptions}
          changeCB={setIdentityCard} //функція що повертає вибране значення (піднесення)
          currentValue={identityCard}
        />
        <DocInputsStyled>
          {!isID_PASSPORT && (
            <GeneralInput
              id="series"
              lableText="Серія*:"
              formikData={formik}
              customFunc={handleChangeInput}
            />
          )}
          <GeneralInput id="number" lableText="Номер*:" formikData={formik} />
          {isID_PASSPORT && (
            <GeneralInput id="record" lableText="УНЗР*:" formikData={formik} />
          )}
          <GeneralInput
            id="issuedBy"
            lableText="Ким виданий*:"
            formikData={formik}
          />
          {formik.errors.date ? (
            <div style={{ color: "red" }}>{formik.errors.date}</div>
          ) : null}
          <DataContainerWrapper className="document-info">
            <label htmlFor="dateFrom">Дата видачі*:</label>
            <ReactDatePicker
              id="date"
              mode="single"
              selected={date}
              onSelect={setDate}
              onChange={hadleChangeDate}
              closeOnScroll={(e) => e.target === document}
              startDate={date}
              name="date"
              minDate={birthDate}
              maxDate={new Date()}
              customInput={<InputStyled />}
              dateFormat="dd/MM/yyyy"
              showIcon={true}
              locale="uk"
              withPortal
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              icon={
                <Box className="iconCalender">
                  <SpriteSVG name={"icon-calendar"} />
                </Box>
              }
            />
          </DataContainerWrapper>
        </DocInputsStyled>
      </InputContBoxStyled>
    </>
  );
};

export default InsuredDataForm;

InsuredDataForm.propTypes = {
  formik: PropTypes.object,
  selectData: PropTypes.object,
};
