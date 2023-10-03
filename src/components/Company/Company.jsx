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
  YellowButtonRund,
} from "./CompanyStyled";
import HelpCircle from "../HelpCircle/HelpCircle";
import Grid from "@mui/material/Grid";

import partnersData from "../Partners/parnersList.json";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { CardMedia, Collapse, IconButton, useTheme } from "@mui/material";
import { PartnersImgs } from "../Partners/PartnersImgs";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import ExpandMore from "../ExpandMore/ExpandMore";
import { SpriteSVG } from "../../images/SpriteSVG";
import Button from "@mui/material/Button";

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
        <GeneralSelect
          id="1"
          lableText="Франшиза"
          helper="Пояснення до франчизи"
          color={theme.palette.primary.main}
          optionsArr={["3200", "2330"]}
        />
        <GeneralSelect
          id="1"
          lableText="Додаткове покриття"
          helper="Пояснення до додаткове покриття"
          color={theme.palette.primary.main}
          optionsArr={["3200", "2330"]}
        />
        <GeneralCheckbox
          lableText="Свідомий захист"
          name="check"
          val={false}
          color={theme.palette.primary.main}
        />
      </WrapperStyled>
      <WrapperStyled>
        <BoxFooter>
          <Typography>Вартість</Typography>
          <Typography variant="h3">{price}</Typography>
        </BoxFooter>
        <YellowButton sx={{ margin: { sx: "16px 0 20px 0" }, width: "100%" }}>
          Придбати
        </YellowButton>
        <Button
          aria-label="Докладніше"
          endIcon={
            <Box
              sx={{
                stroke: theme.palette.primary.main,
                fill: theme.palette.primary.yellow,
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.yellow,
              }}
            >
              <SpriteSVG name={"icon-chevron-down"} />
            </Box>
          }
          sx={{ textTransform: "none" }}
        >
          Докладніше
        </Button>
        <Box sx={{ width: "100%" }}>
          <Collapse in={true}>
            <Typography variant="body1">
              АВТОЦИВІЛКА від СК Оберіг (для юридичних осіб). Оплата виключно з
              рахунку ЮО-Страхувальника згідно автоматично сформованого
              рахунку-фактури
            </Typography>
          </Collapse>
        </Box>
      </WrapperStyled>
    </CardStyled>
  );
};

export default Company;
