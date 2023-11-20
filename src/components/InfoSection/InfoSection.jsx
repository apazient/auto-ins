import { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";

import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";

import Car320Webp from "../../images/infoCar/carMob.webp";
import Car320Webp2x from "../../images/infoCar/carMob2x.webp";
import Car320Webp3x from "../../images/infoCar/carMob3x.webp";
import Car320Jpg from "../../images/infoCar/carMob.jpg";
import Car320Jpg2x from "../../images/infoCar/carMob2x.jpg";
import Car320Jpg3x from "../../images/infoCar/carMob3x.jpg";

import Car768Web from "../../images/infoCar/carTab.webp";
import Car768Web2x from "../../images/infoCar/carTab2x.webp";
import Car768Web3x from "../../images/infoCar/carTab3x.webp";
import Car768Jpg from "../../images/infoCar/carTab.jpg";
import Car768Jpg2x from "../../images/infoCar/carTab2x.jpg";
import Car768Jpg3x from "../../images/infoCar/carTab3x.jpg";

import Car1400Webp from "../../images/infoCar/carDes.webp";
import Car1400Webp2x from "../../images/infoCar/carDes2x.webp";
import Car1400Webp3x from "../../images/infoCar/carDes3x.webp";
import Car1400Jpg from "../../images/infoCar/carDes.jpg";
import Car1400Jpg2x from "../../images/infoCar/carDes2x.jpg";
import Car1400Jpg3x from "../../images/infoCar/carDes3x.jpg";

import { YellowButton } from "../../style/Global.styled";
import {
  AbsatzS,
  CollapseContainer,
  InfoSectionContainer,
  SectionS,
  WrapperS,
} from "./InfoSectionStyle";

import Text from "./Text";
import { infoTextStart, infoTextTitle } from "../../assets/texts/index";
import { infoTextMiddleFirst } from "../../assets/texts/index";
import { infoTextMiddleSecond } from "../../assets/texts/index";
import { links } from "../../assets/texts/index";
import { infoTextEnd } from "../../assets/texts/index";
import { Link } from "@mui/material";

const InfoSection = () => {
  const [checked, setChecked] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const n = [{ id: 1 }];

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };
  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const theme = useTheme();
  const MOBILE = useMediaQuery(theme.breakpoints.down("sm"));
  const TABLET = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const DESKTOP = useMediaQuery(theme.breakpoints.up("lg"));

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const display = () => {
    if (MOBILE) {
      return "8.64em";
    }
    if (TABLET) {
      return "200px";
    }
    if (DESKTOP) {
      return "750px";
    }
  };

  const displayLink = links.map(({ href, text }) => {
    return (
      <AbsatzS key={text} variant="caption" component="p">
        <Link
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="link"
        >
          {text}
        </Link>
      </AbsatzS>
    );
  });

  return (
    <SectionS>
      <InfoSectionContainer component="article">
        <WrapperS>
          <CollapseContainer
            in={checked}
            orientation="vertical"
            timeout={300}
            collapsedSize={display()}
            className="container"
          >
            <Text text={infoTextTitle} />
            <Text text={infoTextStart} />
            <Text text={infoTextMiddleFirst} />
            {MOBILE && (
              <>
                <Text text={infoTextMiddleSecond} />
                {displayLink}
                <Text text={infoTextEnd} />
              </>
            )}
            {DESKTOP && (
              <>
                <Text text={infoTextMiddleSecond} />
                {displayLink}
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
              <Text text={infoTextMiddleSecond} />
              {displayLink}
              <Text text={infoTextEnd} />
            </CollapseContainer>
          )}
          {DESKTOP && (
            <div>
              {inView ? (
                <CardMedia className="cardMedia" src={Car1400Webp}>
                  <img
                    src={Car1400Jpg}
                    srcSet={`${Car1400Webp} 688w,${Car1400Jpg} 688w,${Car1400Webp2x} 1376w,${Car1400Jpg2x} 1376w,${Car1400Webp3x} 2064w,${Car1400Jpg3x} 2064w`}
                    sizes="688px"
                    width="688px"
                    height="632px"
                    alt="автомобіль"
                  />
                </CardMedia>
              ) : (
                <CardMedia
                  ref={ref}
                  id={n.id}
                  key={n.id}
                  className="cardMedia"
                  src={Car1400Webp}
                >
                  {/* <img
                    src={Car1400Jpg}
                    srcSet={`${Car1400Webp} 688w,${Car1400Jpg} 688w,${Car1400Webp2x} 1376w,${Car1400Jpg2x} 1376w,${Car1400Webp3x} 2064w,${Car1400Jpg3x} 2064w`}
                    sizes="688px"
                    width="688px"
                    height="632px"
                    alt="автомобіль"
                  /> */}
                </CardMedia>
              )}
              <CollapseContainer
                in={checked}
                orientation="vertical"
                timeout={300}
                collapsedSize={94}
                className="containerRight"
              >
                <Text text={infoTextEnd} />
              </CollapseContainer>
            </div>
          )}
        </WrapperS>

        <YellowButton onClick={handleChange} className="button">
          {!checked ? "Читати далі" : "Приховати текст"}
        </YellowButton>
        {(MOBILE || TABLET) &&
          (inView ? (
            <CardMedia className="cardMediaTablet" src={Car320Webp}>
              <img
                src={Car320Jpg}
                srcSet={`${Car320Jpg} 343w,${Car320Webp} 343w,${Car320Webp2x} 686w,${Car320Jpg2x} 686w,${Car320Webp3x} 1029w,${Car320Jpg3x} 1029w,${Car768Jpg} 680w,${Car768Web} 680w,${Car768Web2x} 1360w,${Car768Jpg2x} 1360w,${Car768Web3x} 2040w,${Car768Jpg3x} 2040w`}
                sizes="(max-widht:744px) 680px, 100vw"
                alt="автомобіль"
              />
            </CardMedia>
          ) : (
            <CardMedia
              ref={ref}
              id={n.id}
              key={n.id}
              className="cardMediaTablet"
              src={Car320Webp}
            >
              {/* <img
               src={Car320Jpg}
               srcSet={`${Car320Jpg} 343w,${Car320Webp} 343w,${Car320Webp2x} 686w,${Car320Jpg2x} 686w,${Car320Webp3x} 1029w,${Car320Jpg3x} 1029w,${Car768Jpg} 680w,${Car768Web} 680w,${Car768Web2x} 1360w,${Car768Jpg2x} 1360w,${Car768Web3x} 2040w,${Car768Jpg3x} 2040w`}
               sizes="(max-widht:744px) 680px, 100vw"
               alt="автомобіль"
               loading="lazy"
             /> */}
            </CardMedia>
          ))}
      </InfoSectionContainer>
    </SectionS>
  );
};

export default InfoSection;
