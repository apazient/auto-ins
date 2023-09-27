import { BallTriangle } from "react-loader-spinner";
import { LoaderBox } from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderBox>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoaderBox>
  );
};

export default Loader;
