import { Box, Typography } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";

import {
  BoxImg,
  Button,
  ContainerSection,
  ContCheck,
} from "./CheckInsSectionStyle";

const CheckInsSection = () => {
  return (
    <section>
      <ContainerSection>
        <ContCheck>
          <BoxImg>
            <SpriteSVG name={"icon-car"} />
          </BoxImg>
          <Typography
            variant="h3"
            sx={{ marginBottom: { xs: "4px", sm: "8px" } }}
          >
            Перевірка страховки співробітниками поліції
          </Typography>
          <div>
            <Typography variant="body1">
              Усі оформлені поліси зберігаються в єдиній базі МТСБУ. Поліція
              може перевірити дійсність вашого поліса онлайн. Також ви можете
              зробити це самостійно за номером авто або номером поліса.
            </Typography>
            <Button>Перевірити поліс</Button>
          </div>
        </ContCheck>
      </ContainerSection>
    </section>
  );
};

export default CheckInsSection;
