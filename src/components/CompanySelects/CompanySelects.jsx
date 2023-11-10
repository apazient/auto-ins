import { Box, useTheme } from "@mui/material";

import { BoxSelect } from "../Company/CompanyStyled";
import GeneralSelect from "../GeneralSelect/GeneralSelect";

const CompanySelects = ({ props }) => {
  const {
    proposal,
    franchise,
    chooseDgo,
    handleChangeSelect,
    handleChangeDgoSelect,
  } = props;
  const theme = useTheme();

  return (
    <Box className="content">
      <BoxSelect className="franchise">
        <GeneralSelect
          id="franchise"
          lableText="Франшиза"
          helper="Пояснення до франчизи"
          color={theme.palette.primary.main}
          optionsArr={proposal.tariff}
          changeCB={handleChangeSelect}
          currentValue={franchise}
          getOptionLabel={(option) => `${option.franchise} грн`}
          getOptionValue={(option) => option.discountedPayment}
        />
      </BoxSelect>
      <BoxSelect>
        <GeneralSelect
          id="2"
          lableText="Додаткове покриття"
          helper="Пояснення до додаткове покриття"
          color={theme.palette.primary.main}
          optionsArr={proposal?.dgo?.tariff || []}
          changeCB={handleChangeDgoSelect}
          defaultValue={{ limit: 0, discountedPayment: 0 }}
          getOptionLabel={(option) =>
            `+${option.limit} за ${option.discountedPayment} грн`
          }
          getOptionValue={(option) => option.discountedPayment}
          currentValue={chooseDgo}
          isDisabled={!proposal?.dgo ? true : false}
        />
      </BoxSelect>
    </Box>
  );
};

export default CompanySelects;
