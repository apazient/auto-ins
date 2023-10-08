import { Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ButtonContainerStyled,
  DocInputsStyled,
  FormStyled,
  InputContBoxStyled,
  WhiteButtonSVGStyled,
  WhiteButtonStyled,
  YellowButtonStyled,
} from "./InsuredDataForm.styled";
import GeneralSelect from "../../components/GeneralSelect/GeneralSelect";
import { SpriteSVG } from "../../images/SpriteSVG";
import GeneralInput from "../../components/GeneralInput/GeneralInput";

const selectArrOptions = [
  {
    value: "Ціна",
    label: "Ціна",
  },
  {
    value: "Популярність",
    label: "Популярність",
  },
  {
    value: "Компанії",
    label: "Компанії",
  },
];

const InsuredDataForm = () => {
  const formik = useFormik({
    initialValues: {
      surname: "",
      name: "",
      middleName: "",
      birthDate: "",
      taxNumber: "",
      series: "",
      docNumber: "",
      docIssuedBy: "",
      issueDate: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      surname: Yup.string().required("Required field!"),
      name: Yup.string().required("Required field!"),
      middleName: Yup.string().required("Required field!"),
      taxNumber: Yup.string().required("Required field!"),
      series: Yup.string().required("Required field!"),
      docNumber: Yup.string().required("Required field!"),
      docIssuedBy: Yup.string().required("Required field!"),
      issueDate: Yup.string().required("Required field!"),
    }),
  });
  return (
    <div>
      <FormStyled component="form" autoComplete="off">
        <Typography variant="formTitle" component="h2">
          Дані страхувальника
        </Typography>
        <InputContBoxStyled>
          <GeneralInput
            id="surname"
            lableText="Прізвище*:"
            value={formik.values.surname}
            changeCB={formik.handleChange}
          />
          <GeneralInput
            id="name"
            lableText="Ім’я*:"
            value={formik.values.name}
            changeCB={formik.handleChange}
          />
          <GeneralInput
            id="middleName"
            lableText="По батькові*:"
            value={formik.values.middleName}
            changeCB={formik.handleChange}
          />
          <GeneralInput
            id="birthDate"
            lableText="Дата народження*:"
            value={formik.values.birthDate}
            changeCB={formik.handleChange}
            type="date"
          />
          <GeneralInput
            id="taxNumber"
            lableText="РНОКПП*:"
            value={formik.values.taxNumber}
            changeCB={formik.handleChange}
          />
          <GeneralSelect
            id="licensDoc"
            lableText="Документ на вибір*:"
            optionsArr={selectArrOptions}
            //changeCB, //функція що повертає вибране значення (піднесення)
          />
          <DocInputsStyled>
            <GeneralInput
              id="series"
              lableText="Серія*:"
              value={formik.values.series}
              changeCB={formik.handleChange}
            />
            <GeneralInput
              id="docNumber"
              lableText="Номер*:"
              value={formik.values.docNumber}
              changeCB={formik.handleChange}
            />
            <GeneralInput
              id="docIssuedBy"
              lableText="Ким виданий*:"
              value={formik.values.docIssuedBy}
              changeCB={formik.handleChange}
            />
            <GeneralInput
              id="issueDate"
              lableText="Дата видачі*:"
              value={formik.values.issueDate}
              changeCB={formik.handleChange}
              type="date"
            />
          </DocInputsStyled>
        </InputContBoxStyled>
        <ButtonContainerStyled component="div">
          <YellowButtonStyled>Підтвердити</YellowButtonStyled>
          <WhiteButtonStyled>
            <WhiteButtonSVGStyled component="span">
              <SpriteSVG name="icon-arrow-left" />
            </WhiteButtonSVGStyled>
            Назад
          </WhiteButtonStyled>
        </ButtonContainerStyled>
      </FormStyled>
    </div>
  );
};

export default InsuredDataForm;
