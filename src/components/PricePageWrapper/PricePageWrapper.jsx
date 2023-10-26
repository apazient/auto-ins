import {
  ContainerSectionPage,
  PageContainerS,
} from "../../style/Global.styled";

const PricePageWrapper = ({ children }) => {
  return (
    <PageContainerS>
      <ContainerSectionPage component="div">{children}</ContainerSectionPage>
    </PageContainerS>
  );
};

export default PricePageWrapper;
