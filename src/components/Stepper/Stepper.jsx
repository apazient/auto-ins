import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import { lazy, Suspense } from "react";
import { useEffect, useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import { Connector, Lable, LableIcon, StepperStyled } from "./StepperStyled";
import StepIcon from "./StepIcon";
import { useFormik } from "formik";
import {
  contactsInitialValues,
  // carDataFormikInitialValues,
  homeAddressInitialValues,
  insuredDataInitialValues,
} from "../../helpers/formikInitialValues";

import {
  ButtonContainerStyled,
  FormStyled,
  WhiteButtonSVGStyled,
  WhiteButtonStyled,
  YellowButtonStyled,
} from "../../forms/InsuredDataForm/InsuredDataForm.styled";
import { Typography } from "@mui/material";
import BtnBack from "../../forms/Buttons/BtnBack";
import {
  NATURALSelectOptions,
  PRIVILEGEDSelectOptions,
} from "../../assets/utils/isPrivilegedOptions";
import { useSelector } from "react-redux";
import { getAutoByNumber } from "../../redux/References/selectors";
import {
  carDataFormValidationSchema,
  contactsValidationSchema,
  homeAddressFormValidationSchema,
  insuredDataFormValidationSchema,
} from "../../helpers/formValidationSchema";
import { getSubmitObject } from "../../redux/byParameters/selectors";
import { useActions } from "../../hooks/useActions";

import sub from "date-fns/sub";
import { contractSaveOSAGONormalize } from "../../helpers/dataNormalize/contractSaveOSAGONormalize";
import {
  getGlobalCustomerData,
  getHomeAddress,
} from "../../redux/Global/selectors";
import { getUser } from "../../redux/Calculator/selectors";
import { customerInsuriensObject } from "../../helpers/customerInsuriensObject";
import { contractSaveDGONormalize } from "../../helpers/dataNormalize/contractSaveDGONormalize";

const steps = [
  { Контакти: "icon-email" },
  { "Дані страхувальника": "icon-passport" },
  { "Домашня адреса": "icon-home" },
  { "Дані авто": "icon-car-little" },
];
const FormContacts = lazy(() =>
  import("../../forms/FormContacts/FormContacts")
);
const InsuredDataForm = lazy(() =>
  import("../../forms/InsuredDataForm/InsuredDataForm")
);
const HomeAddressForm = lazy(() =>
  import("../../forms/HomeAddressForm/HomeAddressForm")
);
const CarDataForm = lazy(() => import("../../forms/CarDataForm/CarDataForm"));

const Stepper = ({ backLinkRef }) => {
  const { contractSave } = useActions();
  const [activeStep, setActiveStep] = useState(0);

  const [identityCard, setIdentityCard] = useState([]);
  const user = useSelector(getUser);
  const { tariff, dgoTarrif } = useSelector(getGlobalCustomerData);
  const homeAddress = useSelector(getHomeAddress);
  // const location = useLocation();

  const customerCategory = useSelector((state) => state.byParameters.benefits);
  let InsuredDataSelectOptions = !customerCategory
    ? NATURALSelectOptions
    : PRIVILEGEDSelectOptions;
  useEffect(() => {
    setIdentityCard(InsuredDataSelectOptions[0]);
  }, [InsuredDataSelectOptions]);

  // =======================Formik======================================
  const contactsFormik = useFormik({
    initialValues: contactsInitialValues,
    validationSchema: contactsValidationSchema(),
    onSubmit: () => {
      handleNext();
    },
  });

  const insuredDataFormik = useFormik({
    initialValues: {
      ...insuredDataInitialValues,
      birthDate: sub(new Date(), {
        years: 18,
      }),
      date: new Date(),
    },

    validationSchema: insuredDataFormValidationSchema(),
    onSubmit: () => {
      handleNext();
    },
  });

  const homeAddressFormik = useFormik({
    initialValues: { ...homeAddressInitialValues, regionANDcity: homeAddress },
    validationSchema: homeAddressFormValidationSchema(),
    onSubmit: () => {
      handleNext();
    },
  });

  const [insurObject] = useSelector(getAutoByNumber);
  const userParams = useSelector(getSubmitObject);
  const carDataFormik = useFormik({
    initialValues: {
      stateNumber: insurObject?.stateNumber || "",
      year: insurObject?.year || "",
      brand: insurObject?.modelText || "",
      model: "",
      bodyNumber: insurObject?.bodyNumber || "",
      maker: "",
      outsideUkraine: userParams?.outsideUkraine || false,
      category: insurObject?.category || getSubmitObject?.category,
    },

    onSubmit: (values) => {
      const customIsur = customerInsuriensObject(
        insuredDataFormik,
        homeAddressFormik,
        contactsFormik,
        identityCard,
        carDataFormik,
        insurObject
      );
      contractSave(
        contractSaveOSAGONormalize(userParams, user, tariff, customIsur)
      );
      if (dgoTarrif) {
        contractSave(
          contractSaveDGONormalize(
            userParams,
            user,
            dgoTarrif,
            insurObject,
            customIsur
          )
        );
      }
    },

    validationSchema: carDataFormValidationSchema(),
    enableReinitialize: true,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Suspense>
            <FormContacts formik={contactsFormik} />
          </Suspense>
        );
      case 1:
        return (
          <Suspense>
            <InsuredDataForm
              formik={insuredDataFormik}
              selectData={{
                InsuredDataSelectOptions,
                identityCard,
                setIdentityCard,
              }}
            />
          </Suspense>
        );
      case 2:
        return (
          <Suspense>
            <HomeAddressForm formik={homeAddressFormik} />
          </Suspense>
        );
      case 3:
        return (
          <Suspense>
            <CarDataForm formik={carDataFormik} values={carDataFormik.values} />
          </Suspense>
        );
      default:
        return "Unknown step";
    }
  };

  const handleSubmit = () => {
    switch (activeStep) {
      case 0:
        contactsFormik.handleSubmit();
        break;
      case 1:
        insuredDataFormik.handleSubmit();
        break;
      case 2:
        homeAddressFormik.handleSubmit();
        break;
      case 3:
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
          {activeStep === 0 ? (
            <BtnBack backLinkRef={backLinkRef} />
          ) : (
            <WhiteButtonStyled onClick={handleBack}>
              <WhiteButtonSVGStyled component="span">
                <SpriteSVG name="icon-arrow-left" />
              </WhiteButtonSVGStyled>
              Назад
            </WhiteButtonStyled>
          )}
        </ButtonContainerStyled>
      </FormStyled>
    </Stack>
  );
};

Stepper.propTypes = {
  backLinkRef: PropTypes.object,
};

export default Stepper;
