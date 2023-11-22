import { DocInputsStyled, InputContBoxStyled } from "./InsuredDataForm.styled";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { useState } from "react";
import moment from "moment/moment";
import "react-datepicker/dist/react-datepicker.css";
import { uk } from "date-fns/locale";
import sub from "date-fns/sub";
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";

const InsuredDataForm = ({ formik, selectData }) => {
  registerLocale("uk", uk);
  setDefaultLocale("uk");
  const { InsuredDataSelectOptions, identityCard, setIdentityCard } =
    selectData;
  const isID_PASSPORT = identityCard.value === "ID_PASSPORT";
  const [birthDate, setBirthDate] = useState(
    format(
      sub(new Date(), {
        years: 18,
      }),
      "MM/dd/yyyy"
    )
  );
  const [dateIssue, setDateIssue] = useState(
    format(
      sub(new Date(), {
        years: 18,
      }),
      "MM/dd/yyyy"
    )
  );
  const handleChangeDate = (e) => {
    console.log(e);
    console.log(format(e, "MM/dd/yyyy"));
    setBirthDate(format(e, "MM/dd/yyyy"));
  };

  console.log("formik");
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

        <Box className="box">
          <label htmlFor="dateFrom">Дата народження*:</label>
          <DatePicker
            id="birthDate"
            value={birthDate}
            closeOnScroll={(e) => e.target === document}
            onChange={handleChangeDate}
            startDate={birthDate}
            name="date"
            maxDate={sub(new Date(), {
              years: 18,
            })}
            dateFormat="DD/MM/YYYY"
            showIcon={true}
            locale="uk"
            withPortal
            showMonthDropdown
            showYearDropdown
            icon={
              <Box className="iconCalender">
                <SpriteSVG name={"icon-calendar"} />
              </Box>
            }
          />
        </Box>
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
            <GeneralInput id="series" lableText="Серія*:" formikData={formik} />
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
          <Box className="box">
            <label htmlFor="dateFrom">Дата видачі*:</label>
            <DatePicker
              id="dateIssue"
              value={dateIssue}
              closeOnScroll={(e) => e.target === document}
              onChange={handleChangeDate}
              startDate={dateIssue}
              name="date"
              maxDate={sub(new Date(), {
                years: 18,
              })}
              dateFormat="DD/MM/YYYY"
              showIcon={true}
              locale="uk"
              withPortal
              showMonthDropdown
              showYearDropdown
              icon={
                <Box className="iconCalender">
                  <SpriteSVG name={"icon-calendar"} />
                </Box>
              }
            />
          </Box>
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
