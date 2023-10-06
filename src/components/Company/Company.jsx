import Typography from "@mui/material/Typography";

import { YellowButton } from "../../style/Global.styled";

import {
  BoxContent,
  BoxFooter,
  BoxSelect,
  CardStyled,
  GridContainer,
  GridContainerImg,
  GridContainerRaiting,
  RaitingStyled,
  WrapperStyled,
} from "./CompanyStyled";
import Grid from "@mui/material/Grid";

import { useEffect, useState } from "react";

import useTheme from "@mui/material/styles/useTheme";
import { PartnersImgs } from "../Partners/PartnersImgs";

import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { CompanyExpandMore } from "../CompanyExpandMore/CompanyExpandMore";

import GeneralSelect from "../GeneralSelect/GeneralSelect";

const Company = ({ companyObject }) => {
  const { nameCompany, idCompany, raitingCompany, fransizes } = companyObject;

  // const location = useLocation();
  // const navigate = useNavigate();

  const theme = useTheme();

  const [checkSavety, setCheckSavety] = useState(false);

  const fransizeSelect = fransizes?.map(({ sum, idFransize, nameFransize }) => {
    return { value: sum, label: nameFransize };
  });

  const handleChangeSelect = (value) => {
    setFranchise(value);
  };

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
              <Typography variant="subtitle1">
                ОСЦПВ від {nameCompany}
              </Typography>
            </GridContainer>
            <GridContainerImg item xs={6} sm={12}>
              <PartnersImgs
                sx={{ width: { sm: "125px" } }}
                data={{ id: String(idCompany), imgAlt: nameCompany || "ОСЦП" }}
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
            sx={{
              display: { xs: "none", sm: "block" },
              marginBottom: { sm: "20px", lg: "32px" },
            }}
          >
            ОСЦПВ від {nameCompany}
          </Typography>
          <BoxSelect sx={{ marginBottom: { xs: "8px", sm: "12px" } }}>
            {/* <GeneralSelect
              id="1"
              lableText="Франшиза"
              helper="Пояснення до франчизи"
              color={theme.palette.primary.main}
              optionsArr={fransizeSelect}
              changeCB={handleChangeSelect}
            /> */}
          </BoxSelect>
          <BoxSelect>
            {/* <GeneralSelect
              id="2"
              lableText="Додаткове покриття"
              helper="Пояснення до додаткове покриття"
              color={theme.palette.primary.main}
              optionsArr={["0", "2330"]}
            /> */}
          </BoxSelect>
          <GeneralCheckbox
            lableText="Свідомий захист"
            name="check"
            val={checkSavety}
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
              {"=0000"}
            </Typography>
          </BoxFooter>
          <Link state={{ from: location }} to="/form" style={{ color: "lime" }}>
            <YellowButton>Придбати</YellowButton>
          </Link>
        </WrapperStyled>
      </WrapperStyled>
      <WrapperStyled>
        <CompanyExpandMore />
      </WrapperStyled>
    </CardStyled>
  );
};

export default Company;
