import { useFormik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import { FormStyled, InputStyled } from "./ByLicensePlate.styled";
import {
  InputContStyled,
  SubmitButton,
} from "../ByParameters/ByParameters.styled";

import HelpCircle from "../HelpCircle/HelpCircle";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setStateNumber } from "../../redux/Calculator/calculatorSlice";
import {
  setAddress,
  setEngineCapacity,
  setSubmitObj,
} from "../../redux/byParameters/byParametersSlice";
import {
  setAutoMakers,
  setAutoModelByMaker,
} from "../../redux/References/referencesSlice";
import { DNUMBER_REGEX } from "../../constants";
const ByLicensePlate = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      licensePlate: "",
      benefits: false,
    },
    onSubmit: (values) => {
      const dateF = new Date(Date.now() + 86400000);
      const d = dateF.toISOString().substring(0, 10);
      const params = {
        outsideUkraine: false,
        customerCategory: values.benefits ? "PRIVILEGED" : "NATURAL",
        stateNumber: values.licensePlate,
        dateFrom: d,
      };
      dispatch(setAddress({ label: "", value: "" }));
      dispatch(setEngineCapacity({ label: "", value: "" }));
      dispatch(setAutoModelByMaker([]));
      dispatch(setAutoMakers([]));
      dispatch(setStateNumber(params.stateNumber));
      dispatch(setSubmitObj(params));
      navigate("/prices", {
        state: { from: locationPath.pathname, data: params },
      });
    },

    validationSchema: Yup.object({
      licensePlate: Yup.string().matches(DNUMBER_REGEX),
    }),
  });

  return (
    <div>
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputContStyled>
          <Typography variant="body1" component="label" htmlFor="license-plate">
            Номер транспортного засобу
            <HelpCircle lableText="Державний номерний знак" />
          </Typography>
          <InputStyled
            name="licensePlate"
            type="text"
            value={formik.values.licensePlate.trim().toUpperCase()}
            onChange={(e) => {
              const e2 = e.target.value.trim().toUpperCase();
              e.target.value = e2;
              formik.handleChange(e);
            }}
            id="license-plate"
            required
          />
        </InputContStyled>
        <GeneralCheckbox
          lableText="Є пільги"
          name="benefits"
          val={formik.values.benefits}
          changeCB={formik.handleChange}
          helper="Учасники війни; Інваліди II групи; Громадяни України, які постраждали внаслідок Чорнобильської катастрофи, віднесені до I та II категорії; 
          Пенсіонери"
        />
        <SubmitButton type="submit" disabled={!formik.values.licensePlate}>
          Розрахувати вартість
        </SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByLicensePlate;
