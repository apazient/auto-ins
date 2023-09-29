import { Link as ScrollLink } from "react-scroll";
import { Link } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  BoxIconHS,
  ChapterSpanHS,
  HeaderBoxS,
  HeaderS,
  LiItemHS,
  LogoBoxS,
  LogoTextHS,
  UlListHS,
} from "./HeaderStyled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLargeScreen = useMediaQuery("(min-width:1280px)");
  const navigate = useNavigate();

  const handleScrollToSection = (chapter) => {    
    navigate("/", { state: { id: chapter } });
  };

  return (
    <header>
      <HeaderS disableGutters={true} maxWidth={false}>
        <HeaderBoxS>
          <LogoBoxS>
            <BoxIconHS className="logoIcon">
              <SpriteSVG name={"icon-logo"} />
            </BoxIconHS>
            <LogoTextHS>AUTO-INS</LogoTextHS>
          </LogoBoxS>
          {isLargeScreen ? (
            <>
              <UlListHS>
                <ScrollLink
                  to="переваги"
                  smooth={true}
                  duration={700}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                >
                  <LiItemHS disablePadding={true} onClick={()=>handleScrollToSection('переваги')}>
                    <ChapterSpanHS className="chapterSpan">
                      Переваги
                    </ChapterSpanHS>
                  </LiItemHS>
                </ScrollLink>
                <ScrollLink
                  to="партнери"
                  smooth={true}
                  duration={700}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                >
                  <LiItemHS disablePadding={true} onClick={()=>handleScrollToSection('партнери')}>
                    <ChapterSpanHS className="chapterSpan">
                      Партнери
                    </ChapterSpanHS>
                  </LiItemHS>
                </ScrollLink>
                <ScrollLink
                  to="питання-відповіді"
                  smooth={true}
                  duration={700}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                >
                  <LiItemHS disablePadding={true} onClick={()=>handleScrollToSection('питання-відповіді')}>
                    <ChapterSpanHS className="chapterSpan">
                      Питання-відповіді
                    </ChapterSpanHS>
                  </LiItemHS>
                </ScrollLink>
              </UlListHS>
              <UlListHS className="socialIcons">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LiItemHS disablePadding={true} className="liSocialIcon">
                    <BoxIconHS className="socialIconBox">
                      <SpriteSVG name={"icon-instagram"} />
                    </BoxIconHS>
                  </LiItemHS>
                </Link>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LiItemHS disablePadding={true} className="liSocialIcon">
                    <BoxIconHS className="socialIconBox">
                      <SpriteSVG name={"icon-facebook"} />
                    </BoxIconHS>
                  </LiItemHS>
                </Link>
                <Link
                  href="https://web.telegram.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LiItemHS disablePadding={true} className="liSocialIcon">
                    <BoxIconHS className="socialIconBox">
                      <SpriteSVG name={"icon-telegram-send"} />
                    </BoxIconHS>
                  </LiItemHS>
                </Link>
                <Link
                  href="mailto:example@mail.ua"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LiItemHS disablePadding={true} className="liSocialIcon">
                    <BoxIconHS className="socialIconBox">
                      <SpriteSVG name={"icon-mail"} />
                    </BoxIconHS>
                  </LiItemHS>
                </Link>
              </UlListHS>
            </>
          ) : (
            <BurgerMenu sx={{ width: "32px" }} />
          )}
        </HeaderBoxS>
      </HeaderS>
    </header>
  );
};

export default Header;
