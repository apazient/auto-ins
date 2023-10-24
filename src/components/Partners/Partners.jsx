import { useState } from "react";
import { ContainerSection, YellowButton } from "../../style/Global.styled";
import { PartnersContainerS, SectionS, TitleS, UlPartnersListS } from "./PartnersStyled";
import SinglePartner from "./SinglePartner"; //logo http
import PartnersList from "./parnersList.json"; //logo http
import { Collapse } from "@mui/material";
// import SinglePartner from "../PartnersCopy/SinglePartner"; //logo img-png
// import PartnersList from "../PartnersCopy/parnersList.json"; //logo img-png

const Partners = () => {  
  const totalPartners = PartnersList?.length;
  const maxDisplayedPartners = 8;
  const [showAdditionalPartners, setshowAdditionalPartners] = useState(false);

  const handleToggleAdditionalPartners = () => {
    setshowAdditionalPartners(!showAdditionalPartners);
  };

  const firstEightPartners = PartnersList?.slice(0, maxDisplayedPartners);
  const additionalPartners = PartnersList?.slice(maxDisplayedPartners);

  return (
    <SectionS>
      <ContainerSection>
        <PartnersContainerS disableGutters={true} id="партнери">
          <TitleS variant="h2" className="titleBlack">
            Партнери
          </TitleS>
          <UlPartnersListS>
            {firstEightPartners?.map((partner) => (
              <SinglePartner key={partner?.web} partner={partner} />
            ))}

            <Collapse in={showAdditionalPartners} timeout={500}>
              <UlPartnersListS className="additionalPartners">
                {additionalPartners.map((partner) => (
                  <SinglePartner key={partner?.web} partner={partner} />
                ))}                
              </UlPartnersListS>
            </Collapse>
          </UlPartnersListS>
          {totalPartners > maxDisplayedPartners ? (
            <YellowButton
              type="button"
              onClick={handleToggleAdditionalPartners}
            >
              {showAdditionalPartners ? "Згорнути" : "Всі партнери"}
            </YellowButton>
          ) : (
            <YellowButton type="button" className="Mui-disabled">
              Всі партнери
            </YellowButton>
          )}
        </PartnersContainerS>
      </ContainerSection>
    </SectionS>
  );
};

export default Partners;
