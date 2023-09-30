import React from "react";
import { AbsatzS, WrapperS } from "./TexBlockStyled";

const TextBlock = () => {
  return (
    <WrapperS>
      <AbsatzS variant="caption" component="p">
        <strong>ОСЦПВ</strong> - твоя відповідальність перед суспільством!
      </AbsatzS>
      <AbsatzS variant="caption" component="p">
        <strong>ОСЦПВ</strong> - обов<span>&#39;</span>язковий вид страхування
        для автовласників за Законом, а ще це захист інтересів усіх учасників
        дорожнього руху.
      </AbsatzS>
    </WrapperS>
  );
};

export default TextBlock;
