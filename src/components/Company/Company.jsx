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
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useFormik } from "formik";
import CompanyCardMedia from "../CompanyCardMedia/index";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/Calculator/selectors";
import { useActions } from "../../hooks/useActions";

const Company = ({ proposal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector(getUser);
  const theme = useTheme();
  const { setGlobalCustomerData, setParamsFromUrl } = useActions;

  const { insurerId, insurerName, tariff, autoCategory, registrationPlace } =
    proposal;

  const [franchise, setFranchise] = useState(tariff[0]);
  const [chooseDgo, setChooseDgo] = useState({
    limit: 0,
    discountedPayment: 0,
  });
  const [price, setPrice] = useState([]);

  useEffect(() => {
    if (!proposal) return;
  }, []);

  useEffect(() => {
    setPrice(franchise.discountedPayment + chooseDgo.discountedPayment);
  }, [tariff, chooseDgo, franchise.discountedPayment, proposal]);

  const handleChangeSelect = (e) => {
    setFranchise(e);
  };
  const handleChangeDgoSelect = (e) => {
    setChooseDgo(e);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      const sendObj = {
        insurerId,
        price: Math.round(price),
        autoCategory,
        tariff: franchise,
        dgoTarrif: chooseDgo,
        usageMonths: 0,
        taxi: false,
        salePoint: 40629,
      };
      setGlobalCustomerData({
        user,
        type: franchise.type,
        tariff: {
          type: franchise.type,
          id: franchise.id,
        },
        dgoTarrif: {
          type: chooseDgo.type,
          id: chooseDgo.id,
          limit: chooseDgo.limit,
        },
      });

      setParamsFromUrl({
        price,
        insurer: { id: franchise.insurer.id, name: franchise.insurer.name },
        registrationPlace: registrationPlace || "",
        // autoCategory,
        franchise: franchise.franchise,
      });

      navigate("/form", {
        state: {
          from: location,
          data: { ...location.state?.data, ...sendObj },
        },
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
                ОСЦПВ від {insurerName.replace(/,[^,]+$/, "")}
              </Typography>
            </GridContainer>
            <GridContainerImg item xs={6} sm={12}>
              <CompanyCardMedia id={insurerId} alt={insurerName} />
            </GridContainerImg>
          </Grid>
        </WrapperStyled>
        <BoxContent>
          <Typography variant="subtitle1" component="h3" className="title">
            ОСЦПВ від {insurerName.replace(/,[^,]+$/, "")}
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
                optionsArr={proposal?.dgo?.tariff || []}
                changeCB={handleChangeDgoSelect}
                defaultValue={{ limit: 0, discountedPayment: 0 }}
                getOptionLabel={(option) =>
                  `+${option.limit} за ${option.discountedPayment} грн`
                }
                getOptionValue={(option) => option.discountedPayment}
                currentValue={chooseDgo}
                isDisabled={!proposal?.dgo ? true : false}
              />
            </BoxSelect>
          </Box>
        </BoxContent>
        <WrapperStyled className="footer">
          <BoxFooter>
            <Typography component="span">Вартість</Typography>
            <Typography variant="h3" component="span" className="price">
              {Math.round(price)} грн
            </Typography>
          </BoxFooter>
          <ButtonStyled type="submit">Придбати</ButtonStyled>
        </WrapperStyled>
      </WrapperStyled>
    </CardStyled>
  );
};

export default Company;
