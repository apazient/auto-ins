import { useState } from "react";
import { AbsatzS } from "./InfoSectionStyle";
import { start } from "../../assets/utils/infoData";

const StartText = () => {
  const [startContent] = useState(start);
  return (
    <>
      {startContent.map((item, index) => (
        <AbsatzS key={index} variant="caption" component="p" role="text">
          {item.text} {item.strongText && <strong>{item.strongText}</strong>}{" "}
          {item.restText}
        </AbsatzS>
      ))}
    </>
  );
};

export default StartText;
