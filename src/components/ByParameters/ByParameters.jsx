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

import {
  selectCategoryOptions,
  selectAutoCategory,
} from "../../helpers/ByParameters/selectOptions";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../redux/byParameters/operations";
import {
  setAddress,
  setAddressOptions,
  setEngineCapacity,
  setQueryText,
  setSubmitObj,
  setVehicle,
} from "../../redux/byParameters/byParametersSlice";
import {
  setStateNumber,
  setTariffPolicyChoose,
  setTariffVcl,
} from "../../redux/Calculator/calculatorSlice";
import {
  setAutoByNumber,
  setAutoMakers,
  setAutoModelByMaker,
} from "../../redux/References/referencesSlice";

const ByParameters = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const dispatch = useDispatch();
  const {
    queryText,
    addressOptions: allAddress,
    address,
    vehicle,
    engineCapacity,
    foreignNumber,
    benefits,
  } = useSelector((state) => state.byParameters);
  // const queryText = useSelector(state=>state.byParameters.queryText)
  // const allAddress = useSelector(state=>state.byParameters.addressOptions)
  // const address = useSelector(state=>state.byParameters.address)

  // const [vehicle, setVehicle] = useState(selectCategoryOptions[0]);
  // const [engineCapacity, setEngineCapacity] = useState(
  //   selectAutoCategory(vehicle.value)[0]
  // );
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
  
  const handleChangeengineCapacity = (e) => {
    dispatch(setEngineCapacity(e));
  };
  const handleChangeVehicle = (e) => {
    dispatch(setVehicle(e));
    dispatch(setEngineCapacity(selectAutoCategory(e.value)[0]));
  };
  const handleChangeQueryText = (e) => {
    dispatch(setQueryText(e.trim()));
    if (e) {
      dispatch(getAddress(e));
    }
    if (!e) {
      dispatch(setAddressOptions([]));
    }
  };
  const changeAddress = (e) => {
    if (queryText) {
      dispatch(setAddress(e));
    }
  };

  const formik = useFormik({
    initialValues: {
      benefits,
      foreignNumber,
    },
    onSubmit: (values) => {
      const dateF = new Date(Date.now() + 86400000);
      const date = new Date();
      const dateFrom = dateF.toISOString().substring(0, 10);

      let sendObj = {
        customerCategory: values.benefits ? "PRIVILEGED" : "NATURAL",
        autoCategory: engineCapacity.value,
        outsideUkraine: values.foreignNumber,
        usageMonths: 0,
        taxi: false,
        dateFrom,
      };
      address.value ? (sendObj.registrationPlace = address.value) : null;

      dispatch(setSubmitObj(sendObj));
      dispatch(setStateNumber(""));
      dispatch(setAutoByNumber([]));
      dispatch(setAutoMakers([]));
      dispatch(setAutoModelByMaker([]));
      dispatch(setTariffPolicyChoose([]));
      dispatch(setTariffVcl([]));

console.log(sendObj);

      navigate("/prices", {
        state: { from: locationPath.pathname, data: sendObj },
      });
    },
  });

  engineCapacity.value === 'B5' ? formik.values.benefits=false : formik.values.benefits 

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
            optionsArr={selectAutoCategory(vehicle.value)}
            changeCB={handleChangeengineCapacity}
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
            val={formik.values.benefits }
            changeCB={formik.handleChange}
            isChecked={ engineCapacity.value === 'B5' ? false : benefits}
            color={engineCapacity.value==='B5'?"rgba(243, 243, 243, 0.40)":null}
            isDisabled={engineCapacity.value==='B5'?true:false}
            helper="Учасники війни; Інваліди II групи; Громадяни України, які постраждали внаслідок Чорнобильської катастрофи, віднесені до I та II категорії; 
          Пенсіонери"
          />
          <GeneralCheckbox
            lableText="Авто на іноземних номерах"
            name="foreignNumber"
            val={formik.values.foreignNumber}
            isChecked={foreignNumber}
            changeCB={(e) => {
              dispatch(setQueryText(""));
              dispatch(setAddress({ label: "", value: "" }));
              formik.handleChange(e);
            }}
          />
        </AllCheckboxContStyled>

        <SubmitButton
          type="submit"
          disabled={
            !address.value && !formik.values.foreignNumber ? true : false
          }
        >
          Розрахувати вартість
        </SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByParameters;
