import{P as s,k as j,F as f,j as a}from"./index-f6188fe4.js";import{a as b,L as d,I as k}from"./GeneralInput.styled-7c8e6c7f.js";const B=({id:e,lableText:o,type:l,color:p,handleBlur:u,customFunc:c,placeholder:m,isDisabled:r=!1,isReadOnly:i=!1,formikData:{values:x,handleChange:y,errors:n,touched:t}})=>{const g=j(),h=f(g.breakpoints.up("sm"));return a.jsxs(b,{children:[a.jsxs(d,{sx:{color:r?"darkgray!important":null},variant:"inputLable",component:"label",htmlFor:e,children:[a.jsx("span",{children:o}),t[e]&&!!n[e]&&a.jsx("span",{className:"errorMessages",children:h?n[e]:"Помилка введення"})]}),a.jsx(k,{name:e,type:l||"text",value:x[e],onChange:c||y,onBlur:u,id:e,color:p||"inputBase",error:t[e]&&!!n[e],placeholder:m,disabled:r,readOnly:i})]})};B.propTypes={lableText:s.string.isRequired,id:s.string.isRequired,type:s.string,color:s.string,formikData:s.object,customFunc:s.func,placeholder:s.string};export{B as G};
