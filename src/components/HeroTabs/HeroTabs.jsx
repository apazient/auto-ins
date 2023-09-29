import { useState } from "react";
import {
  TabStyled,
  TabsContainer,
  TabsStyled,
  TitleStaled,
} from "./HeroTabs.styled";
import ByParameters from "./ByParameters/ByParameters";
import ByLicensePlate from "./ByLicensePlate/ByLicensePlate";

import { useMediaQuery } from "@mui/material";


const HeroTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <section>
      <TabsContainer>

        <TitleStaled variant="h1" component="h1">
          Автоцивілка {isMobile && <br />} без зайвих рухів
        </TitleStaled>

        <TabsStyled value={value} onChange={handleChange}>
          <TabStyled label="За параметрами" />
          <TabStyled label="За держ. номерним знаком" wrapped />
        </TabsStyled>
        {/* Вміст для вкладок */}
        {value === 0 && <ByParameters />}
        {value === 1 && <ByLicensePlate />}
      </TabsContainer>
    </section>
  );
};

export default HeroTabs;
