import { Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ButtonContainerStyled,
  DocInputsStyled,
  FormStyled,
  InputContBoxStyled,
  InputContStyled,
  InputStyled,
  WhiteButtonSVGStyled,
  WhiteButtonStyled,
  YellowButtonStyled,
} from "./InsuredDataForm.styled";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { SpriteSVG } from "../../images/SpriteSVG";
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
      licensePlate: Yup.string().required("Required field!"),
    }),
  });
  return (
    <div>
      <FormStyled component="form" autoComplete="off">
        <Typography variant="formTitle" component="h2">
          Дані страхувальника
        </Typography>
        <InputContBoxStyled>
          <InputContStyled>
            <Typography
              variant="inputLable"
              component="label"
              htmlFor="surname"
            >
              Прізвище*:
            </Typography>
            <InputStyled
              name="surname"
              type="text"
              value={formik.values.surname}
              onChange={formik.handleChange}
              id="surname"
              required
              color="inputBase"
            />
          </InputContStyled>
          <InputContStyled>
            <Typography variant="inputLable" component="label" htmlFor="name">
              Ім’я*:
            </Typography>
            <InputStyled
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              required
              color="inputBase"
            />
          </InputContStyled>
          <InputContStyled>
            <Typography
              variant="inputLable"
              component="label"
              htmlFor="middleName"
            >
              По батькові*:
            </Typography>
            <InputStyled
              name="middleName"
              type="text"
              value={formik.values.middleName}
              onChange={formik.handleChange}
              id="middleName"
              required
              color="inputBase"
            />
          </InputContStyled>
          <InputContStyled>
            <Typography
              variant="inputLable"
              component="label"
              htmlFor="birthDate"
            >
              Дата народження*:
            </Typography>
            <InputStyled
              name="birthDate"
              type="text"
              value={formik.values.birthDate}
              onChange={formik.handleChange}
              id="birthDate"
              required
              color="inputBase"
            />
          </InputContStyled>
          <InputContStyled>
            <Typography
              variant="inputLable"
              component="label"
              htmlFor="taxNumber"
            >
              РНОКПП*:
            </Typography>
            <InputStyled
              name="taxNumber"
              type="text"
              value={formik.values.taxNumber}
              onChange={formik.handleChange}
              id="taxNumber"
              required
              color="inputBase"
            />
          </InputContStyled>
          <GeneralSelect
            id="licensDoc"
            lableText="Документ на вибір*:"
            optionsArr={["Легкове авто", "Вантажівка", "Причеп"]}
            //changeCB, //функція що повертає вибране значення (піднесення)
          />
          <DocInputsStyled>
            <InputContStyled>
              <Typography
                variant="inputLable"
                component="label"
                htmlFor="series"
              >
                Серія*:
              </Typography>
              <InputStyled
                name="series"
                type="text"
                value={formik.values.series}
                onChange={formik.handleChange}
                id="series"
                required
                color="inputBase"
              />
            </InputContStyled>
            <InputContStyled>
              <Typography
                variant="inputLable"
                component="label"
                htmlFor="docNumber"
              >
                Номер*:
              </Typography>
              <InputStyled
                name="docNumber"
                type="text"
                value={formik.values.docNumber}
                onChange={formik.handleChange}
                id="docNumber"
                required
                color="inputBase"
              />
            </InputContStyled>
            <InputContStyled>
              <Typography
                variant="inputLable"
                component="label"
                htmlFor="docIssuedBy "
              >
                Ким виданий*:
              </Typography>
              <InputStyled
                name="docIssuedBy"
                type="text"
                value={formik.values.docIssuedBy}
                onChange={formik.handleChange}
                id="docIssuedBy"
                required
                color="inputBase"
              />
            </InputContStyled>
            <InputContStyled>
              <Typography
                variant="inputLable"
                component="label"
                htmlFor="issueDate"
              >
                Дата видачі*:
              </Typography>
              <InputStyled
                name="issueDate"
                type="text"
                value={formik.values.issueDate}
                onChange={formik.handleChange}
                id="issueDate"
                required
                color="inputBase"
              />
            </InputContStyled>
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
