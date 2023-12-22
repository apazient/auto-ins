export const DNUMBER_REGEX =
  /^([ABCEHIKMOPTXYА-ЯЇІЄ]{1,2}\d{4}[ABCEHIKMOPTXYА-ЯЇІЄ]{2}|[ABCEHIKMOPTXYА-ЯЇІЄ]{3,4}\d{4}|\d{2}[ABCEHIKMOPTXYА-ЯЇІЄ]{2}\d{4}|\d{4}[ABCEHIKMOPTXА-ЯЇІЄ]\d{1}|\d{4,6}[ABCEHIKMOPTXYА-ЯЇІЄ]{2}|\d{4}[ABCEHIKMOPTXYА-ЯЇІЄ]{3}|[ABCEHIKMOPTXYА-ЯЇІЄ]{2}\d{4,5}|\d{3})$/;

export const VIN_REGEX = /^[(A-H|J-N|P|R-ZА-ДЄЖЗИЛПФЦЧШЩЮЯ){1,2}\d+]{5,17}$/;
export const NAME_REGEX = /^[a-zA-Zа-яіїйєґА-ЯІЇЙЄҐ\u2019\u2013'-]+$/;
export const REQUIRED_FIELD = "Обов'язкове поле";
export const CATEGORY = ["A1", "A2", "B1", "B2", "B3", "B4", "B5", "E", "F"];
export const CATEGORY_ERROR =
  "Транспорний засіб повиннен проходити обовязкове технічне обслуговування. Для прорахунку полісу зверніться будь-ласка до наших консультантів.";
export const mainRoutes = {
  CALCULATOR: "/calculator",
  AUTO_MODEL: "/automodel",
  GLOBAL: "/global",
};
Object.freeze(mainRoutes);
