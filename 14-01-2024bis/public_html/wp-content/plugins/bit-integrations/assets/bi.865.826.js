var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(s,t,e)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,r=(s,t)=>{for(var e in t||(t={}))u.call(t,e)&&o(s,e,t[e]);if(d)for(var e of d(t))x.call(t,e)&&o(s,e,t[e]);return s};import{j as a}from"./main-577.js";import{_ as c,L as b,c as f,d as m}from"./bi.655.81.js";function N({saveConfig:s,edit:t,disabled:e,isLoading:i}){return t?a.jsx("div",{className:"txt-right w-9 mt-3",children:a.jsxs("button",{onClick:s,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:e||i,children:[c("Save","bit-integrations"),i&&a.jsx(b,{size:20,clr:"#022217",className:"ml-2"})]})}):a.jsxs("div",{className:"txt-center",children:[a.jsx("h2",{className:"ml-3",children:c("Successfully Integrated","bit-integrations")}),a.jsxs("button",{onClick:s,className:"btn btcd-btn-lg green sh-sm",type:"button",disabled:i,children:[c("Finish & Save ","bit-integrations"),"✔",i&&a.jsx(b,{size:20,clr:"#022217",className:"ml-2"})]})]})}const S=(s,t,e)=>{const i=s.value,l=r({},s);f(i,"checking_function_validity",null,"POST").then(n=>{if(n&&n.success){n.data&&(l.isValid=!0),t(r({},l)),e(!1),m.success(c(`${n.data}, You can proceed`,"bit-integrations"));return}delete l.isValid,t(r({},l)),e(!1),m.error(c(`${n.data}`,"bit-integrations"))})};export{N as C,S as c};
