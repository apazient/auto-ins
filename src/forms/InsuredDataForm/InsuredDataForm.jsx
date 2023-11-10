import { DocInputsStyled, InputContBoxStyled } from "./InsuredDataForm.styled";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectGlobalCustomerDataCustomer } from "../../redux/Global/selectors";
import { insuredDataInitialValues } from "../../helpers/formikInitialValues";

const InsuredDataForm = ({ formik, selectData }) => {
  const customerFormData = useSelector(selectGlobalCustomerDataCustomer);  
  console.log('customerFormData: ', customerFormData);
  const initialValuesInsured = insuredDataInitialValues;

  const { InsuredDataSelectOptions, identityCard, setIdentityCard } =
    selectData;
  const isID_PASSPORT = identityCard.value === "ID_PASSPORT";
  console.log('identityCard: ', identityCard);

  return (
    <>
      <InputContBoxStyled>
        <GeneralInput
          id="surname"
          lableText="Прізвище*:"
          value={
            customerFormData.surname
              ? customerFormData.surname
              : initialValuesInsured.surname
          }
          formikData={formik}
        />
        <GeneralInput
          id="name"
          lableText="Ім’я*:"
          value={
            customerFormData.name
              ? customerFormData.name
              : initialValuesInsured.name
          }
          formikData={formik}
        />
        <GeneralInput
          id="middleName"
          lableText="По батькові*:"
          value={
            customerFormData.middleName
              ? customerFormData.middleName
              : initialValuesInsured.middleName
          }
          formikData={formik}
        />
        <GeneralInput
          id="birthDate"
          lableText="Дата народження*:"
          value={
            customerFormData.birthDate
              ? customerFormData.birthDate
              : initialValuesInsured.birthDate
          }
          formikData={formik}
          type="date"
        />
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
              value={
                customerFormData.document?.series
                  ? customerFormData.document?.series
                  : initialValuesInsured.series
              }
              formikData={formik}
            />
          )}
          <GeneralInput
            id="number"
            lableText="Номер*:"
            value={
              customerFormData.document?.number
                ? customerFormData.document?.number
                : initialValuesInsured.number
            }
            formikData={formik}
          />
          {isID_PASSPORT && (
            <GeneralInput
              id="record"
              lableText="УНЗР*:"
              value={
                customerFormData.record
                  ? customerFormData.record
                  : initialValuesInsured.record
              }
              formikData={formik}
            />
          )}
          <GeneralInput
            id="issuedBy"
            lableText="Ким виданий*:"
            value={
              customerFormData.document?.issuedBy
                ? customerFormData.document?.issuedBy
                : initialValuesInsured.issuedBy
            }
            formikData={formik}
          />
          <GeneralInput
            id="date"
            lableText="Дата видачі*:"
            value={
              customerFormData.document?.date
                ? customerFormData.document?.date
                : initialValuesInsured.date
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
