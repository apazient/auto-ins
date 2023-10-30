import * as Yup from "yup";

export const validationName = () =>
  Yup.string()
    .required("Обов’язкове поле!")
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
    effectiveDatePolicy: Yup.date().required("Обов’язкове поле!"),
    licensePlate: Yup.string().required("Обов’язкове поле!"),
    graduationYear: Yup.number()
      .integer("Рік повинен бути цілим числом")
      .typeError("Будь ласка, введіть рік")
      .required("Обов’язкове поле")
      .min(1900, "Рік повинен бути не менше 1900")
      .max(
        new Date().getFullYear(),
        "Рік не може бути більшим за поточний рік"
      ),
    brand: validationName(),
    model: Yup.string().required("Обов’язкове поле!"),
    vinCode: Yup.string()
      .required("Обов’язкове поле!")
      .matches(
        /^[A-HJ-NPR-Z0-9a-hj-npr-z]{17}$/,
        "VIN повинен містити 17 літер або цифр і відсутній символ I, O, Q"
      ),
  });
// ===========================================================================
export const HomeAddressFormValidationSchema = () =>
  Yup.object().shape({
    region: validationName(),
    city: validationName(),
    street: validationName(),
    houseNumber: Yup.string().required("Обов’язкове поле!"),
    apartmentNumber: Yup.string(),
  });
// ===========================================================================
export const insuredDataFormValidationSchema = () =>
  Yup.object().shape({
    surname: validationName(),
    name: validationName(),
    middleName: validationName(),
    birthDate: Yup.date()
      .required("Обов’язкове поле!")
      .max(new Date(), "Ви не можете вибрати дату в майбутньому"),
    taxNumber: Yup.string()
      .required("Обов’язкове поле!")
      .matches(/^[0-9\s]*$/, "Введіть лише числа")
      .min(10, "Занадто мало чисел")
      .max(13, "Занадто багато чисел"),
    series: Yup.string().required("Обов’язкове поле!"),
    docNumber: Yup.string().required("Обов’язкове поле!"),
    docIssuedBy: Yup.string().required("Обов’язкове поле!"),
    issueDate: Yup.date()
      .required("Обов’язкове поле!")
      .max(new Date(), "Ви не можете вибрати дату в майбутньому"),
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
      // .matches(/^\d{10}$/, "Номер телефону неправильний (введіть 10 цифр)"),
      .matches(/^\+\d{12}$/, "Номер телефону неправильний (введіть у форматі +380123456789)"),
  });
