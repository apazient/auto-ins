import PropTypes from "prop-types";
import { Rating } from "@mui/material";
import {
  LogoBoxPartnerS,
  RatingBoxPartnersS,
  RatingTextS,
  SinglePartnerContainerS,
} from "./SinglePartnerStyled";

const SinglePartner = ({ partner }) => {
  const { id, imgSrc, imgAlt, rating } = partner;
  return (
    <>
      <SinglePartnerContainerS id={id}>
        <div>
          <LogoBoxPartnerS>
            <img
              src={imgSrc}
              alt={imgAlt}
              id={id}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </LogoBoxPartnerS>
          <RatingBoxPartnersS>
            <RatingTextS className="ratingText">Рейтинг МТСБУ</RatingTextS>
            <Rating name="read-only" value={rating} precision={0.1} readOnly />
          </RatingBoxPartnersS>
        </div>
      </SinglePartnerContainerS>
    </>
  );
};

SinglePartner.propTypes = {
  partner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,    
  }).isRequired,
};

export default SinglePartner;
