import { Link } from "react-router-dom";
import { YellowButton } from "../style/Global.styled";
import { useLocation } from "react-router-dom";
import ProposalsFilter from "../components/ProposalsFilter/ProposalsFilter";
import { WhiteButton } from "../style/Global.styled";


export const PricesPage = () => {
  const location = useLocation();
  

  return (
    <>
      <div>PricesPage</div>
      <Link state={{ from: location }} to="/form" style={{ color: "lime" }}>
        <YellowButton>Придбати</YellowButton>
      </Link>
      <WhiteButton> WhiteButton</WhiteButton>
      <ProposalsFilter />
    </>
  );
};

export default PricesPage;
