import { FormContainer } from "../../style/Global.styled";
import BtnBack from "../Buttons/BtnBack";
import BtnSubmit from "../Buttons/BtnSubmit";

const FormContacts = () => { 
  

  return (
    <FormContainer>
      <h2 style={{ color: "black" }}>FormContacts</h2>
      <form>
        <label>
          <input></input>
        </label>
        <p style={{color: 'black'}}>*ПЕРЕКОНАЙТЕСЬ ЩО ПОШТУ ВКАЗАНО КОРЕКТНО. НА ВКАЗАНУ ВАМИ ЕЛЕКТРОННУ ПОШТУ БУДЕ НАДІСЛАНО ДОГОВІР СТРАХУВАННЯ.</p>
        <label>
          <input></input>
        </label>
      </form>
      <div>        
        <BtnBack/>
        <BtnSubmit />
      </div>
    </FormContainer>
  );
};

export default FormContacts;
