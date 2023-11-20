import { useState } from "react";
import { AbsatzS } from "./InfoSectionStyle";
import PropTypes from "prop-types";

const Text = ({ text }) => {
  const [constent, _] = useState(text);
  return (
    <>
      {constent.map((item, index) => (
        <AbsatzS key={index} variant="caption" component="p" role="text">
          {item.text} {item.strongText && <strong>{item.strongText}</strong>}
          {item.restText}
        </AbsatzS>
      ))}
    </>
  );
};

export default Text;
Text.propTypes = {
  text: PropTypes.array.isRequired,
};
