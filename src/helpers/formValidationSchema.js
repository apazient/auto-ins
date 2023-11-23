import * as Yup from "yup";
import { DNUMBER_REGEX, REQUIRED_FIELD, VIN_REGEX } from "../constants";

export const validationName = () =>
  Yup.string()
    .required(REQUIRED_FIELD)
    .matches(/^[a-zA-Zа-яА-Я\u2019\u2013'-]+$/, "Введіть лише літери")
    .test(
      "not-starts-or-ends-with-dash-or-apostrophe",
      `Поле не може починатися або закінчуватися ' чи -`,
      (value) => {
        return !/^[‘’’–'-]|['–’’]$/.test(value);
      }
    )
    .min(2, "Введіть мінімум 2 символа")
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
      .min(1900, "Рік повинен бути не менше 1900")
      .max(
        new Date().getFullYear(),
        "Рік не може бути більшим за поточний рік"
      ),
    model: Yup.object().required(REQUIRED_FIELD),
    bodyNumber: Yup.string()
      .required(REQUIRED_FIELD)
      .matches(
        VIN_REGEX,
        "VIN повинен містити 17 літер або цифр і відсутній символ I, O, Q"
      ),
  });
// ===========================================================================
export const HomeAddressFormValidationSchema = () =>
  Yup.object().shape({
    // region: validationName(),
    // city: validationName(),
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
    // birthDate: Yup.date()
    //   .required(REQUIRED_FIELD)
    //   .max(new Date(), "Ви не можете вибрати дату в майбутньому"),
    taxNumber: Yup.string()
      .required(REQUIRED_FIELD)
      .matches(/^[0-9\s]*$/, "Введіть лише числа")
      .min(10, "Занадто мало чисел")
      .max(13, "Занадто багато чисел"),
    series: Yup.string().required(REQUIRED_FIELD),
    number: Yup.string().required(REQUIRED_FIELD),
    issuedBy: Yup.string().required(REQUIRED_FIELD),
    // date: Yup.date()
    //   .required(REQUIRED_FIELD),
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
