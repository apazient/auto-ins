import Typography from "@mui/material/Typography";
import {
  BoxContent,
  BoxFooter,
  BoxSelect,
  ButtonStyled,
  CardStyled,
  GridContainer,
  GridContainerImg,
  GridContainerRaiting,
  RaitingStyled,
  WrapperStyled,
} from "./CompanyStyled";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import useTheme from "@mui/material/styles/useTheme";
import { PartnersImgs } from "../Partners/PartnersImgs";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import { useLocation } from "react-router-dom";
import { CompanyExpandMore } from "../CompanyExpandMore/CompanyExpandMore";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import Box from "@mui/material/Box";
import ModalError from "../ModalError/ModalError";
import { CardMedia } from "@mui/material";

const Company = ({ companyObject }) => {
  const { nameCompany, idCompany, raitingCompany, fransizes } = companyObject;
  const fransizeSelect = fransizes?.map(({ sum, idFransize, nameFransize }) => {
    return { value: sum, label: nameFransize };
  });

  const location = useLocation();

  const theme = useTheme();

  const [checkSavety, setCheckSavety] = useState(false);
  const [franchise, setFranchise] = useState(null);
  const [price, setPrice] = useState(fransizeSelect[0].value);

  const handleChangeSelect = (e) => {
    setFranchise(e.label);
    setPrice(e.value);
  };

  return (
    <CardStyled component="li" sx={{ overflow: "visible" }}>
      <WrapperStyled
        sx={{
          display: { sm: "flex" },
          gap: { sm: "16px", lg: "24px" },
          marginBottom: { xs: "16px", sm: "24px", lg: "40px" },
        }}
      >
        <WrapperStyled>
          <Grid
            container
            sx={{ width: { xs: "100%", sm: "125px", lg: "256px" } }}
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
              <Typography variant="subtitle1" component="h3">
                ОСЦПВ від {nameCompany}
              </Typography>
            </GridContainer>
            <GridContainerImg item xs={6} sm={12}>
              <CardMedia
                component="img"
                image={`https://web.eua.in.ua/eua/api/binary/companyLogo?id=${insurerId}`}
                title={insurerName}
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
              <RaitingStyled name="read-only" value={raitingCompany} readOnly />
            </GridContainerRaiting>
          </Grid>
        </WrapperStyled>
        <BoxContent>
          <Typography
            variant="subtitle1"
            component="h3"
            sx={{
              display: { xs: "none", sm: "block" },
              marginBottom: { sm: "20px", lg: "32px" },
              lineHeight: { sm: "1.5em" },
              fontSize: { lg: "22px" },
            }}
          >
            ОСЦПВ від {nameCompany}
          </Typography>
          <Box sx={{ display: { lg: "flex" } }}>
            <BoxSelect sx={{ marginBottom: { xs: "8px", sm: "12px" } }}>
              <GeneralSelect
                id="1"
                lableText="Франшиза"
                helper="Пояснення до франчизи"
                color={theme.palette.primary.main}
                optionsArr={fransizeSelect}
                changeCB={handleChangeSelect}
              />
            </BoxSelect>
            <BoxSelect>
              <GeneralSelect
                id="2"
                lableText="Додаткове покриття"
                helper="Пояснення до додаткове покриття"
                color={theme.palette.primary.main}
                optionsArr={fransizeSelect}
              />
            </BoxSelect>
          </Box>

          <GeneralCheckbox
            lableText="Свідомий захист"
            name="check"
            val={checkSavety}
            color={theme.palette.primary.main}
          />
        </BoxContent>
        <WrapperStyled sx={{ width: "100%" }}>
          <BoxFooter>
            <Typography component="span">Вартість</Typography>
            <Typography
              variant="h3"
              component="span"
              sx={{ fontSize: { sm: "18px", lg: "22px" } }}
            >
              {price} грн
            </Typography>
          </BoxFooter>
          <ButtonStyled state={{ from: location }} to="/form">
            Придбати
          </ButtonStyled>
          <ModalError />
        </WrapperStyled>
      </WrapperStyled>
      <WrapperStyled>
        <CompanyExpandMore />
      </WrapperStyled>
    </CardStyled>
  );
};

export default Company;
