import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { SpriteSVG } from "../../images/SpriteSVG";
import { BoxIconS } from "./BtnBackStyled";
import { WhiteButton } from "../../style/Global.styled";

const BtnBack = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);

  const handleOnBackClick = () => {
    console.log("Pressed handleOnBackClick");
  };

  return (
    <>
      {backLinkRef.current ? (
        <>
          <WhiteButton
            onClick={handleOnBackClick}
            to={backLinkRef.current ?? "/"}
          >
            <BoxIconS>
              <SpriteSVG name={"icon-arrow-left"} />
            </BoxIconS>
            Назад
          </WhiteButton>
        </>
      ) : (
        <>
          <WhiteButton className="Mui-disabled">
            <BoxIconS className="disabled">
              <SpriteSVG name={"icon-arrow-left"} />
            </BoxIconS>
            Назад
          </WhiteButton>
        </>
      )}
    </>
  );
};

export default BtnBack;
