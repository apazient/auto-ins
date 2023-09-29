import { useFormik } from "formik";
import * as Yup from "yup";
import { BlueButton } from "../../../style/Global.styled";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { InputStyled } from "./ByLicensePlate.styled";

const ByLicensePlate = () => {
  const formik = useFormik({
    initialValues: {
      licensePlate: "",
      benefits: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      licensePlate: Yup.string().required("Required field!"),
    }),
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="body1" component="label" htmlFor="license-plate">
          Номер транспортного засобу{" "}
        </Typography>
        <InputStyled
          name="licensePlate"
          type="text"
          value={formik.values.licensePlate}
          onChange={formik.handleChange}
          id="license-plate"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              value={formik.values.benefits}
              onChange={formik.handleChange}
              type="checkbox"
              name="benefits"
            />
          }
          label="Є пільги"
        />
        <BlueButton type="submit">Розрахувати вартість</BlueButton>
      </form>
    </div>
  );
};

export default ByLicensePlate;
