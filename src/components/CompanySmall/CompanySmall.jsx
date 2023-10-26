import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { PartnersImgs } from "../Partners/PartnersImgs";
import { ContentBox, FormContainerS } from "./CompanySmallStyled";

const CompanySmall = ({ company }) => {
  // "calculator": {
  //   "idFransize": 0,
  //   "idCompany": 0,
  //   "idRegion": 0,
  //   "idCity": 0,
  //   "idTermin": 0,
  //   "idSubTypeTs": 0,
  //   "dateStartCon": "2023-10-06T15:21:54.419Z",
  //   "isLygot": true,
  //   "setMonth": "string"
  // }

  //    "raitingCompany": 5,
  // "idCompany": 2,
  // "nameCompany": "Євроінс",
  // "fransizes": [
  // {
  // "sum": 2584,
  // "idFransize": 1,
  // "nameFransize": "0"

  // {
  //
  //   "idCompany": 2,
  //   "nameCompany": "Євроінс",
  //   "sum": 2584,
  //   "city": "Київ",
  //   "nameFransize": "0"
  // }

  const {
    insurerId,
    price,
    autoCategory,
    tariff,
    dgoTarrif,
    registrationPlace,
    usageMonths,
    taxi,
    salePoint,
  } = company;

  return (
    <FormContainerS component="article">
      <Typography variant="subtitle1" component="h3" className="title">
        Електронний поліс ОСЦПВ
      </Typography>
      <ContentBox>
        <CardMedia
          component="img"
          image={`https://web.eua.in.ua/eua/api/binary/companyLogo?id=${insurerId}`}
          title={tariff.insurer.name}
        />
        <Typography component="span" className="leightText">
          {tariff.insurer.name}
        </Typography>
      </ContentBox>

      <ContentBox>
        <Typography component="span" variant="body1">
          Франшиза
        </Typography>
        <Typography component="span" variant="body1">
          {tariff.franchise} грн
        </Typography>
      </ContentBox>

      <ContentBox>
        <Typography component="span" variant="body1">
          Реєстрація
        </Typography>
        <Typography component="span" variant="body1">
          {registrationPlace.name}
        </Typography>
      </ContentBox>
      <ContentBox className="line" />

      <ContentBox>
        <Typography component="span" variant="subtitle1">
          До сплати:
        </Typography>
        <Typography component="span" variant="subtitle1" className="boldText">
          {price} грн
        </Typography>
      </ContentBox>
    </FormContainerS>
  );
};

export default CompanySmall;
