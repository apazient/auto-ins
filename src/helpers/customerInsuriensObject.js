import { customerNormalize } from "./dataNormalize/customerNormalize";
import { insuranceObjectNormalize } from "./dataNormalize/insuranceObjectNormalize";

export const customerInsuriensObject = (
  insuredDataFormik,
  homeAddressFormik,
  contactsFormik,
  identityCard,
  carDataFormik,
  insurObject
) => {
  const customer = customerNormalize(
    insuredDataFormik,
    homeAddressFormik,
    contactsFormik,
    identityCard
  );
  const insuranceObject = insuranceObjectNormalize(carDataFormik, insurObject);
  return { customer, insuranceObject };
};
