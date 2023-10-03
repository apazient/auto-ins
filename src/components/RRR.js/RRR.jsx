import { Link } from "react-router-dom";

const RRR = () => {
  return (
    <div style={{display: 'flex', marginTop: '20px'}}>
      <Link to="/" style={{ color: "lime" }}>
        HomePage |
      </Link>
      <Link to="/prices" style={{ color: "lime" }}>
        PricesPage |
      </Link>
      <Link to="/form" style={{ color: "lime" }}>
        FormPage
      </Link>
    </div>
  );
};

export default RRR;
