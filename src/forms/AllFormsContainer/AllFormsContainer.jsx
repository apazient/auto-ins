import { useRef, useState } from "react";
import FormContacts from "../FormContacts/FormContacts";
import Step2 from "../FormContacts/Step2";
import Step3 from "../FormContacts/Step3";
import Step4 from "../FormContacts/Step4";
import { useLocation } from "react-router-dom";

const AllFormsContainer = () => {
  const [step, setStep] = useState(1);  
  const location = useLocation();
  let backLinkRef = useRef(location.state?.from);

  const funcNextStep = () => {    
    setStep(step+1);
  };
  const funcPreviousStep = () => {    
    setStep(step-1);
  };
  
  return (
    <>    
      {step === 1 && <FormContacts step = {step} funcNextStep={funcNextStep} backLinkRef={backLinkRef}/>}
      {step === 2 && <Step2 step = {step} funcNextStep={funcNextStep} funcPreviousStep={funcPreviousStep} backLinkRef={backLinkRef}/>}
      {step === 3 && <Step3 step = {step} funcNextStep={funcNextStep} funcPreviousStep={funcPreviousStep} backLinkRef={backLinkRef}/>}
      {step === 4 && <Step4 step = {step} funcNextStep={funcNextStep} funcPreviousStep={funcPreviousStep} backLinkRef={backLinkRef}/>}
    </>
  );
};

export default AllFormsContainer;
