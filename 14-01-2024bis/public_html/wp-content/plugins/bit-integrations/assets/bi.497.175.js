import{i as j,u as b,b as d,m as I,r as m,j as e}from"./main-577.js";import{g as S,$ as _,h as w,e as C,i as l}from"./bi.655.81.js";import{I as v}from"./bi.672.677.js";import{c,s as E}from"./bi.787.676.js";import{h as k}from"./bi.230.839.js";import{S as N}from"./bi.982.840.js";import{E as y,a as F}from"./bi.49.675.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";function B({allIntegURL:f}){const g=j(),{id:P,formID:p}=b(),[t,a]=d(S),[n,x]=d(_),o=I(w),[i,r]=m.useState(!1),[u,s]=m.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(C,{snack:u,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:h=>k(h,t,a),name:"name",value:t.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!c(n.triggered_entity)&&e.jsx(y,{setSnackbar:s}),c(n.triggered_entity)&&e.jsx(F,{setSnackbar:s}),e.jsx(N,{formID:p,formFields:o,sendPulseConf:t,setSendPulseConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),e.jsx(v,{edit:!0,saveConfig:()=>E({flow:n,setFlow:x,allIntegURL:f,navigate:g,conf:t,edit:1,setIsLoading:r,setSnackbar:s}),disabled:t.field_map.length<1,isLoading:i,dataConf:t,setDataConf:a,formFields:o}),e.jsx("br",{})]})}export{B as default};