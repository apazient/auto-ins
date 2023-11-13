import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";

import { lazy } from "react";
import { useEffect, useState } from "react";
import { SpriteSVG } from "../../images/SpriteSVG";
import { Connector, Lable, LableIcon, StepperStyled } from "./StepperStyled";
import StepIcon from "./StepIcon";
import { useFormik } from "formik";
import {
  contactsInitialValues,
  carDataFormikInitialValues,
  homeAddressInitialValues,
  insuredDataInitialValues,
} from "../../helpers/formikInitialValues";
import {
  HomeAddressFormValidationSchema,
  carDataFormValidationSchema,
  contactsValidationSchema,
  insuredDataFormValidationSchema,
} from "../../helpers/formValidationSchema";

import {
  ButtonContainerStyled,
  FormStyled,
  WhiteButtonSVGStyled,
  WhiteButtonStyled,
  YellowButtonStyled,
} from "../../forms/InsuredDataForm/InsuredDataForm.styled";
import { Typography } from "@mui/material";
import BtnBack from "../../forms/Buttons/BtnBack";

import { useLocation } from "react-router-dom";
import {
  NATURALSelectOptions,
  PRIVILEGEDSelectOptions,
} from "../../assets/utils/isPrivilegedOptions";
import { useDispatch } from "react-redux";
import { allAutoMakers } from "../../redux/References/operations";

import {
  setFormData,
  setGlobalCustomerDataCustomer,
} from "../../redux/Global/globalSlice";
// import { getCarModel } from "../../services/api";

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

// const NATURALSelectOptions = [
//   {
//     value: "Паспорт",
//     label: "Паспорт",
//   },
//   {
//     value: "ID карта",
//     label: "ID карта",
//   },
//   {
//     value: "Посвідчення водія",
//     label: "Посвідчення водія",
//   },
// ];
// const PRIVILEGEDSelectOptions = [
//   {
//     value: "Пенсійне посвідчення",
//     label: "Пенсійне посвідчення",
//   },
//   {
//     value: "Посвідчення учасника війни",
//     label: "Посвідчення учасника війни",
//   },
//   {
//     value: "Посвідчення інваліда 2гр.",
//     label: "Посвідчення інваліда 2гр.",
//   },
//   {
//     value: "Посвідчення постраждалого на ЧАЕС (1,2 кат.)",
//     label: "Посвідчення постраждалого на ЧАЕС (1,2 кат.)",
//   },
// ];

// eslint-disable-next-line react/display-name
const Stepper = ({ backLinkRef }) => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const [identityCard, setIdentityCard] = useState([]);
  const location = useLocation();

  let InsuredDataSelectOptions =
    location.state?.data?.customerCategory === "NATURAL"
      ? NATURALSelectOptions
      : PRIVILEGEDSelectOptions;
  useEffect(() => {
    setIdentityCard(InsuredDataSelectOptions[0]);
  }, [InsuredDataSelectOptions]);
  console.log("!!!!!");
  // const [identityCard, setIdentityCard] = useState({
  //   value: "Паспорт",
  //   label: "Паспорт",
  // });
  useEffect(() => {
    dispatch(allAutoMakers());
  }, [dispatch]);
  // =======================Formik======================================
  const contactsFormik = useFormik({
    initialValues: contactsInitialValues,
    // validationSchema: contactsValidationSchema(),
    onSubmit: (values) => {
      console.log("contacts", values);
      dispatch(setFormData({ formContacts: values }));
      dispatch(setGlobalCustomerDataCustomer(values));
      handleNext();
    },
  });

  const insuredDataFormik = useFormik({
    initialValues: insuredDataInitialValues,
    onSubmit: (values) => {
      console.log("insured", values);
      const {
        birthDate,
        date,
        issuedBy,
        middleName,
        name,
        number,
        record,
        series,
        surname,
        taxNumber,
      } = values;
      const insuredValues = {
        surname,
        name,
        middleName,
        birthDate,
        taxNumber,
        record, //????????????????????????
        document: {
          //type: "", //document{}
          series,
          number,
          issuedBy,
          date,
        },
      };
      dispatch(setFormData({ formInsuredData: values }));
      dispatch(setGlobalCustomerDataCustomer(insuredValues));
      handleNext();
    },
  });

  const homeAddressFormik = useFormik({
    initialValues: homeAddressInitialValues,
    // validationSchema: HomeAddressFormValidationSchema(),
    onSubmit: (values) => {
      console.log(values);
      const { region, city, street, houseNumber, apartmentNumber } = values;

      const address = {
        address: `${region && `обл.${region}`} ${city && `м.${city}`} ${
          street && `вул.${street}`
        } ${houseNumber && `б.${houseNumber}`} ${
          apartmentNumber && `кв.${apartmentNumber}`
        }`,
      };

      dispatch(setFormData({ formHomeAddress: values }));
      dispatch(setGlobalCustomerDataCustomer(address));
      handleNext();
    },
  });

  const carDataFormik = useFormik({
    initialValues: carDataFormikInitialValues,
    onSubmit: (values) => {
      console.log("valuesCarData: ", values);
      const { licensePlate, graduationYear, brand, model, bodyNumber } = values;
      const carData = {
        //autoMaker: brand, //"autoMaker"
        modelText: model, //"modelText"
        bodyNumber: bodyNumber, //"bodyNumber"
        stateNumber: licensePlate, //"stateNumber"
        year: graduationYear, //"year"
      };

      console.log("carData: ", carData);
      dispatch(setFormData({ formCarData: values }));
      dispatch(setGlobalCustomerDataCustomer(carData));
      //getCarModel("bmw e65");
      const allValues = {
        ...contactsFormik.values,
        ...insuredDataFormik.values,
        ...homeAddressFormik.values,
        ...values,
      };
      console.log(allValues);
      alert(JSON.stringify(allValues, null, 2));
    },

    // validationSchema: carDataFormValidationSchema(),
    validateOnBlur: true,
    validateOnChange: false,
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
        return <FormContacts formik={contactsFormik} />;
      case 1:
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
      case 2:
        return <HomeAddressForm formik={homeAddressFormik} />;
      case 3:
        return <CarDataForm formik={carDataFormik} />;
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
