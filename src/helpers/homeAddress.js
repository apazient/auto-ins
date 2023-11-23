export const homeAddress = (homeAddressFormik) => {
  const { regionANDcity, street, houseNumber, apartmentNumber } =
    homeAddressFormik.values;
  const address = `${regionANDcity} ${street && `вул.${street}`} ${
    houseNumber && `б.${houseNumber}`
  } ${apartmentNumber && `кв.${apartmentNumber}`}`;

  return address;
};
