import { ContainerSection } from "../../style/Global.styled";
import Grid from "@mui/material/Unstable_Grid2";

import { Typography } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  BoxImgS,
  GridContainer,
  ItemS,
  TextContainerS,
} from "./AdvatagesSectionStyle";
import { useState } from "react";
import dataFromJson from "../../assets/texts/advantages.json";
import { nanoid } from "nanoid";

const AdvatagesSection = () => {
  const [data, _] = useState(dataFromJson);

  return (
    <section>
      <ContainerSection id="переваги">
        <Typography
          variant="h2"
          sx={{ marginBottom: "40px", textAlign: "center " }}
        >
          Наші переваги
        </Typography>
        <GridContainer container>
          {data.map(({ svg, title, text }) => {
            return (
              <Grid key={nanoid()} xs={12} sm={12} md={12} lg={12}>
                <ItemS>
                  <BoxImgS>
                    <SpriteSVG name={svg}></SpriteSVG>
                  </BoxImgS>
                  <TextContainerS>
                    <Typography
                      variant="h3"
                      sx={{
                        marginBottom: { xs: "4px", sm: "8px", lg: "0" },
                      }}
                    >
                      {title}
                    </Typography>

                    <Typography variant="body1">{text}</Typography>
                  </TextContainerS>
                </ItemS>
              </Grid>
            );
          })}
          {/* <ItemS>
              <BoxImgS>
                <SpriteSVG name={"icon-rocket"}></SpriteSVG>
              </BoxImgS>
              <TextContainerS>
                <Typography
                  variant="h3"
                  sx={{ marginBottom: { xs: "4px", sm: "8px", lg: "0" } }}
                >
                  Зручність та швидкість
                </Typography>

                <Typography variant="body1">
                  Оформлення автоцивілки відбувається швидко та без зайвих
                  турбот, вам не потрібно витрачати багато часу на черги,
                  паперові договори, очікування розрахунку від менеджерів
                  страхових компаній.
                </Typography>
              </TextContainerS>
            </ItemS>
          </Grid>
          <Grid xs={12} sm={3} md={3} lg={2} spacing={2}>
            <ItemS>
              <BoxImgS>
                <SpriteSVG name={"icon-money"}></SpriteSVG>
              </BoxImgS>
              <TextContainerS>
                <Typography
                  variant="h3"
                  sx={{ marginBottom: { xs: "4px", sm: "8px", lg: "0" } }}
                >
                  Економія коштів
                </Typography>

                <Typography variant="body1">
                  Наша платформа дозволяє уникнути додаткових витрат на послуги
                  посередників, що дозволить вам заощадити гроші.
                </Typography>
              </TextContainerS>
            </ItemS>
          </Grid>
          <Grid xs={12} sm={3} md={3} lg={2} spacing={2}>
            <ItemS>
              <BoxImgS>
                <SpriteSVG name={"icon-laptop"}></SpriteSVG>
              </BoxImgS>
              <TextContainerS>
                <Typography
                  variant="h3"
                  sx={{ marginBottom: { xs: "4px", sm: "8px", lg: "0" } }}
                >
                  Інтуїтивний інтерфейс
                </Typography>

                <Typography variant="body1">
                  Простий та зрозумілий інтерфейс дозволить легко розібратися з
                  процесом оформлення автоцивілки.
                </Typography>
              </TextContainerS>
            </ItemS>
          </Grid>
          <Grid xs={12} sm={3} md={3} lg={2} spacing={2}>
            <ItemS>
              <BoxImgS>
                <SpriteSVG name={"icon-colaboration"}></SpriteSVG>
              </BoxImgS>
              <TextContainerS>
                <Typography
                  variant="h3"
                  sx={{ marginBottom: { xs: "4px", sm: "8px", lg: "0" } }}
                >
                  Підтримка 24/7
                </Typography>
                <Typography variant="body1">
                  Наша команда підтримки завжди готова допомогти вам з
                  будь-якими питаннями чи проблемами під час оформлення.
                </Typography>
              </TextContainerS>
            </ItemS>
          </Grid>
          <Grid xs={12} sm={3} md={3} lg={2} spacing={2}>
            <ItemS>
              <BoxImgS>
                <SpriteSVG name={"icon-lock"}></SpriteSVG>
              </BoxImgS>
              <TextContainerS>
                <Typography
                  variant="h3"
                  sx={{ marginBottom: { xs: "4px", sm: "8px", lg: "0" } }}
                >
                  Безпека та конфіденційність
                </Typography>
                <Typography variant="body1">
                  Наша команда підтримки завжди готова допомогти вам з
                  будь-якими питаннями чи проблемами під час оформлення.
                </Typography>
              </TextContainerS>
            </ItemS>
          </Grid>
          <Grid xs={12} sm={3} md={3} lg={2} spacing={2}>
            <ItemS>
              <BoxImgS>
                <SpriteSVG name={"icon-chat"}></SpriteSVG>
              </BoxImgS>
              <TextContainerS>
                <Typography
                  variant="h3"
                  sx={{ marginBottom: { xs: "4px", sm: "8px", lg: "0" } }}
                >
                  Оновлення та нагадування
                </Typography>
                <Typography variant="body1">
                  Наші спеціалісти надсилатимуть Вам сповіщення щодо термінів
                  оплати та продовження автоцивілки, щоб ви завжди були в курсі.
                </Typography>
              </TextContainerS>
            </ItemS> */}
        </GridContainer>
      </ContainerSection>
    </section>
  );
};

export default AdvatagesSection;
