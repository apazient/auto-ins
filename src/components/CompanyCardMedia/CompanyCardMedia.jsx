import { CardMedia } from "@mui/material";

const CompanyCardMedia = ({ id, alt }) => {
  return (
    <CardMedia
      component="img"
      image={`https://web.eua.in.ua/eua/api/binary/companyLogo?id=${id}`}
      alt={alt}
    />
  );
};

export default CompanyCardMedia;
