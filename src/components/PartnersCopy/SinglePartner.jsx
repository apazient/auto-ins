import PropTypes from "prop-types";
import { Link, Rating } from "@mui/material";
import {
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
        <Link
          href={web}
          target="_blank"
          rel="noreferrer noopener"
          id={id}
          style={{ textDecoration: "none" }}
        >
          <LogoBoxPartnerS>
            <img
              src={imgSrc}
              alt={imgAlt}
              id={id}
              style={{ width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block"
            }}
            />
          </LogoBoxPartnerS>

          <RatingBoxPartnersS>
            <RatingTextS className="ratingText">Рейтинг МТСБУ</RatingTextS>
            <Rating name="read-only" value={rating} precision={0.1} readOnly />
          </RatingBoxPartnersS>
        </Link>
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
