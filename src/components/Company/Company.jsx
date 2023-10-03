import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import { YellowButton } from "../../style/Global.styled";
import { Stack } from "@mui/system";
import CheckBox from "../CheckBox/CheckBox";
import {
  BoxFooter,
  CardStyled,
  GridContainer,
  GridContainerImg,
  GridContainerRaiting,
  RaitingStyled,
  WrapperStyled,
} from "./CompanyStyled";
import HelpCircle from "../HelpCircle/HelpCircle";
import Grid from "@mui/material/Grid";

import partnersData from "../Partners/parnersList.json";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { CardMedia, useTheme } from "@mui/material";
import { PartnersImgs } from "../Partners/PartnersImgs";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";

const Company = () => {
  const prop = {
    name: "Євронінс Україна",
    price: "1000 грн",
  };
  const theme = useTheme();
  const [partners, setPartners] = useState(partnersData);
  const partner = partners[1];
  console.log(partner);
  const { id, imgAlt, rating, web } = partner;
  const { name, price } = prop;
  const idStr = id.toString();

  return (
    <CardStyled>
      <GridContainer container>
        <GridContainer item xs={6}>
          <Typography variant="subtitle1">ОСЦПВ від {name}</Typography>
        </GridContainer>
        <GridContainerImg item xs={6}>
          <PartnersImgs
            sx={{ width: { sm: "125px" } }}
            data={{ id: String(id), imgAlt }}
          />
        </GridContainerImg>
        <GridContainer item xs={6}>
          <Typography variant="subtitle2" sx={{ lineHeight: { sm: "1.5em" } }}>
            Рейтинг МТСБУ
          </Typography>
        </GridContainer>
        <GridContainerRaiting item xs={6}>
          <RaitingStyled name="read-only" value={rating} readOnly />
        </GridContainerRaiting>
      </GridContainer>

      <WrapperStyled>
        <WrapperStyled>
          <Typography variant="body1">
            Франшиза
            <HelpCircle lableText="Пояснення до франчизи" colorStyle="#000" />
          </Typography>
          <GeneralSelect
            id="1"
            lableText="Франшиза"
            optionsArr={["3200", "2330"]}
          />

          <GeneralCheckbox
            lableText="Свідомий захист"
            name="check"
            val={false}
            color={theme.palette.primary.main}
          />
        </WrapperStyled>

        <BoxFooter>
          <Typography>Вартість</Typography>
          <Typography variant="h3">{price}</Typography>
        </BoxFooter>
        <YellowButton sx={{ margin: { sx: "16px 0 20px 0" } }}>
          Придбати
        </YellowButton>
      </WrapperStyled>
    </CardStyled>
  );
};

export default Company;
