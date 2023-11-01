import {
  DocInputsStyled,
  InputContBoxStyled,
} from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import { useEffect, useState } from "react";
import { getCityByName } from "../../services/api";

const HomeAddressForm = ({ formik }) => {
  const [allAddress, setAllAddress] = useState([]);
  const [address, setAddress] = useState({ label: "", value: "" });
  const [qweryText, setQweryText] = useState("");

  useEffect(
    () => async () => {
      try {
        if (qweryText) {
          const addressVariants = await getCityByName(qweryText);
          const addressSelectOptions = addressVariants.map((address) => ({
            label: address.nameFull,
            value: address.id,
          }));
          setAllAddress(addressSelectOptions);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    [qweryText]
  );
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
        <GeneralInput id="region" lableText="Область*:" formikData={formik} />
        <GeneralInput id="city" lableText="Місто*:" formikData={formik} />
        <GeneralInput id="street" lableText="Вулиця*:" formikData={formik} />
        <DocInputsStyled>
          <GeneralInput
            id="houseNumber"
            lableText="Будинок*:"
            formikData={formik}
          />
          <GeneralInput
            id="apartmentNumber"
            lableText="Квартира:"
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
