import { Link } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { SpriteSVG } from "../../images/SpriteSVG";
import RRR from "../RRR.js/RRR";
import {
  FooterS,
  FooterBoxS,
  UlListS,
  LiItemS,
  ChapterSpan,
  BoxIconS,
  LogoBox,
  LogoText,
} from "./FooterStyled";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (chapter) => {
    navigate("/", { state: { id: chapter } });
  };

  return (
    <FooterS disableGutters={true} maxWidth={false}>
      <RRR />
      <FooterBoxS disableGutters={true}>
        <LogoBox>
          <BoxIconS className="logoIcon">
            <SpriteSVG name={"icon-logo"} />
          </BoxIconS>
          <LogoText className="logoText">AUTO-INS</LogoText>
        </LogoBox>
        <UlListS>
          <ScrollLink
            to="переваги"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            <LiItemS disablePadding={true} onClick={()=>handleScrollToSection('переваги')}>
              <ChapterSpan className="chapterSpan">Переваги</ChapterSpan>
            </LiItemS>
          </ScrollLink>
          <ScrollLink
            to="партнери"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            <LiItemS disablePadding={true} onClick={()=>handleScrollToSection('партнери')}>
              <ChapterSpan className="chapterSpan">Партнери</ChapterSpan>
            </LiItemS>
          </ScrollLink>
          <ScrollLink
            to="питання-відповіді"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            <LiItemS disablePadding={true} onClick={()=>handleScrollToSection('питання-відповіді')}>
              <ChapterSpan className="chapterSpan">
                Питання-відповіді
              </ChapterSpan>
            </LiItemS>
          </ScrollLink>
        </UlListS>
        <UlListS className="centered">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LiItemS disablePadding={true} className="liSocialIcon">
              <BoxIconS className="socialIconBox">
                <SpriteSVG name={"icon-instagram"} />
              </BoxIconS>
            </LiItemS>
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LiItemS disablePadding={true} className="liSocialIcon">
              <BoxIconS className="socialIconBox">
                <SpriteSVG name={"icon-facebook"} />
              </BoxIconS>
            </LiItemS>
          </Link>
          <Link
            href="https://web.telegram.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LiItemS disablePadding={true} className="liSocialIcon">
              <BoxIconS className="socialIconBox">
                <SpriteSVG name={"icon-telegram-send"} />
              </BoxIconS>
            </LiItemS>
          </Link>
          <Link
            href="mailto:example@mail.ua"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LiItemS disablePadding={true} className="liSocialIcon">
              <BoxIconS className="socialIconBox">
                <SpriteSVG name={"icon-mail"} />
              </BoxIconS>
            </LiItemS>
          </Link>
        </UlListS>
        <ChapterSpan className="bottomSpan">
          &copy; ТОВ «Auto-ins», 2023. Всі права захищені.
        </ChapterSpan>
      </FooterBoxS>
    </FooterS>
  );
};

export default Footer;
