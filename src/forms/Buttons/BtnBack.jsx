import { useRef } from "react";
import { useLocation } from "react-router-dom";
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
        <WhiteButtonS onClick={handleOnBackClick} to={backLinkRef.current ?? "/"}>
          <BoxIconS>
            <SpriteSVG name={"icon-arrow-left"} />
          </BoxIconS>
          Назад
        </WhiteButtonS>      
    </>
  );
};

export default BtnBack;
