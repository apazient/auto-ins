import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  BoxImgS,
  GridContainer,
  ItemS,
  TextContainerS,
} from "./AdvantagesSectionStyle";
import { ContainerSection } from "../../style/Global.styled";
import { advantages } from "../../assets/utils/advantages";

const AdvantagesSection = () => {
  return (
    <section>
      <ContainerSection id="переваги">
        <Typography variant="h2" className="main-title">
          Наші переваги
        </Typography>
        <GridContainer container>
          {advantages.map(({ svg, title, text }) => {
            return (
              <Grid key={title} xs={12} sm={12} md={12} lg={12}>
                <ItemS>
                  <BoxImgS>
                    <SpriteSVG name={svg}></SpriteSVG>
                  </BoxImgS>
                  <TextContainerS>
                    <Typography variant="h3" className="title">
                      {title}
                    </Typography>
                    <Typography variant="body1">{text}</Typography>
                  </TextContainerS>
                </ItemS>
              </Grid>
            );
          })}
        </GridContainer>
      </ContainerSection>
    </section>
  );
};

export default AdvantagesSection;
