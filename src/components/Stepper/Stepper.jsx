import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import { useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import { Connector, Lable, LableIcon, StepperStyled } from "./StepperStyled";
import StepIcon from "./StepIcon";
import { useFormik } from "formik";
import {
  carDataFormikInitialValues,
  contactsInitialValues,
  homeAddressInitialValues,
  insuredDataInitialValues,
} from "../../helpers/formikInitialValues";
import {
  HomeAddressFormValidationSchema,
  carDataFormValidationSchema,
  contactsValidationSchema,
  insuredDataFormValidationSchema,
} from "../../helpers/formValidationSchema";
import FormContacts from "../../forms/FormContacts/FormContacts";
import InsuredDataForm from "../../forms/InsuredDataForm/InsuredDataForm";
import HomeAddressForm from "../../forms/HomeAddressForm/HomeAddressForm";
import CarDataForm from "../../forms/CarDataForm/CarDataForm";
import {
  ButtonContainerStyled,
  FormStyled,
  WhiteButtonSVGStyled,
  WhiteButtonStyled,
  YellowButtonStyled,
} from "../../forms/InsuredDataForm/InsuredDataForm.styled";
import { Typography } from "@mui/material";

const steps = [
  // { Контакти: "icon-email" },
  { "Дані страхувальника": "icon-passport" },
  { "Домашня адреса": "icon-home" },
  { "Дані авто": "icon-car-little" },
];
const InsuredDataSelectOptions = [
  {
    value: "Паспорт",
    label: "Паспорт",
  },
  {
    value: "ID карта",
    label: "ID карта",
  },
  {
    value: "Посвідчення водія",
    label: "Посвідчення водія",
  },
  {
    value: "Пенсійне посвідчення",
    label: "Пенсійне посвідчення",
  },
  {
    value: "Посвідчення учасника війни",
    label: "Посвідчення учасника війни",
  },
  {
    value: "Посвідчення інваліда 2гр.",
    label: "Посвідчення інваліда 2гр.",
  },
  {
    value: "Посвідчення постраждалого на ЧАЕС (1,2 кат.)",
    label: "Посвідчення постраждалого на ЧАЕС (1,2 кат.)",
  },
];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [identityCard, setIdentityCard] = useState({
    value: "Паспорт",
    label: "Паспорт",
  });
  // =======================Formik======================================
  // const contactsFormik = useFormik({
  //   initialValues: contactsInitialValues,
  //   validationSchema: contactsValidationSchema(),
  //   onSubmit: (values) => {
  //     console.log("onSubmit", values);
  //     handleNext();
  //     // setUserContacts(values);
  //   },
  // });

  const insuredDataFormik = useFormik({
    initialValues: insuredDataInitialValues,
    onSubmit: (values) => {
      handleNext();
      console.log(values);
    },
    validationSchema: insuredDataFormValidationSchema(),
  });

  const homeAddressFormik = useFormik({
    initialValues: homeAddressInitialValues,
    onSubmit: (values) => {
      handleNext();
      console.log(values);
    },
    validationSchema: HomeAddressFormValidationSchema(),
  });

  const carDataFormik = useFormik({
    initialValues: carDataFormikInitialValues,
    onSubmit: (values) => {
      const allValues = {
        ...insuredDataFormik.values,
        ...homeAddressFormik.values,
        ...values,
      };
      console.log(allValues);
      alert(JSON.stringify(allValues, null, 2));
    },
    validationSchema: carDataFormValidationSchema(),
  });

  // ===================================================================

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      // case 0:
      //   return <FormContacts formik={contactsFormik} />;
      case 0:
        return (
          <InsuredDataForm
            formik={insuredDataFormik}
            selectData={{
              InsuredDataSelectOptions,
              identityCard,
              setIdentityCard,
            }}
          />
        );
      case 1:
        return <HomeAddressForm formik={homeAddressFormik} />;
      case 2:
        return <CarDataForm formik={carDataFormik} />;
      default:
        return "Unknown step";
    }
  };

  const handleSubmit = () => {
    switch (activeStep) {
      // case 0:
      //   contactsFormik.handleSubmit();
      //   break;
      case 0:
        insuredDataFormik.handleSubmit();
        break;
      case 1:
        homeAddressFormik.handleSubmit();
        break;
      case 2:
        carDataFormik.handleSubmit();
        break;
    }
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <StepperStyled
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
      >
        {steps.map((label) => {
          console.log();
          const stepProps = {};
          // const labelProps = {};

          return (
            <Step key={Object.keys(label)} {...stepProps}>
              <LableIcon>
                <SpriteSVG
                  key={Object.values(label).toString()}
                  name={Object.values(label).toString()}
                />
              </LableIcon>
              <Lable StepIconComponent={StepIcon}>{Object.keys(label)}</Lable>
            </Step>
          );
        })}
      </StepperStyled>
      <FormStyled component="form" autoComplete="off">
        <Typography variant="formTitle" component="h2">
          {Object.keys(steps[activeStep])}
        </Typography>
        {getStepContent(activeStep)}
        <ButtonContainerStyled component="div">
          <YellowButtonStyled onClick={handleSubmit}>
            Підтвердити
          </YellowButtonStyled>
          <WhiteButtonStyled disabled={activeStep === 0} onClick={handleBack}>
            <WhiteButtonSVGStyled component="span">
              <SpriteSVG name="icon-arrow-left" />
            </WhiteButtonSVGStyled>
            Назад
          </WhiteButtonStyled>
        </ButtonContainerStyled>
      </FormStyled>
    </Stack>
  );
};

export default Stepper;
