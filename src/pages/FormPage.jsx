import FormContacts from "../forms/FormContacts/FormContacts";
import { YellowButton } from "../style/Global.styled";

const FormPage = () => {
  return (
    <>
      <div>FormPage</div>
      <YellowButton width={300}>YELLOWBUTTON</YellowButton>
      <div style={{width: '765px'}}>
      <FormContacts/>
      </div>
    </>
  );
};

export default FormPage;
