import BtnBack from "../Buttons/BtnBack";
import BtnSubmit from "../Buttons/BtnSubmit";

const Step4 = ({ step, funcNextStep, funcPreviousStep, backLinkRef }) => {
    const userContacts = {
        email: 'test@test.com',
        phone: '1234567890',
      };

  return (
    <>
      <div>Step4</div>
      <BtnBack step={step} funcPreviousStep={funcPreviousStep} backLinkRef={backLinkRef}/>
      <BtnSubmit data={userContacts} step={step} funcNextStep={funcNextStep} />
    </>
  );
};

export default Step4;
