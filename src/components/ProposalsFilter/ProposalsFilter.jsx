import { useEffect, useState } from "react";
import { Box, Collapse, Zoom, useMediaQuery } from "@mui/material";
import { SpriteSVG } from "../../images/SpriteSVG";
import {
  FilterButtonStyled,
  ResetFilterButtonStyled,
  SelectsContStyled,
  TooltipStyled,
} from "./ProposalsFilter.styled";
import GeneralSelect from "../GeneralSelect/GeneralSelect";
import { useTheme } from "@emotion/react";

const ProposalsFilter = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [isShowFilter, setIsShowFilter] = useState(false);

  useEffect(() => {
    setIsShowFilter(smScreen);
  }, [smScreen]);

  const handleChange = () => {
    setIsShowFilter((prev) => !prev);
  };

  return (
    <Box sx={{ backgroundColor: "#BCC3E7", padding: "20px 0", color: "black" }}>
      {!smScreen && (
        <FilterButtonStyled aria-label="showFilter" onClick={handleChange}>
          <Box
            sx={{
              width: 24,
              height: 24,
              fill: "transparent",
              stroke: "black",
              marginRight: 0.5,
            }}
          >
            <SpriteSVG name="icon-filter-smaller" />
          </Box>
          Фільтри
        </FilterButtonStyled>
      )}
      <Collapse in={isShowFilter}>
        <SelectsContStyled>
          <GeneralSelect
            id="price"
            lableText="Ціна"
            optionsArr={["Ціна", "Популярність", "Компанії"]}
            //changeCB, //функція що повертає вибране значення (піднесення)
          />
          <GeneralSelect
            id="popularity"
            lableText="Популярність"
            optionsArr={["Ціна", "Популярність", "Компанії"]}
            //changeCB, //функція що повертає вибране значення (піднесення)
          />
          <GeneralSelect
            id="companies"
            lableText="Компанії"
            optionsArr={["Ціна", "Популярність", "Компанії"]}
            //changeCB, //функція що повертає вибране значення (піднесення)
          />
          <TooltipStyled
            title="Очистити фільтр"
            arrow
            placement="top"
            TransitionComponent={Zoom}
          >
            <ResetFilterButtonStyled type="button">
              <SpriteSVG name="icon-filter-desktop-tablet" />
            </ResetFilterButtonStyled>
          </TooltipStyled>
        </SelectsContStyled>
      </Collapse>
    </Box>
  );
};

export default ProposalsFilter;
