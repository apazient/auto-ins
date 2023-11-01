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

import { useLocation, useNavigate } from "react-router-dom";
import { CompanyExpandMore } from "../CompanyExpandMore/CompanyExpandMore";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useFormik } from "formik";
import CompanyCardMedia from "../CompanyCardMedia/index";

const Company = ({ proposal, dgo = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { insurerId, insurerName, tariff, registrationPlace, autoCategory } =
    proposal;
  // console.log(tariff);
  // const franchizeSelect = useMemo(() => tariff.map((el) => el), [tariff]);

  const [checkSavety, setCheckSavety] = useState(false);
  const [franchise, setFranchise] = useState(tariff[0]);
  const [chooseDgo, setChooseDgo] = useState({
    limit: 0,
    discountedPayment: 0,
  });
  const [price, setPrice] = useState([]);

  useEffect(() => {
    setPrice(franchise.discountedPayment + chooseDgo.discountedPayment);
  }, [tariff, chooseDgo, franchise.discountedPayment]);

  const handleChangeSelect = (e) => {
    setFranchise(e);
  };
  const handleChangeDgoSelect = (e) => {
    setChooseDgo(e);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      const sendObj = {
        insurerId,
        price,
        autoCategory,
        tariff: franchise,
        dgoTarrif: chooseDgo,
        registrationPlace,
        usageMonths: 0,
        taxi: false,
        salePoint: 40629,
      };

      navigate("/form", {
        state: { from: location, data: { ...location.state.data, ...sendObj } },
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
              <CompanyCardMedia id={insurerId} alt={insurerName} />
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
                id="franchise"
                lableText="Франшиза"
                helper="Пояснення до франчизи"
                color={theme.palette.primary.main}
                optionsArr={tariff}
                changeCB={handleChangeSelect}
                currentValue={franchise}
                getOptionLabel={(option) => `${option.franchise} грн`}
                getOptionValue={(option) => option.discountedPayment}
              />
            </BoxSelect>
            <BoxSelect>
              <GeneralSelect
                id="2"
                lableText="Додаткове покриття"
                helper="Пояснення до додаткове покриття"
                color={theme.palette.primary.main}
                optionsArr={dgo?.tariff || []}
                changeCB={handleChangeDgoSelect}
                defaultValue={{ limit: 0, discountedPayment: 0 }}
                getOptionLabel={(option) =>
                  `+${option.limit} за ${option.discountedPayment} грн`
                }
                getOptionValue={(option) => option.discountedPayment}
                currentValue={chooseDgo}
                isDisabled={!dgo ? true : false}
              />
            </BoxSelect>
          </Box>

          {/* <GeneralCheckbox
            lableText="Свідомий захист"
            name="check"
            val={checkSavety}
            color={theme.palette.primary.main}
          /> */}
        </BoxContent>
        <WrapperStyled className="footer">
          <BoxFooter>
            <Typography component="span">Вартість</Typography>
            <Typography variant="h3" component="span" className="price">
              {price} грн
            </Typography>
          </BoxFooter>
          <ButtonStyled type="submit">Придбати</ButtonStyled>
        </WrapperStyled>
      </WrapperStyled>
      <WrapperStyled>
        <CompanyExpandMore />
      </WrapperStyled>
    </CardStyled>
  );
};

export default Company;
