import { Link } from "@mui/material";
import {
  LogoBoxPartnerS,
  RatingBoxPartnersS,
  RatingTextS,
  SinglePartnerContainerS,
} from "./SinglePartnerStyled";

const SinglePartner = ({ logoSVG }) => {
  return (
    <>
      <SinglePartnerContainerS>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LogoBoxPartnerS style={{ outline: "1px solid red" }}>
            <div>svg</div>
          </LogoBoxPartnerS>
        </Link>
        <RatingBoxPartnersS>
          <RatingTextS className="ratingText">Рейтинг МТСБУ</RatingTextS>
          <div style={{ color: "black" }}>stars</div>
        </RatingBoxPartnersS>
      </SinglePartnerContainerS>
    </>
  );
};

export default SinglePartner;
