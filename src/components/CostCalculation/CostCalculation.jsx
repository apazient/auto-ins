import { Box, Typography } from "@mui/material";
import {
  FormContainerS,
  Item,
  StackS,
  YellowButtonS,
} from "./CostCalculationStyled";
import { useNavigate } from "react-router-dom";

export const CostCalculation = () => {
  const navigate = useNavigate();
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
        <YellowButtonS type="submit" onClick={() => navigate("/")}>
          Змінити параметри
        </YellowButtonS>
      </Box>
    </FormContainerS>
  );
};
