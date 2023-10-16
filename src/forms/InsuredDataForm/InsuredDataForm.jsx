import { Typography } from "@mui/material";
import { useFormik } from "formik";
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
import { insuredDataFormValidationSchema } from "../../helpers/formValidationSchema";

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
    validationSchema: insuredDataFormValidationSchema(),
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
            formikData={formik}
          />
          <GeneralInput id="name" lableText="Ім’я*:" formikData={formik} />
          <GeneralInput
            id="middleName"
            lableText="По батькові*:"
            formikData={formik}
          />
          <GeneralInput
            id="birthDate"
            lableText="Дата народження*:"
            formikData={formik}
            type="date"
          />
          <GeneralInput
            id="taxNumber"
            lableText="РНОКПП*:"
            formikData={formik}
          />
          <GeneralSelect
            id="licensDoc"
            lableText="Документ на вибір*:"
            optionsArr={selectArrOptions}
            //changeCB, //функція що повертає вибране значення (піднесення)
          />
          <DocInputsStyled>
            <GeneralInput id="series" lableText="Серія*:" formikData={formik} />
            <GeneralInput
              id="docNumber"
              lableText="Номер*:"
              formikData={formik}
            />
            <GeneralInput
              id="docIssuedBy"
              lableText="Ким виданий*:"
              formikData={formik}
            />
            <GeneralInput
              id="issueDate"
              lableText="Дата видачі*:"
              formikData={formik}
              type="date"
            />
          </DocInputsStyled>
        </InputContBoxStyled>
        <ButtonContainerStyled component="div">
          <YellowButtonStyled onClick={formik.handleSubmit}>
            Підтвердити
          </YellowButtonStyled>
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
