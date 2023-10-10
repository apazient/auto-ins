import PropTypes from "prop-types";
import { SpriteSVG } from "../../images/SpriteSVG";
import { BoxIconS } from "./BtnBackStyled";
import { WhiteButton } from "../../style/Global.styled";


const BtnBack = ({step, funcPreviousStep, backLinkRef}) => {
  // console.log(step);  
  // console.log('backLinkRef', backLinkRef);

  const handleOnBackClick = () => {    
    if(step === 1) return;
    funcPreviousStep()
  }
    

  return (
    <>
      {backLinkRef?.current ? (      
          
          <WhiteButton        
            onClick={handleOnBackClick}
            to={step === 1 ? backLinkRef?.current ?? "/" : undefined}            
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
  step: PropTypes.number,
  funcPreviousStep: PropTypes.func,
  backLinkRef: PropTypes.object,

}

export default BtnBack;



