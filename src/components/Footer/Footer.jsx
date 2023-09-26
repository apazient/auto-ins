import RRR from "../RRR.js/RRR";
import { FooterS, FooterBoxS, UlListS, LiItemS, ChapterSpan, BottomSpan } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterS disableGutters={true} maxWidth={false}>
      <RRR/>
      <FooterBoxS disableGutters={true}>        
        <div style={{ width: 174, height: 104, backgroundColor: "white" }}>
          <img
            src="#"
            alt="LOGO AUTO-INS"
            style={{
              boxSizing: "border-box",
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        
        <UlListS>
          <LiItemS disablePadding={true} >
            <ChapterSpan>Переваги</ChapterSpan>
          </LiItemS>
          <LiItemS disablePadding={true}>
            <ChapterSpan>Партнери</ChapterSpan>
          </LiItemS>
          <LiItemS disablePadding={true}>
            <ChapterSpan>Питання-відповідь</ChapterSpan>
          </LiItemS>
        </UlListS>
        <UlListS className="centered">
          <LiItemS disablePadding={true} className="liSocialIcon">
            <svg style={{ width: "24", height: "24", backgroundColor: 'blue' }}></svg>
          </LiItemS>
          <LiItemS disablePadding={true} className="liSocialIcon">
            <svg style={{ width: "24", height: "24", backgroundColor: 'blue' }}></svg>
          </LiItemS>
          <LiItemS disablePadding={true} className="liSocialIcon">
            <svg style={{ width: "24", height: "24", backgroundColor: 'blue' }}></svg>
          </LiItemS>
          <LiItemS disablePadding={true} className="liSocialIcon">
            <svg style={{ width: "24", height: "24", backgroundColor: 'blue' }}></svg>
          </LiItemS>
        </UlListS>
        <BottomSpan className="bottomSpan">&copy; ТОВ «Auto-ins», 2023. Всі права захищені.</BottomSpan>
      </FooterBoxS>
    </FooterS>
  );
};

export default Footer;
