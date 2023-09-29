import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material";
import credoMobile from "./img/credoMobile.png";
import credoTablet from "./img/credoTablet.png";
import euroInsMobile from "./img/euroInsMobile.png";
import euroInsTablet from "./img/euroInsTablet.png";
import ingoMobile from "./img/ingoMobile.png";
import ingoTablet from "./img/ingoTablet.png";
import brokbusynessMobile from "./img/brokbusynessMobile.png";
import brokbusynessTablet from "./img/brokbusynessTablet.png";
import arxMobile from "./img/arxMobile.png";
import arxTablet from "./img/arxTablet.png";
import uniqaMobile from "./img/uniqaMobile.png";
import uniqaTablet from "./img/uniqaTablet.png";
import interPolisMobile from "./img/interPolisMobile.png";
import interPolisTablet from "./img/interPolisTablet.png";
import ESAMobile from "./img/ESAMobile.png";
import ESATablet from "./img/ESATablet.png";
import testMobile from "./img/testMobile.png";
import testTablet from "./img/testTablet.png";

export const PartnersImgs = ({ data }) => {
  const { id, imgAlt } = data;
  const theme = useTheme();
  const { sm } = theme.breakpoints.values;
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  switch (id) {
    case "1":
      return (
        <img
          src={windowWidth >= sm ? credoTablet : credoMobile}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    case "2":
      return (
        <img
          src={windowWidth >= sm ? euroInsTablet : euroInsMobile}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    case "3":
      return (
        <img
          src={windowWidth >= sm ? ingoMobile : ingoTablet}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    case "4":
      return (
        <img
          src={windowWidth >= sm ? brokbusynessMobile : brokbusynessTablet}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    case "5":
      return (
        <img
          src={windowWidth >= sm ? arxMobile : arxTablet}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    case "6":
      return (
        <img
          src={windowWidth >= sm ? uniqaMobile : uniqaTablet}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    case "7":
      return (
        <img
          src={windowWidth >= sm ? interPolisMobile : interPolisTablet}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    case "8":
      return (
        <img
          src={windowWidth >= sm ? ESAMobile : ESATablet}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    case "9":
      return (
        <img
          src={windowWidth >= sm ? testMobile : testTablet}
          alt={imgAlt}
          style={imgStyle}
        />
      );

    default:
      return "LOGO not found";
  }
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
};

PartnersImgs.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }).isRequired,
};
