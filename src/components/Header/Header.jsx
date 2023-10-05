import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  BoxIconHS,
  ChapterSpanHS,
  HeaderBoxS,
  HeaderS,
  LiItemHS,
  LinkS,
  LogoBoxS,
  LogoTextHS,
  UlListHS,
} from "./HeaderStyled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(`${theme.breakpoints.up("ml")}`);
  // const isLargeScreen = useMediaQuery(`${theme.breakpoints.up("lg")}`);
  // const isLargeScreen = useMediaQuery(`(min-width: 1160px)`);
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
                <LiItemHS
                  disablePadding={true}
                  onClick={() => handleScrollToSection("переваги")}
                >
                  <ScrollLink
                    to="переваги"
                    smooth={true}
                    duration={700}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                  >
                    <ChapterSpanHS className="chapterSpan">
                      Переваги
                    </ChapterSpanHS>
                  </ScrollLink>
                </LiItemHS>
                <LiItemHS
                  disablePadding={true}
                  onClick={() => handleScrollToSection("партнери")}
                >
                  <ScrollLink
                    to="партнери"
                    smooth={true}
                    duration={700}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                  >
                    <ChapterSpanHS className="chapterSpan">
                      Партнери
                    </ChapterSpanHS>
                  </ScrollLink>
                </LiItemHS>
                <LiItemHS
                  disablePadding={true}
                  onClick={() => handleScrollToSection("питання-відповіді")}
                >
                  <ScrollLink
                    to="питання-відповіді"
                    smooth={true}
                    duration={700}
                    style={{ cursor: "pointer" }}
                    activeClass="active"
                  >
                    <ChapterSpanHS className="chapterSpan">
                      Питання-відповіді
                    </ChapterSpanHS>
                  </ScrollLink>
                </LiItemHS>
              </UlListHS>
              <UlListHS className="socialIcons">
                <LiItemHS disablePadding={true}>
                  <LinkS
                    href="https://instagram.com/autoins_info?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="instagram"
                  >
                    <BoxIconHS className="socialIconBox">
                      <SpriteSVG name={"icon-instagram"} />
                    </BoxIconHS>
                  </LinkS>
                </LiItemHS>
                <LiItemHS disablePadding={true}>
                  <LinkS
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="facebook"
                  >
                    <BoxIconHS className="socialIconBox">
                      <SpriteSVG name={"icon-facebook"} />
                    </BoxIconHS>
                  </LinkS>
                </LiItemHS>
                <LiItemHS disablePadding={true}>
                  <LinkS
                    href="https://t.me/@auto_ins_ua"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="telegram"
                  >
                    <BoxIconHS className="socialIconBox">
                      <SpriteSVG name={"icon-telegram-send"} />
                    </BoxIconHS>
                  </LinkS>
                </LiItemHS>
                <LiItemHS disablePadding={true}>
                  <LinkS
                    href="mailto:help.autoins@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="mail"
                  >
                    <BoxIconHS className="socialIconBox">
                      <SpriteSVG name={"icon-mail"} />
                    </BoxIconHS>
                  </LinkS>
                </LiItemHS>
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
