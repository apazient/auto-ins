import { useState } from "react";
import FormContacts from "../FormContacts/FormContacts";

const AllFormsContainer = () => {
  const [step, setStep] = useState(1);
//   console.log(step);
  const funcNextStep = () => {    
    setStep(step+1);
  };
  return (
    <>
    {step <2 ? console.log('step1') : step<3? console.log('step2') : step<4? console.log('step3') : step===4? console.log('step4') : console.log('stop stepper')}
      <FormContacts funcNextStep={funcNextStep}/>
    </>
  );
};

export default AllFormsContainer;
