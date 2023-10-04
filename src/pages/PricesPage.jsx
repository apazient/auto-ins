import Company from "../components/Company/Company";
import OutletNavaigation from "../components/OutletNavigation/OutletNavigation";
import { PricesPageMainS } from "../style/Global.styled";

export const PricesPage = () => {
  return (
    <PricesPageMainS>
      <OutletNavaigation />
      <Company />
    </PricesPageMainS>
  );
};

export default PricesPage;
