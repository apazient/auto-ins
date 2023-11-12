import {
  DocInputsStyled,
  InputContBoxStyled,
} from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectForms } from "../../redux/Global/selectors";
// import { getCityByName } from "../../services/api";

const HomeAddressForm = ({ formik }) => {
  const {initialValues} = formik  
  const formData = useSelector(selectForms);
  const homeAddressFormData = formData.formHomeAddress;   

  const [allAddress, setAllAddress] = useState([]);
  const [address, setAddress] = useState({ label: "", value: "" });
  const [qweryText, setQweryText] = useState("");

  // useEffect(
  //   () => async () => {
  //     try {
  //       if (qweryText) {
  //         const addressVariants = await getCityByName(qweryText);
  //         const addressSelectOptions = addressVariants.map((address) => ({
  //           label: address.nameFull,
  //           value: address.id,
  //         }));
  //         setAllAddress(addressSelectOptions);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   },
  //   [qweryText]
  // );
  return (
    <>
      <InputContBoxStyled>
        <GeneralSelect
          id="address"
          lableText="Адреса"
          optionsArr={allAddress}
          changeCB={setAddress} //функція що повертає вибране значення (піднесення)
          currentValue={address}
          inputValue={qweryText}
          inputChangeCB={setQweryText}
        />
        <GeneralInput
          id="region"
          lableText="Область*:"
          value={
            homeAddressFormData?.region
              ? homeAddressFormData?.region
              : initialValues.region
          }
          formikData={formik}
        />
        <GeneralInput
          id="city"
          lableText="Місто*:"
          value={
            homeAddressFormData?.city
              ? homeAddressFormData.city
              : initialValues.city
          }
          formikData={formik}
        />
        <GeneralInput
          id="street"
          lableText="Вулиця*:"
          value={
            homeAddressFormData?.street
              ? homeAddressFormData.street
              : initialValues.region
          }
          formikData={formik}
        />
        <DocInputsStyled>
          <GeneralInput
            id="houseNumber"
            lableText="Будинок*:"
            value={
              homeAddressFormData?.houseNumber
                ? homeAddressFormData.houseNumber
                : initialValues.houseNumber
            }
            formikData={formik}
          />
          <GeneralInput
            id="apartmentNumber"
            lableText="Квартира:"
            value={
              homeAddressFormData?.apartmentNumber
                ? homeAddressFormData.apartmentNumber
                : initialValues.apartmentNumber
            }
            formikData={formik}
          />
        </DocInputsStyled>
      </InputContBoxStyled>
    </>
  );
};

export default HomeAddressForm;

HomeAddressForm.propTypes = {
  formik: PropTypes.object,
};
