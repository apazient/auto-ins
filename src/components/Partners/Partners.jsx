import { useState } from "react";
import { YellowButton } from "../../style/Global.styled";
import { PartnersContainerS, TitleS, UlPartnersListS } from "./PartnersStyled";
import SinglePartner from "./SinglePartner";
import PartnersList from "./parnersList.json";
import { Collapse } from "@mui/material";

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
    <>
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
          <YellowButton type="button" onClick={handleToggleAdditionalPartners}>
            {showAdditionalPartners ? "Згорнути" : "Всі партнери"}
          </YellowButton>
        ) : (
          <YellowButton type="button" className="Mui-disabled">
            Всі партнери
          </YellowButton>
        )}
      </PartnersContainerS>
    </>
  );
};

export default Partners;