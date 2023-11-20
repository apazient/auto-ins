import { useLocation } from "react-router-dom";
import {
  ContainerSectionPage,
  PageContainerS,
} from "../../style/Global.styled";
import OutletNavigation from "../OutletNavigation/OutletNavigation";

const OutletPageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <PageContainerS>
      <ContainerSectionPage component="div">
        <OutletNavigation locationPath={location} />
        {children}
      </ContainerSectionPage>
    </PageContainerS>
  );
};

export default OutletPageWrapper;
