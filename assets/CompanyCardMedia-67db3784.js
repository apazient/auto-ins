import{j as o,s as i,B as z,_ as p,k as P,b as w,g as O,a as _,T as E,r as d,u as D,e as U,f as H,o as W,a2 as M,P as V,S as v,t as q}from"./index-32c1dfdf.js";import{c as G,H as R,P as J,J as F}from"./Global.styled-128f62db.js";import{u as K}from"./useSlotProps-01bc5678.js";import{C as Q}from"./CardMedia-bc95d8b0.js";const X=G(o.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Y=["slots","slotProps"],Z=i(z)(({theme:e})=>p({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":p({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":p({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:P(e.palette.grey[200],.12)}:{backgroundColor:P(e.palette.grey[600],.12)})})),ee=i(X)({width:24,height:16});function re(e){const{slots:r={},slotProps:c={}}=e,n=w(e,Y),a=e;return o.jsx("li",{children:o.jsx(Z,p({focusRipple:!0},n,{ownerState:a,children:o.jsx(ee,p({as:r.CollapsedIcon,ownerState:a},c.collapsedIcon))}))})}function oe(e){return _("MuiBreadcrumbs",e)}const se=O("MuiBreadcrumbs",["root","ol","li","separator"]),ae=se,te=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],ne=e=>{const{classes:r}=e;return H({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},oe,r)},le=i(E,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${ae.li}`]:r.li},r.root]})({}),ie=i("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ce=i("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function pe(e,r,c,n){return e.reduce((a,s,l)=>(l<e.length-1?a=a.concat(s,o.jsx(ce,{"aria-hidden":!0,className:r,ownerState:n,children:c},`separator-${l}`)):a.push(s),a),[])}const de=d.forwardRef(function(r,c){const n=D({props:r,name:"MuiBreadcrumbs"}),{children:a,className:s,component:l="nav",slots:h={},slotProps:L={},expandText:C="Show path",itemsAfterCollapse:g=1,itemsBeforeCollapse:x=1,maxItems:b=8,separator:B="/"}=n,N=w(n,te),[S,T]=d.useState(!1),u=p({},n,{component:l,expanded:S,expandText:C,itemsAfterCollapse:g,itemsBeforeCollapse:x,maxItems:b,separator:B}),m=ne(u),$=K({elementType:h.CollapsedIcon,externalSlotProps:L.collapsedIcon,ownerState:u}),k=d.useRef(null),A=t=>{const f=()=>{T(!0);const j=k.current.querySelector("a[href],button,[tabindex]");j&&j.focus()};return x+g>=t.length?t:[...t.slice(0,x),o.jsx(re,{"aria-label":C,slots:{CollapsedIcon:h.CollapsedIcon},slotProps:{collapsedIcon:$},onClick:f},"ellipsis"),...t.slice(t.length-g,t.length)]},y=d.Children.toArray(a).filter(t=>d.isValidElement(t)).map((t,f)=>o.jsx("li",{className:m.li,children:t},`child-${f}`));return o.jsx(le,p({ref:c,component:l,color:"text.secondary",className:U(m.root,s),ownerState:u},N,{children:o.jsx(ie,{className:m.ol,ref:k,ownerState:u,children:pe(S||b&&y.length<=b?y:A(y),m.separator,B,u)})}))}),ue=de,Ce=R(e=>e.byParameters.address,e=>e.byParameters.engineCapacity,(e,r)=>({address:e.label,engineCapacity:r.label})),Be=R(e=>e.byParameters.submitObj,e=>e),me=i(ue)(({theme:e})=>({"&.MuiBreadcrumbs-root":{marginBottom:"20px",padding:"0",[e.breakpoints.up("sm")]:{marginBottom:"32px"},[e.breakpoints.up("lg")]:{marginBottom:"80px"}},"& .MuiBreadcrumbs-separator":{marginLeft:"2px",marginRight:"2px"},"& .MuiBreadcrumbs-li":{":last-child":{"& .MuiTypography-root":{color:e.palette.primary.main}}},[e.breakpoints.up("sm")]:{padding:"16px 24px 0 24px"},[e.breakpoints.up("lg")]:{padding:"16px 120px 0 120px"},"& .navLink":{textDecoration:"none",color:e.palette.primary.secondaryDark,[e.breakpoints.up("sm")]:{fontSize:"16px"},":hover":{color:e.palette.primary.blue}}})),ge=i(W)(({theme:e})=>({rotate:"-90deg",width:"24px",height:"24px",fill:e.palette.primary.lightBlue2,stroke:e.palette.primary.secondaryDark})),xe=i(M)(({theme:e})=>({width:"24px",height:"24px",display:"block",fill:e.palette.primary.lightBlue2,stroke:e.palette.primary.secondaryDark,":hover":{stroke:e.palette.primary.blue}})),I=({locationPath:e})=>{const[r,c]=d.useState(e),a=(s=>{switch(s.pathname){case"/prices":return"/prices";case"/form":return"/prices/form"}})(r).split("/").filter(s=>s!=="").map(s=>{var l;return s==="prices"?s="Калькулятор":s="Ваші дані",o.jsx(M,{component:"span",className:"navLink",to:(l=r.state)==null?void 0:l.from,children:s},s)});return o.jsxs(me,{"aria-label":"breadcrumb",separator:o.jsx(ge,{children:o.jsx(v,{name:"icon-chevron-down"})}),children:[o.jsx(xe,{to:"/",children:o.jsx(v,{name:"icon-home-smaller"})}),a]})};I.propTypes={locationPath:V.object};const Se=({children:e})=>{const r=q();return o.jsx(J,{children:o.jsxs(F,{component:"div",children:[o.jsx(I,{locationPath:r}),e]})})},ke=({id:e,alt:r})=>o.jsx(Q,{component:"img",image:`https://web.eua.in.ua/eua/api/binary/companyLogo?id=${e}`,alt:r});export{ke as C,Se as O,Be as a,Ce as g};
