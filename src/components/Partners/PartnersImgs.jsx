import PropTypes from "prop-types";
import { useTheme } from "@mui/material";
import credoMobile from "../../images/imgPartners/credoMobile.png";
import credoMobile2x from "../../images/imgPartners/credoMobile@2x.png";
import credoMobileWebP from "../../images/imgPartners/credoMobileWebP.webp";
import credoMobileWebP2x from "../../images/imgPartners/credoMobileWebP@2x.webp";
import credoTablet from "../../images/imgPartners/credoTablet.png";
import credoTablet2x from "../../images/imgPartners/credoTablet@2x.png";
import credoTabletWebP from "../../images/imgPartners/credoTabletWebP.webp";
import credoTabletWebP2x from "../../images/imgPartners/credoTabletWebP@2x.webp";
import euroInsMobile from "../../images/imgPartners/euroInsMobile.png";
import euroInsMobile2x from "../../images/imgPartners/euroInsMobile@2x.png";
import euroInsMobileWebP from "../../images/imgPartners/euroInsMobileWebP.webp";
import euroInsMobileWebP2x from "../../images/imgPartners/euroInsMobileWebP@2x.webp";
import euroInsTablet from "../../images/imgPartners/euroInsTablet.png";
import euroInsTablet2x from "../../images/imgPartners/euroInsTablet@2x.png";
import euroInsTabletWebP from "../../images/imgPartners/euroInsTabletWebP.webp";
import euroInsTabletWebP2x from "../../images/imgPartners/euroInsTabletWebP@2x.webp";
import ingoMobile from "../../images/imgPartners/ingoMobile.png";
import ingoMobile2x from "../../images/imgPartners/ingoMobile@2x.png";
import ingoMobileWebP from "../../images/imgPartners/ingoMobileWebP.webp";
import ingoMobileWebP2x from "../../images/imgPartners/ingoMobileWebP@2x.webp";
import ingoTablet from "../../images/imgPartners/ingoTablet.png";
import ingoTablet2x from "../../images/imgPartners/ingoTablet@2x.png";
import ingoTabletWebP from "../../images/imgPartners/ingoTabletWebP.webp";
import ingoTabletWebP2x from "../../images/imgPartners/ingoTabletWebP@2x.webp";
import brokbusynessMobile from "../../images/imgPartners/brokbusynessMobile.png";
import brokbusynessMobile2x from "../../images/imgPartners/brokbusynessMobile@2x.png";
import brokbusynessMobileWebP from "../../images/imgPartners/brokbusynessMobileWebP.webp";
import brokbusynessMobileWebP2x from "../../images/imgPartners/brokbusynessMobileWebP@2x.webp";
import brokbusynessTablet from "../../images/imgPartners/brokbusynessTablet.png";
import brokbusynessTablet2x from "../../images/imgPartners/brokbusynessTablet@2x.png";
import brokbusynessTabletWebP from "../../images/imgPartners/brokbusynessTabletWebP.webp";
import brokbusynessTabletWebP2x from "../../images/imgPartners/brokbusynessTabletWebP@2x.webp";
import arxMobile from "../../images/imgPartners/arxMobile.png";
import arxMobile2x from "../../images/imgPartners/arxMobile@2x.png";
import arxMobileWebP from "../../images/imgPartners/arxMobileWebP.webp";
import arxMobileWebP2x from "../../images/imgPartners/arxMobileWebP@2x.webp";
import arxTablet from "../../images/imgPartners/arxTablet.png";
import arxTablet2x from "../../images/imgPartners/arxTablet@2x.png";
import arxTabletWebP from "../../images/imgPartners/arxTabletWebP.webp";
import arxTabletWebP2x from "../../images/imgPartners/arxTabletWebP@2x.webp";
import uniqaMobile from "../../images/imgPartners/uniqaMobile.png";
import uniqaMobile2x from "../../images/imgPartners/uniqaMobile@2x.png";
import uniqaMobileWebP from "../../images/imgPartners/uniqaMobileWebP.webp";
import uniqaMobileWebP2x from "../../images/imgPartners/uniqaMobileWebP@2x.webp";
import uniqaTablet from "../../images/imgPartners/uniqaTablet.png";
import uniqaTablet2x from "../../images/imgPartners/uniqaTablet@2x.png";
import uniqaTabletWebP from "../../images/imgPartners/uniqaTabletWebP.webp";
import uniqaTabletWebP2x from "../../images/imgPartners/uniqaTabletWebP@2x.webp";
import interPolisMobile from "../../images/imgPartners/interPolisMobile.png";
import interPolisMobile2x from "../../images/imgPartners/InterPolisMobile@2x.png";
import interPolisMobileWebP from "../../images/imgPartners/interPolisMobileWebP.webp";
import interPolisMobileWebP2x from "../../images/imgPartners/InterPolisMobileWebP@2x.webp";
import interPolisTablet from "../../images/imgPartners/interPolisTablet.png";
import interPolisTablet2x from "../../images/imgPartners/InterPolisTablet@2x.png";
import interPolisTabletWebP from "../../images/imgPartners/interPolisTabletWebP.webp";
import interPolisTabletWebP2x from "../../images/imgPartners/InterPolisTabletWebP@2x.webp";
import ESAMobile from "../../images/imgPartners/ESAMobile.png";
import ESAMobile2x from "../../images/imgPartners/ESAMobile@2x.png";
import ESAMobileWebP from "../../images/imgPartners/ESAMobileWebP.webp";
import ESAMobileWebP2x from "../../images/imgPartners/ESAMobileWebP@2x.webp";
import ESATablet from "../../images/imgPartners/ESATablet.png";
import ESATablet2x from "../../images/imgPartners/ESATablet@2x.png";
import ESATabletWebP from "../../images/imgPartners/ESATabletWebP.webp";
import ESATabletWebP2x from "../../images/imgPartners/ESATabletWebP@2x.webp";
import oberigMobile from "../../images/imgPartners/oberigMobile.png";
import oberigMobile2x from "../../images/imgPartners/oberigMobile@2x.png";
import oberigMobileWebP from "../../images/imgPartners/oberigMobileWebP.webp";
import oberigMobileWebP2x from "../../images/imgPartners/oberigMobileWebP@2x.webp";
import oberigTablet from "../../images/imgPartners/oberigTablet.png";
import oberigTablet2x from "../../images/imgPartners/oberigTablet@2x.png";
import oberigTabletWebP from "../../images/imgPartners/oberigTabletWebP.webp";
import oberigTabletWebP2x from "../../images/imgPartners/oberigTabletWebP@2x.webp";

