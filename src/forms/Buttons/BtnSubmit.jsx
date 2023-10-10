import PropTypes from 'prop-types';
import { YellowButton } from "../../style/Global.styled";

const BtnSubmit = ({ data, funcNextStep }) => {  

let dataHasNull = false

const hasNullValue = Object.values(data).some((value) => value === null);
if (hasNullValue) {
  //console.log('Есть хотя бы одно поле, равное null');
  dataHasNull = false
} else {
  //console.log('Все поля имеют значения, отличные от null');
  dataHasNull = true
}


  const handleOnSubmitClick = () => {    
    funcNextStep()
  };

  return (
    <>
      {dataHasNull ? (
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
