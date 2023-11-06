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
// import debounce from "lodash.debounce";
import {
  selectAddressOptions,
  selectCategoryOptions,
  selestAutoCategory,
} from "../../helpers/ByParameters/selectOptions";
import { useDispatch, useSelector } from "react-redux";
import { osagoByParams } from "../../redux/Calculator/operations";
import { getAddress } from "../../redux/byParameters/operations";
import { setAddress, setQueryText, setSubmitObj } from "../../redux/byParameters/byParametersSlice";

const ByParameters = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const dispatch = useDispatch();
  const queryText = useSelector(state=>state.byParameters.queryText)
  const allAddress = useSelector(state=>state.byParameters.addressOptions)
  const address = useSelector(state=>state.byParameters.address)
  
  const [vehicle, setVehicle] = useState(selectCategoryOptions[0]);
  const [engineCapacity, setEngineCapacity] = useState(
    selestAutoCategory(vehicle.value)[0]
  );
  // const [allAddress, setAllAddress] = useState([]);
  // const [address, setAddress] = useState({ label: "", value: "" });
  // const [qweryText, setQweryText] = useState("");
  

  // useEffect(
  //   () => async () => {
  //     try {
  //       if (qweryText) {
  //         const addressVariants = await getCityByName(qweryText);
  //         setAllAddress(selectAddressOptions(addressVariants));
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   },
  //   [qweryText]
  // );

  const handleChangeVehicle = (e) => {
    setVehicle(e);
    setEngineCapacity(selestAutoCategory(e.value)[0]);
  };
  const handleChangeQueryText = (e) => {
    dispatch(setQueryText(e));
    dispatch(getAddress(e));
  };
  const changeAddress = (e) => {
    dispatch(setAddress(e))
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
      let sendObj = {
        customerCategory: values.benefits ? "PRIVILEGED" : "NATURAL",
        autoCategory: engineCapacity.value,
        outsideUkraine: values.foreignNumber,
        usageMonths: 0,
        taxi: false,
        dateFrom,
        dateTo,
        salePoint: 40629,
      };
      address.value ? (sendObj.registrationPlace = address.value) : null;
      console.log(sendObj);
      dispatch(setSubmitObj(sendObj))
      navigate("/prices", {
        state: { from: locationPath.pathname, data: sendObj },
      });
      // dispatch(osagoByParams(sendObj))
      //   .unwrap()
      //   .catch((error) => {
      //     const { message } = error.response.data;
      //     if (message) {
      //       console.log(message);
      //     }
      //   });
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
            changeCB={handleChangeVehicle} 
            currentValue={vehicle}
          />
          <GeneralSelect
            id="address"
            lableText="Об’єм двигуна"
            optionsArr={selestAutoCategory(vehicle.value)}
            changeCB={setEngineCapacity} 
            currentValue={engineCapacity}
          />
          <GeneralSelect
            id="engineCapacity"
            lableText="Адреса за техпаспортом"
            optionsArr={allAddress}
            changeCB={changeAddress} 
            currentValue={address}
            inputValue={queryText}
            inputChangeCB={handleChangeQueryText}
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
              dispatch(setQueryText(""));
              dispatch(setAddress({ label: "", value: "" }));
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
