import format from "date-fns/format";
import { homeAddress } from "../homeAddress";

export const customerNormalize = (
  insuredDataFormik,
  homeAddressFormik,
  contactsFormik,
  identityCard
) => {
  const customer = {
    code: insuredDataFormik.values.taxNumber,
    nameLast: insuredDataFormik.values.surname,
    nameFirst:
      insuredDataFormik.values.name + " " + insuredDataFormik.values.middleName,
    address: homeAddress(homeAddressFormik),
    phone: contactsFormik.values.phone,
    email: contactsFormik.values.email,
    birthDate: format(insuredDataFormik.values.birthDate, "yyyy-MM-dd"),
    document: {
      type: identityCard.value,
      series: insuredDataFormik.values.series,
      number: insuredDataFormik.values.number,
      date: format(insuredDataFormik.values.date, "yyyy-MM-dd"),
      issuedBy: insuredDataFormik.values.issuedBy,
    },
  };
  return customer;
};
