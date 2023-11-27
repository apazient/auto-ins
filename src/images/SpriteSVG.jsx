import PropTypes from "prop-types";
import { Rocket } from "./Icons/Rocket";
import { Square } from "./Icons/Square";
import { SquareCheked } from "./Icons/SquareCheked";
import { TelegramSend } from "./Icons/TelegramSend";
import { FilterDesktopTablet } from "./Icons/FilterDesktopTablet";
import { Calendar } from "./Icons/Calendar";
import { FilterMobile } from "./Icons/FilterMobile";
import { AlertTriangle } from "./Icons/AlertTriangle";
import { Burger } from "./Icons/Burger";
import { ArrowLeft } from "./Icons/ArrowLeft";
import { CarLittle } from "./Icons/CarLittle";
import { Car } from "./Icons/Car";
import { Chat } from "./Icons/Chat";
import { CheckCircle } from "./Icons/CheckCircle";
import { ChevronDown } from "./Icons/ChevronDown";
import { Colaboration } from "./Icons/Colaboration";
import { Email } from "./Icons/Email";
import { Facebook } from "./Icons/facebook";
import { FilterSmaller } from "./Icons/FilterSmaller";
import { HelpCircle } from "./Icons/HelpCircle";
import { HelpCircleSmaller } from "./Icons/HelpCircleSmaller";
import { Home } from "./Icons/Home";
import { HomeSmaller } from "./Icons/HomeSmaller";
import { Instagram } from "./Icons/Instagram";
import { Laptop } from "./Icons/Laptop";
import { Lock } from "./Icons/Lock";
import { Logo } from "./Icons/Logo";
import { Mail } from "./Icons/Mail";
import { Money } from "./Icons/Money";
import { Passport } from "./Icons/Passport";
import { IconX } from "./Icons/IconX";
import { ZoomOut } from "./Icons/ZoomOut";

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case "icon-filter-desktop-tablet":
      return <FilterDesktopTablet />;

    case "icon-calendar":
      return <Calendar />;

    case "icon-filter-mobile":
      return <FilterMobile />;

    case "icon-alert-triangle":
      return <AlertTriangle />;

    case "icon-burger":
      return <Burger />;

    case "icon-arrow-left":
      return <ArrowLeft />;

    case "icon-car-little":
      return <CarLittle />;

    case "icon-car":
      return <Car />;

    case "icon-chat":
      return <Chat />;

    case "icon-check-circle":
      return <CheckCircle />;

    case "icon-chevron-down":
      return <ChevronDown />;

    case "icon-colaboration":
      return <Colaboration />;

    case "icon-email":
      return <Email />;

    case "icon-facebook":
      return <Facebook />;

    case "icon-filter-smaller":
      return <FilterSmaller />;

    case "icon-help-circle":
      return <HelpCircle />;

    case "icon-help-circle-smaller":
      return <HelpCircleSmaller />;

    case "icon-home":
      return <Home />;

    case "icon-home-smaller":
      return <HomeSmaller />;

    case "icon-instagram":
      return <Instagram />;

    case "icon-laptop":
      return <Laptop />;

    case "icon-lock":
      return <Lock />;

    case "icon-logo":
      return <Logo />;

    case "icon-mail":
      return <Mail />;

    case "icon-money":
      return <Money />;

    case "icon-passport":
      return <Passport />;

    case "icon-rocket":
      return <Rocket />;

    case "icon-square":
      return <Square />;

    case "icon-square-checked":
      return <SquareCheked />;

    case "icon-telegram-send":
      return <TelegramSend />;

    case "icon-x":
      return <IconX />;

    case "icon-zoom-out":
      return <ZoomOut />;

    default:
      return "SVG not found";
  }
};

SpriteSVG.propTypes = {
  name: PropTypes.string.isRequired,
};
