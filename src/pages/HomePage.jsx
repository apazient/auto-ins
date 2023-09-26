import { AccordionTask } from "../components/AccordionTask/AccordionTask";
import data from "../assets/texts/askAns.json";

const HomePage = () => {
  return (
    <>
      <AccordionTask p={data} />
    </>
  );
};

export default HomePage;
