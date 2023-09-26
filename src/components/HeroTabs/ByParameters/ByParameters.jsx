import { useFormik } from "formik";
import * as Yup from "yup";
import { InputStyled, SelectStyled, SubmitButton } from "./ByParameters.styled";
import { Checkbox, FormControlLabel } from "@mui/material";

const ByParameters = () => {
  const formik = useFormik({
    initialValues: {
      location: "",
      benefits: false,
      foreignNumber: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      location: Yup.string().required("Required field!"),
    }),
  });

  return (
    <div>
      <SelectStyled />
      <SelectStyled />
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="location-input">Адреса за техпаспортом</label>
        <InputStyled
          name="location"
          type="text"
          value={formik.values.location}
          onChange={formik.handleChange}
          id="location-input"
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
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              value={formik.values.foreignNumber}
              onChange={formik.handleChange}
              type="checkbox"
              name="foreignNumber"
            />
          }
          label="Авто на іноземних номерах"
        />
        <SubmitButton type="submit">Розрахувати вартість</SubmitButton>
      </form>
    </div>
  );
};

export default ByParameters;
