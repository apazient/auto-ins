import { useEffect, useRef, useState } from "react";
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
import {
  createSelectOptionsByCompaniName,
  filteredByPrice,
  priceSortOptionsGeneral,
} from "../../helpers/proposalsFilter";
import PropTypes from "prop-types";
import FilterByCompany from "../SelectFilterByCompany/FilterByCompany";

const ProposalsFilter = ({ companies = [], setCompanies }) => {
  const { current } = useRef(companies);
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const [isShowFilter, setIsShowFilter] = useState(false);

  useEffect(() => {
    setCompaniesNameOptions(createSelectOptionsByCompaniName(current));
  }, [current]);

  const [companiesNameOptions, setCompaniesNameOptions] = useState([]);
  const [selectedCompanieName, setSelectedCompanieName] = useState([]);
  const [selectedPriceSort, setSelectedPriceSort] = useState(
    priceSortOptionsGeneral[0]
  );
  const [selectedSortByReiting, setSelectedSortByReiting] = useState(
    priceSortOptionsGeneral[0]
  );
  // =============================================================

  const handleChangeByName = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCompanieName(
      typeof value === "string" ? value.split(",") : value
    );
  };
  // =============================================================

  useEffect(() => {
    setIsShowFilter(smScreen);
  }, [smScreen]);

  useEffect(() => {
    let filteredCompanies = [...current];
    if (selectedCompanieName.length) {
      filteredCompanies = filteredCompanies.filter((el) =>
        selectedCompanieName.includes(el.insurerName)
      );
    }

    if (selectedPriceSort.value) {
      filteredByPrice(filteredCompanies, selectedPriceSort.value);
    }

    if (selectedCompanieName || selectedPriceSort.value) {
      setCompanies(filteredCompanies);
    } else {
      setCompanies(current);
    }
  }, [selectedCompanieName, current, setCompanies, selectedPriceSort]);

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
            optionsArr={priceSortOptionsGeneral}
            changeCB={setSelectedPriceSort} //функція що повертає вибране значення (піднесення)
            currentValue={selectedPriceSort}
          />
          <GeneralSelect
            id="popularity"
            lableText="Популярність"
            optionsArr={priceSortOptionsGeneral}
            changeCB={setSelectedSortByReiting} //функція що повертає вибране значення (піднесення)
            currentValue={selectedSortByReiting}
          />

          <FilterByCompany
            id="filteredByName"
            lableText="Компанії"
            changeCB={handleChangeByName}
            currentValue={selectedCompanieName}
            optionsArr={companiesNameOptions}
          />
          <TooltipStyled
            title="Очистити фільтр"
            arrow
            placement="top"
            TransitionComponent={Zoom}
          >
            <ResetFilterButtonStyled
              type="button"
              onClick={() => {
                setSelectedCompanieName([]);
                setSelectedPriceSort(priceSortOptionsGeneral[0]);
                setSelectedSortByReiting(priceSortOptionsGeneral[0]);
              }}
            >
              <SpriteSVG name="icon-filter-desktop-tablet" />
            </ResetFilterButtonStyled>
          </TooltipStyled>
        </SelectsContStyled>
      </Collapse>
    </Box>
  );
};

export default ProposalsFilter;

ProposalsFilter.propTypes = {
  companies: PropTypes.array,
  setCompanies: PropTypes.func,
};
