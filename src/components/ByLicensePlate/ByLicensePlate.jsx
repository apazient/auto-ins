import { useFormik } from "formik";
import { Typography } from "@mui/material";
import { FormStyled, InputStyled } from "./ByLicensePlate.styled";
import {
  InputContStyled,
  SubmitButton,
} from "../ByParameters/ByParameters.styled";
import HelpCircle from "../HelpCircle/HelpCircle";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import { useLocation, useNavigate } from "react-router-dom";
import { DNUMBER_REGEX } from "../../constants";
import HelperList from "../HelpCircle/HelperList/HelperList";
import { useActions } from "../../hooks/useActions";
const ByLicensePlate = () => {
  const navigate = useNavigate();
  const locationPath = useLocation();
  const {
    setAddress,
    setIsModalErrorOpen,
    setEngineCapacity,
    setAutoModelByMaker,
    setStateNumber,
    setAutoMakers,
    setSubmitObj,
  } = useActions();

  const formik = useFormik({
    initialValues: {
      licensePlate: "",
      benefits: false,
    },

    validateOnChange: false,
    onSubmit: (values) => {
      const stateNumber = values.licensePlate.match(DNUMBER_REGEX);
      if (!stateNumber) {
        setIsModalErrorOpen(true);
        return;
      }

      const dateF = new Date(Date.now() + 86400000);
      const d = dateF.toISOString().substring(0, 10);
      const params = {
        outsideUkraine: false,
        customerCategory: values.benefits ? "PRIVILEGED" : "NATURAL",
        stateNumber: values.licensePlate,
        dateFrom: d,
      };

      setAddress({ label: "", value: "" });
      setEngineCapacity({ label: "", value: "" });
      setAutoModelByMaker([]);
      setAutoMakers([]);
      setStateNumber(params.stateNumber);
      setSubmitObj(params);
      navigate("/prices", {
        state: { from: locationPath },
      });
    },
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
          helper={<HelperList />}
        />
        <SubmitButton type="submit" disabled={!formik.values.licensePlate}>
          Розрахувати вартість
        </SubmitButton>
      </FormStyled>
    </div>
  );
};

export default ByLicensePlate;
