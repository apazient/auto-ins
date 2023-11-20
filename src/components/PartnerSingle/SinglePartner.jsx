import PropTypes from "prop-types";
import { Rating } from "@mui/material";
import {
  LinkS,
  LogoBoxPartnerS,
  RatingBoxPartnersS,
  RatingTextS,
  SinglePartnerContainerS,
} from "./SinglePartnerStyled";

const SinglePartner = ({ partner }) => {
  const { id, imgSrc, imgAlt, rating, web } = partner;
  return (
    <>
      <SinglePartnerContainerS id={id}>
        <LinkS
          href={web}
          target="_blank"
          rel="noreferrer noopener"
          id={id}          
        >
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
        </LinkS>
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
    web: PropTypes.string.isRequired,
  }).isRequired,
};

export default SinglePartner;
