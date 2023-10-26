import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
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
  const { idCompany, nameCompany, nameFransize, sum, city } = company[0];

  return (
    <FormContainerS component="article">
      <Typography
        variant="subtitle1"
        component="h3"
        sx={{ marginBottom: { xs: "8px", sm: "4px", lg: "8px" } }}
      >
        Електронний поліс ОСЦПВ
      </Typography>
      <ContentBox>
        <CardMedia
          component="img"
          image={`https://web.eua.in.ua/eua/api/binary/companyLogo?id=${idCompany}`}
          title={nameCompany}
        />
        <Typography component="span" className="leightText">
          {nameCompany}
        </Typography>
      </ContentBox>

      <ContentBox>
        <Typography component="span" variant="body1">
          Франшиза
        </Typography>
        <Typography component="span" variant="body1">
          {nameFransize} грн
        </Typography>
      </ContentBox>

      <ContentBox>
        <Typography component="span" variant="body1">
          Реєстрація
        </Typography>
        <Typography component="span" variant="body1">
          {city}
        </Typography>
      </ContentBox>
      <ContentBox className="line" />

      <ContentBox>
        <Typography component="span" variant="subtitle1">
          До сплати:
        </Typography>
        <Typography component="span" variant="subtitle1" className="boldText">
          {sum} грн
        </Typography>
      </ContentBox>
    </FormContainerS>
  );
};

export default CompanySmall;
