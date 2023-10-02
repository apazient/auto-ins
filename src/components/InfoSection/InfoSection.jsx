import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardMedia,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";

import { useState } from "react";

import { YellowButton } from "../../style/Global.styled";
import EndText from "./EndText";
import Car320Webp from "../../images/carMob.webp";
import Car320Webp2x from "../../images/carMob2x.webp";
import Car320Webp3x from "../../images/carMob3x.webp";
import Car320Jpg from "../../images/carMob.jpg";
import Car320Jpg2x from "../../images/carMob2x.jpg";
import Car320Jpg3x from "../../images/carMob3x.jpg";

import Car768Web from "../../images/carTab.webp";
import Car768Web2x from "../../images/carTab2x.webp";
import Car768Web3x from "../../images/carTab3x.webp";
import Car768Jpg from "../../images/carTab.jpg";
import Car768Jpg2x from "../../images/carTab2x.jpg";
import Car768Jpg3x from "../../images/carTab3x.jpg";

import Car1400Webp from "../../images/carDes.webp";
import Car1400Webp2x from "../../images/carDes2x.webp";
import Car1400Webp3x from "../../images/carDes3x.webp";
import Car1400Jpg from "../../images/carDes.jpg";
import Car1400Jpg2x from "../../images/carDes2x.jpg";
import Car1400Jpg3x from "../../images/carDes3x.jpg";

import {
  AbsatzS,
  CollapseContainer,
  InfoSectionContainer,
  ItemS,
  ListText,
  WrapperS,
} from "./InfoSectionStyle";
import MiddleFirstText from "./MiddleFirstText";
import MiddleSecondText from "./MiddleSecondText";
import StartText from "./StartText";

const InfoSection = () => {
  const [checked, setChecked] = useState(false);

  const theme = useTheme();
  const MOBILE = useMediaQuery(theme.breakpoints.down("sm"));
  const TABLET = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const DESKTOP = useMediaQuery(theme.breakpoints.up("lg"));

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const display = () => {
    if (MOBILE) {
      return "8.54em";
    }
    if (TABLET) {
      return "200px";
    }
    if (DESKTOP) {
      return "750px";
    }
  };

  return (
    <section>
      <InfoSectionContainer component="article">
        <WrapperS>
          <CollapseContainer
            in={checked}
            orientation="vertical"
            timeout={300}
            collapsedSize={display()}
            sx={{ width: { lg: "568px" } }}
          >
            <StartText />
            <MiddleFirstText />
            {MOBILE && (
              <>
                <MiddleSecondText />
                <EndText />
              </>
            )}
          </CollapseContainer>
          {TABLET && (
            <CollapseContainer
              in={checked}
              orientation="vertical"
              timeout={300}
              collapsedSize={display()}
            >
              <MiddleSecondText />
              <EndText />
            </CollapseContainer>
          )}
          {DESKTOP && (
            <div>
              <CardMedia
                sx={{
                  "& img": { borderRadius: "50px 0px 0px 50px" },
                  marginBottom: "24px",
                  background:
                    "linear-gradient(0deg, rgba(3, 3, 3, 0.05) 0%, rgba(3, 3, 3, 0.05) 100%)",
                  borderRadius: "50px 0px 0px 50px",
                }}
              >
                <img
                  src={Car1400Jpg}
                  srcSet={`${Car1400Webp} 688w,${Car1400Jpg} 688w,${Car1400Webp2x} 1376w,${Car1400Jpg2x} 1376w,${Car1400Webp3x} 2064w,${Car1400Jpg3x} 2064w`}
                  sizes="688px"
                  alt="автомобіль"
                  loading="lazy"
                />
              </CardMedia>
              <CollapseContainer
                in={checked}
                orientation="vertical"
                timeout={300}
                collapsedSize={94}
                sx={{
                  width: { lg: "568px" },
                  "& .MuiCollapse-vertical": { WebkitLineClamp: 4 },
                }}
              >
                <EndText />
              </CollapseContainer>
            </div>
          )}
        </WrapperS>
        <FormControlLabel
          sx={{
            display: "block",
            textAlign: "center",
            marginTop: { sx: "24px", sm: "32px", lg: "48px" },
          }}
          control={
            <YellowButton onClick={handleChange}>
              {!checked ? "Читати далі" : "Приховати текст"}
            </YellowButton>
          }
        />
        <CardMedia
          sx={{
            display: { lg: "none" },
            width: "100%",
            marginTop: "32px",
            "& img": { borderRadius: "50px" },
          }}
        >
          <img
            src={Car320Jpg}
            srcSet={`${Car320Jpg} 343w,${Car320Webp} 343w,${Car320Webp2x} 686w,${Car320Jpg2x} 686w,${Car320Webp3x} 1029w,${Car320Jpg3x} 1029w,${Car768Jpg} 680w,${Car768Web} 680w,${Car768Web2x} 1360w,${Car768Jpg2x} 1360w,${Car768Web3x} 2040w,${Car768Jpg3x} 2040w`}
            sizes="100vw"
            alt="автомобіль"
            loading="lazy"
          />
        </CardMedia>
      </InfoSectionContainer>
    </section>
  );
};

export default InfoSection;
