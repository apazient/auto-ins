import * as Yup from "yup";
import {
  DNUMBER_REGEX,
  NAME_REGEX,
  REQUIRED_FIELD,
  SERIES_PASSPORT_REGEX,
  VIN_REGEX,
} from "../constants";

export const validationName = () =>
  Yup.string()
    .required(REQUIRED_FIELD)
    .matches(NAME_REGEX, "Введіть лише літери")
    .min(2, "Введіть щонайменше 2 символа")
    .max(50, "Занадто довге поле");

// =============================================================================
export const carDataFormValidationSchema = () =>
  Yup.object().shape({
    outsideUkraine: Yup.boolean(),
    stateNumber: Yup.string()
      .required(REQUIRED_FIELD)
      .when("outsideUkraine", {
        is: false,
        then: () =>
          Yup.string()
            .required(REQUIRED_FIELD)
            .matches(DNUMBER_REGEX, "Номер авто вказано невірно"),
      }),

    year: Yup.number()
      .integer("Рік повинен бути цілим числом")
      .typeError("Будь ласка, введіть рік")
      .required(REQUIRED_FIELD)
      .min(1900, "Рік повинен бути не менше 1900"),
    model: Yup.object().required(REQUIRED_FIELD),
    bodyNumber: Yup.string()
      .required(REQUIRED_FIELD)
      .matches(VIN_REGEX, "VIN повинен містити 17 літер"),
  });
// ===========================================================================
export const homeAddressFormValidationSchema = () =>
  Yup.object().shape({
    regionANDcity: Yup.string().required(REQUIRED_FIELD),
    street: validationName(),
    houseNumber: Yup.string().required(REQUIRED_FIELD),
    apartmentNumber: Yup.string(),
  });
// ===========================================================================
export const insuredDataFormValidationSchema = () =>
  Yup.object().shape({
    surname: validationName(),
    name: validationName(),
    middleName: validationName(),
    birthDate: Yup.date().required(REQUIRED_FIELD),
    taxNumber: Yup.string()
      //  .required(REQUIRED_FIELD)
      //  !!!!!============>>>> Чому попередній рядок закоментований<<<<<<================= ???
      .matches(/^[0-9\s]*$/, "Введіть лише числа")
      .min(10, "ІПН повинен мати 10 символів")
      .max(10, "ІПН повинен мати 10 символів"),
    series: Yup.string()
      .required(REQUIRED_FIELD)
      .matches(SERIES_PASSPORT_REGEX, "Введіть дві букви кирилиці"),
    number: Yup.string()
      .required(REQUIRED_FIELD)
      .min(6, "Введіть 6 цифр")
      .max(6, "Введіть 6 цифр"),
    issuedBy: Yup.string().required(REQUIRED_FIELD),
    date: Yup.date().required(REQUIRED_FIELD),
    record: Yup.string(),
  });
// ===========================================================================
export const contactsValidationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .required("Введіть електронну пошту")
      .min(5, "Електронна пошта вказана невірно")
      .matches(
        /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,9}$/,
        "Електронна пошта вказана невірно"
      ),
    phone: Yup.string()
      .required("Введіть номер телефону")
      .matches(
        /^\+\d{12}$/,
        "Номер телефону неправильний (введіть у форматі +380123456789)"
      ),
  });
