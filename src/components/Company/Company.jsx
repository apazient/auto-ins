import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { YellowButton } from "../../style/Global.styled";

import {
  BoxContent,
  BoxFooter,
  CardStyled,
  ExpandIconBox,
  GridContainer,
  GridContainerImg,
  GridContainerRaiting,
  RaitingStyled,
  WrapperStyled,
} from "./CompanyStyled";
import Grid from "@mui/material/Grid";
import partnersData from "../Partners/parnersList.json";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import useTheme from "@mui/material/styles/useTheme";
import { PartnersImgs } from "../Partners/PartnersImgs";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import { SpriteSVG } from "../../images/SpriteSVG";
import Button from "@mui/material/Button";

const Company = () => {
  const prop = {
    name: "Євронінс Україна",
    price: "1000 грн",
  };
  const theme = useTheme();
  const [partners, setPartners] = useState(partnersData);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const rotate = !expanded ? "rotate(0deg)" : "rotate(180deg)";
  const partner = partners[1];
  const { id, imgAlt, rating, web } = partner;
  const { name, price } = prop;

  return (
    <CardStyled>
      <WrapperStyled
        sx={{ display: { sm: "flex" }, gap: { sm: "16px", lg: "24px" } }}
      >
        <WrapperStyled sx={{ marginBottom: { xs: "16px" } }}>
          <Grid
            container
            sx={{ width: { xs: "100%", sm: "125px", lg: "320px" } }}
          >
            <GridContainer
              item
              xs={6}
              sm={0}
              sx={{
                display: { sm: "none" },
                marginBottom: { xs: "8px" },
                width: { xs: "100%" },
              }}
            >
              <Typography variant="subtitle1">ОСЦПВ від {name}</Typography>
            </GridContainer>
            <GridContainerImg item xs={6} sm={12}>
              <PartnersImgs
                sx={{ width: { sm: "125px" } }}
                data={{ id: String(id), imgAlt }}
              />
            </GridContainerImg>
            <GridContainer item xs={6} sm={12}>
              <Typography
                variant="subtitle2"
                sx={{
                  lineHeight: { sm: "1.5em" },
                  marginBottom: { xs: "8px" },
                }}
              >
                Рейтинг МТСБУ
              </Typography>
            </GridContainer>
            <GridContainerRaiting item xs={6} sm={12}>
              <RaitingStyled name="read-only" value={rating} readOnly />
            </GridContainerRaiting>
          </Grid>
        </WrapperStyled>
        <BoxContent>
          <Typography
            variant="subtitle1"
            sx={{
              display: { xs: "none", sm: "block" },
              marginBottom: { sm: "20px", lg: "32px" },
            }}
          >
            ОСЦПВ від {name}
          </Typography>
          <Box sx={{ marginBottom: { xs: "8px", sm: "12px" } }}>
            <GeneralSelect
              id="1"
              lableText="Франшиза"
              helper="Пояснення до франчизи"
              color={theme.palette.primary.main}
              optionsArr={["3200", "2330"]}
            />
          </Box>
          <Box sx={{ marginBottom: "16px" }}>
            <GeneralSelect
              id="1"
              lableText="Додаткове покриття"
              helper="Пояснення до додаткове покриття"
              color={theme.palette.primary.main}
              optionsArr={["3200", "2330"]}
              sx={{ width: "100%" }}
            />
          </Box>
          <GeneralCheckbox
            lableText="Свідомий захист"
            name="check"
            val={false}
            color={theme.palette.primary.main}
          />
        </BoxContent>
        <WrapperStyled>
          <BoxFooter>
            <Typography component="span">Вартість</Typography>
            <Typography
              variant="h3"
              component="span"
              sx={{ fontSize: { sm: "18px", lg: "22px" } }}
            >
              {price}
            </Typography>
          </BoxFooter>
          <YellowButton sx={{ width: "100%" }}>Придбати</YellowButton>
        </WrapperStyled>
      </WrapperStyled>
      <WrapperStyled>
        <Button
          aria-label="Докладніше"
          onClick={handleExpandClick}
          sx={{
            textTransform: "none",
            textAlign: "center",
            width: "100%",
            padding: "0px",
          }}
          endIcon={
            <ExpandIconBox sx={{ transform: rotate }}>
              <SpriteSVG name="icon-chevron-down" />
            </ExpandIconBox>
          }
        >
          Докладніше
        </Button>
        <Box sx={{ width: "100%" }}>
          <Collapse in={expanded} unmountOnExit>
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
