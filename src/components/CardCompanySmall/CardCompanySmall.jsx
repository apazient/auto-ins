import { Grid, Typography } from "@mui/material";
import { FormContainer } from "../../style/Global.styled";
import { PartnersImgs } from "../Partners/PartnersImgs";

const CardCompanySmall = ({ company }) => {
  const data = {
    img: "logo-ukraine",
    name: "Україна",
    prise: "1000",
    address: "Київ",
    total: "1000",
  };

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
  const { idCompany, nameCompany, nameFransize, sum, city } = company;
  return (
    <FormContainer>
      <Typography variant="subtitle1" component="h3">
        Електронний поліс ОСЦПВ
      </Typography>
      <Grid container>
        <Grid item>
          <PartnersImgs
            sx={{ width: { sm: "125px" } }}
            data={{ id: String(idCompany), imgAlt: nameCompany || "ОСЦП" }}
          />
        </Grid>
        <Grid item>
          <Typography component="span">{nameCompany}</Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="">
            Франшиза
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="">
            {nameFransize} грн
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="">
            Реєстрація
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="">
            {city}
          </Typography>
        </Grid>
        <Grid item>До сплати</Grid>
        <Grid item>{sum} грн</Grid>
      </Grid>
    </FormContainer>
  );
};

export default CardCompanySmall;
