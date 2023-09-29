import { useFormik } from "formik";
import * as Yup from "yup";
import {
  InputStyled,
  LableStyled,
  SelectStyled,
  SubmitButton,
} from "./ByParameters.styled";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

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
      <Typography variant="body1" compomponent="label" htmlFor="vehicle">
        Транспортний засіб
      </Typography>
      <Typography
        variant="body1"
        compomponent="label"
        classNamePrefix="customSelect"
        id="vehicle"
      />
      <Typography variant="body1" compomponent="label" htmlFor="engineCapacity">
        Об'єм двигуна
      </Typography>
      <SelectStyled classnameprefix="customSelect" id="engineCapacity" />
      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="body1"
          compomponent="label"
          htmlFor="location-input"
        >
          Адреса за техпаспортом
        </Typography>
        <InputStyled
          name="location"
          type="text"
          value={formik.values.location}
          onChange={formik.handleChange}
          id="location-input"
          placeholder="Виберіть населений пункт..."
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
