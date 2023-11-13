export const DNUMBER_REGEX =
  /^([ABCDEIKMOPTXА-ЯЇІЄ]{1,2}\d{4}[ABCDEIKMOPTXА-ЯЇІЄ]{2}|[ABCDEIKMOPTXА-ЯЇІЄ]{3,4}\d{4}|\d{2}[ABCDEIKMOPTXА-ЯЇІЄ]{2}\d{4}|\d{4}[ABCDEIKMOPTXА-ЯЇІЄ]\d{1}|\d{4,6}[ABCDEIKMOPTXА-ЯЇІЄ]{2}|\d{4}[ABCDEIKMOPTXА-ЯЇІЄ]{3}|[ABCDEIKMOPTXА-ЯЇІЄ]{2}\d{4,5}|\d{3})$/;

export const VIN_REGEX = /^[(A-H|J-N|P|R-ZА-ДЄЖЗИЛПФЦЧШЩЮЯ){1,2}\d+]{5,17}$/;
