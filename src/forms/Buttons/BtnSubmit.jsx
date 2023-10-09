import PropTypes from 'prop-types';
import { YellowButton } from "../../style/Global.styled";

const BtnSubmit = ({ data, funcNextStep }) => {
  // console.log("data", data);
  const {email, phone} = data;

  const handleOnSubmitClick = () => {    
    funcNextStep()
  };

  return (
    <>
      {email && phone ? (
        <YellowButton type="submit" onClick={handleOnSubmitClick}>
          Підтвердити
        </YellowButton>
      ) : (
        <YellowButton disabled type="submit" onClick={handleOnSubmitClick}>
          Підтвердити
        </YellowButton>
      )}
    </>
  );
};

BtnSubmit.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  funcNextStep: PropTypes.func,
};
export default BtnSubmit;
