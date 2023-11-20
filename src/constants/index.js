export const DNUMBER_REGEX =
  /^([ABCEHIKMOPTXА-ЯЇІЄ]{1,2}\d{4}[ABCEHIKMOPTXА-ЯЇІЄ]{2}|[ABCEHIKMOPTXА-ЯЇІЄ]{3,4}\d{4}|\d{2}[ABCEHIKMOPTXА-ЯЇІЄ]{2}\d{4}|\d{4}[ABCEHIKMOPTXА-ЯЇІЄ]\d{1}|\d{4,6}[ABCEHIKMOPTXА-ЯЇІЄ]{2}|\d{4}[ABCEHIKMOPTXА-ЯЇІЄ]{3}|[ABCEHIKMOPTXА-ЯЇІЄ]{2}\d{4,5}|\d{3})$/;

export const VIN_REGEX = /^[(A-H|J-N|P|R-ZА-ДЄЖЗИЛПФЦЧШЩЮЯ){1,2}\d+]{5,17}$/;
