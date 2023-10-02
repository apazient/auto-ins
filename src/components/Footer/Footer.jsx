import { Link as ScrollLink } from "react-scroll";
import { SpriteSVG } from "../../images/SpriteSVG";
// import RRR from "../RRR.js/RRR";
import {
  FooterS,
  FooterBoxS,
  UlListS,  
  ChapterSpan,
  BoxIconS,
  LogoBox,
  LogoText,
  LinkS,
  LiItemS,
} from "./FooterStyled";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (chapter) => {
    navigate("/", { state: { id: chapter } });
  };

  return (
    <footer style={{ oveflow: "hidden" }}>
      <FooterS disableGutters={true} maxWidth={false}>
        {/* <RRR /> */}
        <FooterBoxS disableGutters={true}>
          <LogoBox>
            <BoxIconS className="logoIcon">
              <SpriteSVG name={"icon-logo"} />
            </BoxIconS>
            <LogoText className="logoText">AUTO-INS</LogoText>
          </LogoBox>
          <UlListS>
            <LiItemS
              disablePadding={true}
              onClick={() => handleScrollToSection("переваги")}
            >
              <ScrollLink to="переваги" smooth={true} duration={700}>
                <ChapterSpan className="chapterSpan">Переваги</ChapterSpan>
              </ScrollLink>
            </LiItemS>
            <LiItemS
              disablePadding={true}
              onClick={() => handleScrollToSection("партнери")}
            >
              <ScrollLink to="партнери" smooth={true} duration={700}>
                <ChapterSpan className="chapterSpan">Партнери</ChapterSpan>
              </ScrollLink>
            </LiItemS>
            <LiItemS
              disablePadding={true}
              onClick={() => handleScrollToSection("питання-відповіді")}
            >
              <ScrollLink to="питання-відповіді" smooth={true} duration={700}>
                <ChapterSpan className="chapterSpan">
                  Питання-відповіді
                </ChapterSpan>
              </ScrollLink>
            </LiItemS>
          </UlListS>
          <UlListS className="centered">
            <LiItemS disablePadding={true}>
              <LinkS
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-instagram"} />
                </BoxIconS>
              </LinkS>
            </LiItemS>
            <LiItemS disablePadding={true}>
              <LinkS
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-facebook"} />
                </BoxIconS>
              </LinkS>
            </LiItemS>
            <LiItemS disablePadding={true}>
              <LinkS
                href="https://web.telegram.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-telegram-send"} />
                </BoxIconS>
              </LinkS>
            </LiItemS>
            <LiItemS disablePadding={true}>
              <LinkS
                href="mailto:example@mail.ua"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-mail"} />
                </BoxIconS>
              </LinkS>
            </LiItemS>
          </UlListS>
          <ChapterSpan className="bottomSpan">
            &copy; ТОВ «Auto-ins», 2023. Всі права захищені.
          </ChapterSpan>
        </FooterBoxS>
      </FooterS>
    </footer>
  );
};

export default Footer;
