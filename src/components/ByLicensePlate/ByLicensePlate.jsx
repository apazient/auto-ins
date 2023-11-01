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

const ByLicensePlate = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const formik = useFormik({
    initialValues: {
      licensePlate: "",
      benefits: false,
    },
    onSubmit: (values) => {
      navigate("/prices", { state: { from: locationPath.pathname } });
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
        <SubmitButton type="submit">Розрахувати вартість</SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByLicensePlate;
