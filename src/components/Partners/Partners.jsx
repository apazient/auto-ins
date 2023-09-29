import { YellowButton } from "../../style/Global.styled";
import { PartnersContainerS, TitleS } from "./PartnersStyled";
import SinglePartner from "./SinglePartner";
// import PartnersList from './ParterIcons/PartnersList'
import PartnersList from './ParterIcons/w.json'
const Partners = () => {
const partnersArr = PartnersList
console.log(partnersArr);

  return (
    <>
      <div>Partners</div>
      <PartnersContainerS disableGutters={true}>
        <TitleS variant="h2" className="titleBlack">Партнери</TitleS>
        <div style={{marginBottom: '48px', display: 'flex', flexWrap: 'wrap'}}>
          <SinglePartner />
        </div>
        <YellowButton type="button">Всі партнери</YellowButton>
      </PartnersContainerS>
    </>
  );
};

export default Partners;
