import Typography from "@mui/material/Typography";
import {
  BoxContent,
  BoxFooter,
  BoxSelect,
  ButtonStyled,
  CardStyled,
  GridContainer,
  GridContainerImg,
  WrapperStyled,
} from "./CompanyStyled";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import useTheme from "@mui/material/styles/useTheme";

import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import { useLocation, useNavigate } from "react-router-dom";
import { CompanyExpandMore } from "../CompanyExpandMore/CompanyExpandMore";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import Box from "@mui/material/Box";
import ModalError from "../ModalError/ModalError";
import { CardMedia } from "@mui/material";
import { useEffect } from "react";
import { useFormik } from "formik";

const Company = ({ proposal, dgo }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { insurerId, insurerName, tariff, registrationPlace, autoCategory } =
    proposal;

  let dgoSelect = null;

  if (dgo) {
    dgoSelect = dgo.tariff.map(({ limit, discountedPayment }) => {
      return {
        value: discountedPayment,
        label: `+${limit} за ${discountedPayment}`,
      };
    });
    dgoSelect.unshift({ value: 0, label: "0" });
  }

  const fransizeSelect = tariff?.map(({ franchise, discountedPayment }) => {
    return { value: discountedPayment, label: franchise };
  });

  const [checkSavety, setCheckSavety] = useState(false);
  const [franchise, setFranchise] = useState(fransizeSelect[0].value);
  const [choosenFranchiseTariff, setChoosenFranchiseTariff] = useState(
    tariff[0]
  );
  const [chooseDgo, setChooseDgo] = useState(null);
  const [choosenChooseDgo, setChoosenChooseDgo] = useState(null);
  const [price, setPrice] = useState(fransizeSelect[0].value);

  const handleChangeSelect = (e) => {
    setFranchise(e.value);
    setChoosenFranchiseTariff(tariff.find((el) => el.franchise === e.label));
  };
  const handleChangeDgoSelect = (e) => {
    setChooseDgo(e.value);
    setChoosenChooseDgo(
      dgo.tariff.find((el) => el.discountedPayment === e.value)
    );
  };

  useEffect(() => {
    setPrice(franchise + chooseDgo);
  }, [chooseDgo, franchise]);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      const sendObj = {
        insurerId,
        price,
        autoCategory,
        tariff: choosenFranchiseTariff,
        dgoTarrif: choosenChooseDgo,
        registrationPlace,
        usageMonths: 0,
        taxi: false,
        salePoint: 40629,
      };

      navigate("/form", {
        state: { from: location, data: sendObj },
      });
    },
  });
  return (
    <CardStyled component="li" sx={{ overflow: "visible" }}>
      <WrapperStyled
        className="wrapper"
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <WrapperStyled>
          <Grid container className="gridContainer">
            <GridContainer item xs={6} sm={0}>
              <Typography variant="subtitle1" component="h3">
                ОСЦПВ від {insurerName}
              </Typography>
            </GridContainer>
            <GridContainerImg item xs={6} sm={12}>
              <CardMedia
                component="img"
                image={`https://web.eua.in.ua/eua/api/binary/companyLogo?id=${insurerId}`}
                title={insurerName}
              />
            </GridContainerImg>
            {/*
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
            </GridContainerRaiting> */}
          </Grid>
        </WrapperStyled>
        <BoxContent>
          <Typography variant="subtitle1" component="h3" className="title">
            ОСЦПВ від {insurerName}
          </Typography>
          <Box className="content">
            <BoxSelect className="franchise">
              <GeneralSelect
                id="1"
                lableText="Франшиза"
                helper="Пояснення до франчизи"
                color={theme.palette.primary.main}
                optionsArr={fransizeSelect}
                changeCB={handleChangeSelect}
              />
            </BoxSelect>
            {dgo && (
              <BoxSelect>
                <GeneralSelect
                  id="2"
                  lableText="Додаткове покриття"
                  helper="Пояснення до додаткове покриття"
                  color={theme.palette.primary.main}
                  optionsArr={dgoSelect}
                  changeCB={handleChangeDgoSelect}
                />
              </BoxSelect>
            )}
          </Box>
          {/* <GeneralCheckbox
            lableText="Свідомий захист"
            name="check"
            val={checkSavety}
            color={theme.palette.primary.main}
          /> */}
        </BoxContent>
        <WrapperStyled sx={{ width: "100%" }}>
          <BoxFooter>
            <Typography component="span">Вартість</Typography>
            <Typography variant="h3" component="span" className="price">
              {price} грн
            </Typography>
          </BoxFooter>
          <ButtonStyled type="submit">Придбати</ButtonStyled>
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
