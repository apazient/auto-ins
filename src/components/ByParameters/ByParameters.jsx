import { useFormik } from "formik";
import {
  AllCheckboxContStyled,
  AllInputContStyled,
  FormStyled,
  SubmitButton,
} from "./ByParameters.styled";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCityByName } from "../../services/api";
import debounce from "lodash.debounce";
import {
  selectCategoryOptions,
  selestAutoCategory,
} from "../../helpers/ByParameters/selectOptions";

const ByParameters = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();

  const [vehicle, setVehicle] = useState(selectCategoryOptions[0]);
  const [engineCapacity, setEngineCapacity] = useState(
    selestAutoCategory(vehicle.value)[0]
  );
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

  const handleChangeVehicle = (e) => {
    setVehicle(e);
    setEngineCapacity(selestAutoCategory(e.value)[0]);
  };
  const formik = useFormik({
    initialValues: {
      benefits: false,
      foreignNumber: false,
    },
    onSubmit: (values) => {
      const dateF = new Date(Date.now() + 86400000);
      const date = new Date();
      const dateFrom = dateF.toISOString().substring(0, 10);
      const dateTo =
        date.getFullYear() + 1 + date.toISOString().substring(4, 10);
      const sendObj = {
        customerCategory: values.benefits ? "PRIVILEGED" : "NATURAL",
        autoCategory: engineCapacity.value,
        outsideUkraine: values.foreignNumber,
        registrationPlace: address.value,
        usageMonths: 0,
        taxi: false,
        dateFrom,
        dateTo,
        salePoint: 40629,
      };

      navigate("/prices", {
        state: { from: locationPath.pathname, data: sendObj },
      });
    },
  });

  return (
    <div>
      <FormStyled onSubmit={formik.handleSubmit}>
        <AllInputContStyled>
          <GeneralSelect
            id="vehicle"
            lableText="Транспортний засіб"
            optionsArr={selectCategoryOptions}
            changeCB={handleChangeVehicle} //функція що повертає вибране значення (піднесення)
            currentValue={vehicle}
          />
          <GeneralSelect
            id="address"
            lableText="Об’єм двигуна"
            optionsArr={selestAutoCategory(vehicle.value)}
            changeCB={setEngineCapacity} //функція що повертає вибране значення (піднесення)
            currentValue={engineCapacity}
          />
          <GeneralSelect
            id="engineCapacity"
            lableText="Адреса за техпаспортом"
            optionsArr={allAddress}
            changeCB={setAddress} //функція що повертає вибране значення (піднесення)
            currentValue={address}
            inputValue={qweryText}
            inputChangeCB={setQweryText}
            helper={"тут потрібно ввести текст)))"}
            isDisabled={formik.values.foreignNumber}
          />
        </AllInputContStyled>

        <AllCheckboxContStyled>
          <GeneralCheckbox
            lableText="Є пільги"
            name="benefits"
            val={formik.values.benefits}
            changeCB={formik.handleChange}
            helper="Учасники війни; Інваліди II групи; Громадяни України, які постраждали внаслідок Чорнобильської катастрофи, віднесені до I та II категорії; 
          Пенсіонери"
          />
          <GeneralCheckbox
            lableText="Авто на іноземних номерах"
            name="foreignNumber"
            val={formik.values.foreignNumber}
            changeCB={(e) => {
              setQweryText("");
              setAddress({ label: "", value: "" });
              formik.handleChange(e);
            }}
          />
        </AllCheckboxContStyled>

        <SubmitButton type="submit">Розрахувати вартість</SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByParameters;
