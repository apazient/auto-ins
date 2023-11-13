import { BallTriangle } from "react-loader-spinner";
import { LoaderBox } from "./LoaderStyled";

const Loader = () => {  
  return (
    <LoaderBox>
      <BallTriangle
        height={200}
        width={200}
        radius={5.1}
        color="#1547F8"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoaderBox>
  );
};

export default Loader;
