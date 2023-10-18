import { Box, Typography } from "@mui/material";
import {
  FormContainerS,
  Item,
  StackS,
  YellowButtonS,
} from "./CostCalculationStyled";

export const CostCalculation = () => {
  const arr = ["Легкове авто", "до 1600 см3", "м. Київ"];
  return (
    <FormContainerS>
      <Typography
        variant="formTitle"
        component="span"
        sx={{
          fontSize: { sm: "18px", lg: "22px" },
          fontWeight: { sm: "700", lg: "800" },
        }}
      >
        Розрахунок вартості:
      </Typography>
      <Box className="wrapContent">
        <StackS direction="row">
          {arr.map((el, index) => {
            return (
              <Item key={index}>
                <Typography
                  component="span"
                  variant="inputLable"
                  sx={{
                    fontSize: { lg: "18px" },
                    fontWeight: { lg: "600" },
                  }}
                >
                  {el}
                </Typography>
              </Item>
            );
          })}
        </StackS>
        <YellowButtonS>Змінити параметри</YellowButtonS>
      </Box>
    </FormContainerS>
  );
};
