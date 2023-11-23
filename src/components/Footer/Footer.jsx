import { Link as ScrollLink } from "react-scroll";
import { SpriteSVG } from "../../images/SpriteSVG";
import RRR from "../RRR.js/RRR";
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
                <ChapterSpan className="chapterSpan" component="span">
                  Переваги
                </ChapterSpan>
              </ScrollLink>
            </LiItemS>
            <LiItemS
              disablePadding={true}
              onClick={() => handleScrollToSection("партнери")}
            >
              <ScrollLink to="партнери" smooth={true} duration={700}>
                <ChapterSpan className="chapterSpan" component="span">
                  Партнери
                </ChapterSpan>
              </ScrollLink>
            </LiItemS>
            <LiItemS
              disablePadding={true}
              onClick={() => handleScrollToSection("питання-відповіді")}
            >
              <ScrollLink to="питання-відповіді" smooth={true} duration={700}>
                <ChapterSpan className="chapterSpan" component="span">
                  Питання-відповіді
                </ChapterSpan>
              </ScrollLink>
            </LiItemS>
          </UlListS>
          <UlListS className="centered">
            <LiItemS disablePadding={true}>
              <LinkS
                href="https://instagram.com/autoins_info?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="instagram"
              >
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-instagram"} />
                </BoxIconS>
              </LinkS>
            </LiItemS>
            <LiItemS disablePadding={true}>
              <LinkS
                href="https://www.facebook.com/profile.php?id=61551725567425"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="facebook"
              >
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-facebook"} />
                </BoxIconS>
              </LinkS>
            </LiItemS>
            <LiItemS disablePadding={true}>
              <LinkS
                href="https://t.me/@auto_ins_ua"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="telegram"
              >
                <BoxIconS className="socialIconBox">
                  <SpriteSVG name={"icon-telegram-send"} />
                </BoxIconS>
              </LinkS>
            </LiItemS>
            <LiItemS disablePadding={true}>
              <LinkS
                href="mailto:help.autoins@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="mail"
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
