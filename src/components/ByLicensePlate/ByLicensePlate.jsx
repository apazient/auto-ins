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
import { useDispatch, useSelector } from "react-redux";
import { osagoByDn } from "../../redux/Calculator/operations";

import { setIsLoading } from "../../redux/Global/globalSlice";
import { getIsLoading } from "../../redux/Global/selectors";
import { getTariffPolicyChoose } from "../../redux/Calculator/selectors";
import { useEffect } from "react";
import { setStateNumber } from "../../redux/Calculator/calculatorSlice";
const ByLicensePlate = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const getData = useSelector(getTariffPolicyChoose);

  useEffect(() => {
    if (getData) {
      navigate("/prices", { state: { from: locationPath.pathname } });
    }
  }, [getData, locationPath.pathname, navigate]);

  const formik = useFormik({
    initialValues: {
      licensePlate: "",
      benefits: false,
    },
    onSubmit: (values) => {
      const dateF = new Date(Date.now() + 86400000);
      const date = new Date();
      const dateFrom = dateF.toISOString().substring(0, 10);
      const dateTo =
        date.getFullYear() + 1 + date.toISOString().substring(4, 10);
      let sendObj = {
        customerCategory: values.benefits ? "PRIVILEGED" : "NATURAL",
        stateNumber: decodeURIComponent(values.licensePlate),
        dateFrom,
        dateTo,
      };
      dispatch(setIsLoading(true));
      dispatch(osagoByDn(sendObj))
        .then(() => {
          dispatch(setIsLoading(false));
          dispatch(setStateNumber(decodeURIComponent(values.licensePlate)));
        })
        .catch(() => {
          dispatch(setIsLoading(false));
        });
      
      console.log(dispatch(osagoByDn(sendObj)));
    },
    validationSchema: Yup.object().shape({
      licensePlate: Yup.string().required("Required field!"),
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
            value={formik.values.licensePlate}
            onChange={formik.handleChange}
            id="license-plate"
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
        <SubmitButton type="submit" disabled={isLoading}>
          Розрахувати вартість
        </SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByLicensePlate;
