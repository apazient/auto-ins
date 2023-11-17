import {
  DocInputsStyled,
  InputContBoxStyled,
} from "../InsuredDataForm/InsuredDataForm.styled";
import GeneralInput from "../../components/GeneralInput/GeneralInput";
import PropTypes from "prop-types";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import { useState } from "react";
import { fetchAddress } from "../../redux/byParameters/operations";

const HomeAddressForm = ({ formik }) => {  
  

  const [allAddress, setAllAddress] = useState([]);
  const [address, setAddress] = useState({ label: "", value: "" });
  const [queryText, setQueryText] = useState("");

  const getHomeAddress =  async (e) => {
    setQueryText(e)
    setAllAddress( await fetchAddress(e))
}
  const setHomeAddress = async (e) => {
    setAddress(e);
    formik.values.regionANDcity = e.label;
  }

  return (
    <>
      <InputContBoxStyled>
        <GeneralSelect
          id="homeAddress"
          lableText="Адреса"
          optionsArr={allAddress}
          changeCB={setHomeAddress} //функція що повертає вибране значення (піднесення)
          currentValue={address}
          inputValue={queryText}
          inputChangeCB={getHomeAddress}
        />
        <GeneralInput
          id="street"
          lableText="Вулиця*:"          
          formikData={formik}
        />
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