export const PartnersImgs = ({ data }) => {
  const { id, imgAlt } = data;
  const theme = useTheme();
  const { sm } = theme.breakpoints.values;
  const maxMobileScreen = '743px'

  switch (id) {
    case "1":
      return (
        <picture>
          <source srcSet={`${credoMobileWebP} 1x, ${credoMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${credoMobile} 1x, ${credoMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${credoTabletWebP} 1x, ${credoTabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${credoTablet} 1x, ${credoTablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${credoMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen}) 100vw, 50vw`} loading="lazy"/>
        </picture>        
      );

    case "2":
      return (        
        <picture>
          <source srcSet={`${euroInsMobileWebP} 1x, ${euroInsMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${euroInsMobile} 1x, ${euroInsMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${euroInsTabletWebP} 1x, ${euroInsTabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${euroInsTablet} 1x, ${euroInsTablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${euroInsMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen}) 100vw, 50vw`} loading="lazy"/>
        </picture>
      );

    case "3":
      return (
        <picture>
          <source srcSet={`${ingoMobileWebP} 1x, ${ingoMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${ingoMobile} 1x, ${ingoMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${ingoTabletWebP} 1x, ${ingoTabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${ingoTablet} 1x, ${ingoTablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${ingoMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen}) 100vw, 50vw`} loading="lazy"/>
        </picture>
      );

    case "4":
      return (
        <picture>
          <source srcSet={`${brokbusynessMobileWebP} 1x, ${brokbusynessMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${brokbusynessMobile} 1x, ${brokbusynessMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${brokbusynessTabletWebP} 1x, ${brokbusynessTabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${brokbusynessTablet} 1x, ${brokbusynessTablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${brokbusynessMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen}) 100vw, 50vw`} loading="lazy"/>
        </picture>
      );

    case "5":
      return (
        <picture>
          <source srcSet={`${arxMobileWebP} 1x, ${arxMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${arxMobile} 1x, ${arxMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${arxTabletWebP} 1x, ${arxTabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${arxTablet} 1x, ${arxTablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${arxMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen}) 100vw, 50vw`} loading="lazy"/>
        </picture>
      );

    case "6":
      return (
      <picture>
          <source srcSet={`${uniqaMobileWebP} 1x, ${uniqaMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${uniqaMobile} 1x, ${uniqaMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${uniqaTabletWebP} 1x, ${uniqaTabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${uniqaTablet} 1x, ${uniqaTablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${uniqaMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen}) 100vw, 50vw`} loading="lazy"/>
        </picture>
      );

    case "7":
      return (
        <picture>
          <source srcSet={`${interPolisMobileWebP} 1x, ${interPolisMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${interPolisMobile} 1x, ${interPolisMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${interPolisTabletWebP} 1x, ${interPolisTabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${interPolisTablet} 1x, ${interPolisTablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${interPolisMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen}) 100vw, 50vw`} loading="lazy"/>
        </picture>
      );

    case "8":
      return (
        <picture>
          <source srcSet={`${ESAMobileWebP} 1x, ${ESAMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${ESAMobile} 1x, ${ESAMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${ESATabletWebP} 1x, ${ESATabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${ESATablet} 1x, ${ESATablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${ESAMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen}) 100vw, 50vw`} loading="lazy"/>
        </picture>
      );

    case "9":
      return (
      <picture>
          <source srcSet={`${oberigMobileWebP} 1x, ${oberigMobileWebP2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/webp"/>
          <source srcSet={`${oberigMobile} 1x, ${oberigMobile2x} 2x`} media={`(max-width: ${maxMobileScreen})`} type="image/png"/>
          <source srcSet={`${oberigTabletWebP} 1x, ${oberigTabletWebP2x} 2x`} media={`(min-width: ${sm}px)`} type="image/webp"/>
          <source srcSet={`${oberigTablet} 1x, ${oberigTablet2x} 2x`} media={`(min-width: ${sm}px)`} type="image/png"/>          
          <img src={`${oberigMobile}`} alt={imgAlt} style={imgStyle} sizes={`(max-width: ${maxMobileScreen})`} loading="lazy"/>
        </picture>
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
