import { DocInputsStyled, InputContBoxStyled } from "./InsuredDataForm.styled";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectForms } from "../../redux/Global/selectors";

const InsuredDataForm = ({ formik, selectData }) => {
  const { initialValues } = formik;
  const formData = useSelector(selectForms);
  const insuredFormData = formData.formInsuredData;
  const { InsuredDataSelectOptions, identityCard, setIdentityCard } =
    selectData;
  const isID_PASSPORT = identityCard.value === "ID_PASSPORT";

  return (
    <>
      <InputContBoxStyled>
        <GeneralInput
          id="surname"
          lableText="Прізвище*:"
          value={
            insuredFormData?.surname
              ? insuredFormData.surname
              : initialValues.surname
          }
          formikData={formik}
        />
        <GeneralInput
          id="name"
          lableText="Ім’я*:"
          value={
            insuredFormData?.name ? insuredFormData.name : initialValues.name
          }
          formikData={formik}
        />
        <GeneralInput
          id="middleName"
          lableText="По батькові*:"
          value={
            insuredFormData?.middleName
              ? insuredFormData.middleName
              : initialValues.middleName
          }
          formikData={formik}
        />
        <GeneralInput
          id="birthDate"
          lableText="Дата народження*:"
          value={
            insuredFormData?.birthDate
              ? insuredFormData.birthDate
              : initialValues.birthDate
          }
          formikData={formik}
          type="date"
        />
        <GeneralInput
          id="taxNumber"
          lableText="РНОКПП*:"
          value={
            insuredFormData?.taxNumber
              ? insuredFormData.taxNumber
              : initialValues.taxNumber
          }
          formikData={formik}
        />
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
              value={
                insuredFormData?.series
                  ? insuredFormData.series
                  : initialValues.series
              }
              formikData={formik}
            />
          )}
          <GeneralInput
            id="number"
            lableText="Номер*:"
            value={
              insuredFormData?.number
                ? insuredFormData.number
                : initialValues.number
            }
            formikData={formik}
          />
          {isID_PASSPORT && (
            <GeneralInput
              id="record"
              lableText="УНЗР*:"
              value={
                insuredFormData?.record
                  ? insuredFormData.record
                  : initialValues.record
              }
              formikData={formik}
            />
          )}
          <GeneralInput
            id="issuedBy"
            lableText="Ким виданий*:"
            value={
              insuredFormData?.issuedBy
                ? insuredFormData.issuedBy
                : initialValues.issuedBy
            }
            formikData={formik}
          />
          <GeneralInput
            id="date"
            lableText="Дата видачі*:"
            value={
              insuredFormData?.date ? insuredFormData.date : initialValues.date
            }
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
  selectData: PropTypes.object,
};
