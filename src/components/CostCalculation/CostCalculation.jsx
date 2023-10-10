import { Typography } from "@mui/material";
import {
  FormContainerS,
  Item,
  StackS,
  YellowButtonS,
} from "./CostCalculationStyled";

export const CostCalculation = () => {
  const arr = ["Легкове авто", "до 1600 см3", "м. Київ"];
  return (
    <FormContainerS
      sx={{
        display: { lg: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="subtitle1" component="span">
        Розрахунок вартості:
      </Typography>
      <StackS direction="row">
        {arr.map((el, index) => {
          return (
            <Item key={index}>
              <Typography component="span">{el}</Typography>
            </Item>
          );
        })}
      </StackS>
      <YellowButtonS>Змінити параметри</YellowButtonS>
    </FormContainerS>
  );
};
