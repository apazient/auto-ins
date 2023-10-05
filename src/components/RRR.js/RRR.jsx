import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const RRR = () => {
  const location = useLocation()
  // console.log('RRR', location);
  return (
    <div style={{display: 'flex', marginTop: '20px'}}>
      <Link to="/" style={{ color: "lime" }}>
        HomePage |
      </Link>
      <Link to="/prices" style={{ color: "lime" }}>
        PricesPage |
      </Link>
      <Link state={{from: location}} to="/form"  style={{ color: "lime" }}>
        FormPage
      </Link>
    </div>
  );
};

export default RRR;
