import PropTypes from "prop-types";
import { SpriteSVG } from "../../images/SpriteSVG";
import { BoxIconS } from "./BtnBackStyled";
import { WhiteButton } from "../../style/Global.styled";

const BtnBack = ({backLinkRef}) => {
  
  return (
    <>
      {backLinkRef?.current ? (          
          <WhiteButton            
            to={backLinkRef?.current ?? "/"}            
          >
            <BoxIconS>
              <SpriteSVG name={"icon-arrow-left"} />
            </BoxIconS>
            Назад
          </WhiteButton>        
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

BtnBack.propTypes = {  
  backLinkRef: PropTypes.object,
}

export default BtnBack;