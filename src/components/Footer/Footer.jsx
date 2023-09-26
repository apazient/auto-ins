import { List, ListItem } from "@mui/material";
import RRR from "../RRR.js/RRR";
import { ChapterSpan, LiItemS, UlListS } from "./FooterStyled";

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <RRR/>
      <div style={{width: 370, height: 282, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '64px auto 32px', gap: '20px'}}>        
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
        <p style={{margin: 0}}>&copy; ТОВ «Auto-ins», 2023. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
