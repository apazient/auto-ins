import PropTypes from "prop-types";
import { Link, Rating } from "@mui/material";
import {
  LogoBoxPartnerS,
  RatingBoxPartnersS,
  RatingTextS,
  SinglePartnerContainerS,
} from "./SinglePartnerStyled";
import { PartnersImgs } from "./PartnersImgs";

const SinglePartner = ({ partner }) => {
  const { id, imgAlt, rating, web } = partner;
  return (
    <>
      <SinglePartnerContainerS>
        <Link
          href={web}
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: "none" }}
        >
          <LogoBoxPartnerS>
            <PartnersImgs data={{ id: String(id), imgAlt: imgAlt }} />
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
    imgAlt: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    web: PropTypes.string.isRequired,
  }).isRequired,
};

export default SinglePartner;
