import { DocInputsStyled, InputContBoxStyled } from "./InsuredDataForm.styled";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";

const selectArrOptions = [
  {
    value: "Ціна",
    label: "Ціна",
  },
  {
    value: "Популярність",
    label: "Популярність",
  },
  {
    value: "Компанії",
    label: "Компанії",
  },
];

const InsuredDataForm = ({ formik }) => {
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
        <GeneralInput
          id="birthDate"
          lableText="Дата народження*:"
          formikData={formik}
          type="date"
        />
        <GeneralInput id="taxNumber" lableText="РНОКПП*:" formikData={formik} />
        <GeneralSelect
          id="licensDoc"
          lableText="Документ на вибір*:"
          optionsArr={selectArrOptions}
          //changeCB, //функція що повертає вибране значення (піднесення)
        />
        <DocInputsStyled>
          <GeneralInput id="series" lableText="Серія*:" formikData={formik} />
          <GeneralInput
            id="docNumber"
            lableText="Номер*:"
            formikData={formik}
          />
          <GeneralInput
            id="docIssuedBy"
            lableText="Ким виданий*:"
            formikData={formik}
          />
          <GeneralInput
            id="issueDate"
            lableText="Дата видачі*:"
            formikData={formik}
            type="date"
          />
        </DocInputsStyled>
      </InputContBoxStyled>
    </>
  );
};

export default InsuredDataForm;

InsuredDataForm.propTypes = {
  formik: PropTypes.object,
};
