import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { SpriteSVG } from "../../images/SpriteSVG";
import { BoxIconS, WhiteButtonS } from "./BtnBackStyled";

const BtnBack = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);

  const handleOnBackClick = () => {
    console.log("Pressed handleOnBackClick");
  };

  return (
    <>
      <Link to={backLinkRef.current ?? "/"}>
        <WhiteButtonS onClick={handleOnBackClick}>
          <BoxIconS style={{ width: "24px", height: "24px", stroke: 'red', fill: 'white'}}>
            <SpriteSVG name={"icon-arrow-left"} />
          </BoxIconS>
          Назад
        </WhiteButtonS>
      </Link>
    </>
  );
};

export default BtnBack;
