export const DNUMBER_REGEX =
  /^([ABCEHIKMOPTXYА-ЯЇІЄ]{1,2}\d{4}[ABCEHIKMOPTXYА-ЯЇІЄ]{2}|[ABCEHIKMOPTXYА-ЯЇІЄ]{3,4}\d{4}|\d{2}[ABCEHIKMOPTXYА-ЯЇІЄ]{2}\d{4}|\d{4}[ABCEHIKMOPTXА-ЯЇІЄ]\d{1}|\d{4,6}[ABCEHIKMOPTXYА-ЯЇІЄ]{2}|\d{4}[ABCEHIKMOPTXYА-ЯЇІЄ]{3}|[ABCEHIKMOPTXYА-ЯЇІЄ]{2}\d{4,5}|\d{3})$/;

export const VIN_REGEX = /^[(A-H|J-N|P|R-ZА-ДЄЖЗИЛПФЦЧШЩЮЯ){1,2}\d+]{5,17}$/;
export const REQUIRED_FIELD = "Обов'язкове поле";
