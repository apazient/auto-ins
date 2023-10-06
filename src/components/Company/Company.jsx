import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { YellowButton } from "../../style/Global.styled";

import {
  BoxContent,
  BoxFooter,
  BoxSelect,
  CardStyled,
  ExpandIconBox,
  GridContainer,
  GridContainerImg,
  GridContainerRaiting,
  RaitingStyled,
  WrapperStyled,
  GeneralSelectS,
} from "./CompanyStyled";
import Grid from "@mui/material/Grid";
import proposData from "../../assets/mocapi/mocapiCalculatorResponse.json";
import companyData from "../../assets/mocapi/companyList.json";
import franchiseData from "../../assets/mocapi/franchiseList.json";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import useTheme from "@mui/material/styles/useTheme";
import { PartnersImgs } from "../Partners/PartnersImgs";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { GeneralCheckbox } from "../GeneralCheckbox/GeneralCheckbox";
import { SpriteSVG } from "../../images/SpriteSVG";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { findById } from "../../helpers/find";

const Company = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  const [propos, setPropose] = useState(proposData);
  const [company, setCompany] = useState(companyData);
  const [franchise, setFranchise] = useState(franchiseData);
  const [franchiseSelect, setFranchiseSelect] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const rotate = !expanded ? "rotate(0deg)" : "rotate(180deg)";

  // const { id, imgAlt, rating, web } = partner;
  // const { name, price } = prop;
  const { idCompany, nameCompany, fransizes } = propos;

  // const { sum, idFransize, nameFransize } = fransizes;
  // const { id, name, shortName } = company;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChangeSelect = (value) => {
    console.log();
    setFranchiseSelect(value);
  };

  return (
    <>
      {propos?.map(({ idCompany, nameCompany, fransizes }) => {
        const fransizeSelect = fransizes.map(
          ({ sum, idFransize, nameFransize }) => {
            return { value: sum, label: nameFransize };
          }
        );

        const sumListOfFransizes = fransizes.map(({ sum }) => sum);
        const { id, name, shortName } = findById(idCompany, company);
        return (
          <CardStyled key={id}>
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
                      ОСЦПВ від {shortName}
                    </Typography>
                  </GridContainer>
                  <GridContainerImg item xs={6} sm={12}>
                    <PartnersImgs
                      sx={{ width: { sm: "125px" } }}
                      data={{ id: String(id), imgAlt: name }}
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
                    <RaitingStyled name="read-only" value={""} readOnly />
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
                    optionsArr={["0", "2330"]}
                  />
                </BoxSelect>
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
                    {franchiseSelect}
                  </Typography>
                </BoxFooter>
                <Link
                  state={{ from: location }}
                  to="/form"
                  style={{ color: "lime" }}
                >
                  <YellowButton>Придбати</YellowButton>
                </Link>
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
                    АВТОЦИВІЛКА від СК Оберіг (для юридичних осіб). Оплата
                    виключно з рахунку ЮО-Страхувальника згідно автоматично
                    сформованого рахунку-фактури
                  </Typography>
                </Collapse>
              </Box>
            </WrapperStyled>
          </CardStyled>
        );
      })}
    </>
  );
};

export default Company;
