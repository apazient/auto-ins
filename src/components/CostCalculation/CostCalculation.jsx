import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { YellowButton } from "../../style/Global.styled";

import { Typography } from "@mui/material";
import { FormContainerS, Item, StackS } from "./CostCalculationStyled";

export const CostCalculation = () => {
  const arr = ["Легкове авто", "до 1600 см3", "м. Київ"];
  return (
    <FormContainerS>
      <Typography variant="subtitle1" component="span">
        Розрахунок вартості:
      </Typography>
      <Box>
        <StackS direction="row" spacing={2}>
          {arr.map((el, index) => {
            return <Item key={index}>{el}</Item>;
          })}
        </StackS>
        <YellowButton>Змінити параметри</YellowButton>
      </Box>
    </FormContainerS>
  );
};
